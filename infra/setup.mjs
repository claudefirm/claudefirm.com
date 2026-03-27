#!/usr/bin/env node
/**
 * ClaudeFirm infrastructure setup
 * Configures Cloudflare Access via the official SDK.
 *
 * Usage:
 *   CF_API_TOKEN=$(op item get hnk6uyj3tcg4tfvzse3fi3b7de --fields credential --reveal) node infra/setup.mjs
 */

import Cloudflare from 'cloudflare'

const ACCOUNT_ID = 'c6c0da6f79d5b4a62fe1d2eff2f108e5'
const GOOGLE_IDP_ID = '244d93e6-0476-41a0-803d-8aa03502d87c'
const DOMAIN = 'claudefirm.com'
const APP_NAME = 'ClaudeFirm Admin'

const ADMIN_EMAILS = [
  'dgruber@gmail.com',
  'sarahmgruber@gmail.com',
  'carrie@schultzfamilylaw.com',
  'carriegruber@gmail.com',
]

const token = process.env.CF_API_TOKEN
if (!token) {
  console.error('Set CF_API_TOKEN. Example:')
  console.error('  CF_API_TOKEN=$(op item get hnk6uyj3tcg4tfvzse3fi3b7de --fields credential --reveal) node infra/setup.mjs')
  process.exit(1)
}

const cf = new Cloudflare({ apiToken: token })

const emailRules = ADMIN_EMAILS.map(email => ({ email: { email } }))

async function main() {
  // Verify token
  console.log('=== Verifying token ===')
  const verify = await cf.user.tokens.verify()
  console.log(`  Token: ${verify.status}`)

  // List existing Access apps
  console.log('\n=== Cloudflare Access ===')
  const apps = await cf.zeroTrust.access.applications.list({ account_id: ACCOUNT_ID })
  const existing = apps.result?.find(a => a.name === APP_NAME)

  const appConfig = {
    account_id: ACCOUNT_ID,
    name: APP_NAME,
    type: 'self_hosted',
    self_hosted_domains: [`${DOMAIN}/admin`, `${DOMAIN}/api/admin`],
    session_duration: '24h',
    allowed_idps: [GOOGLE_IDP_ID],
    auto_redirect_to_identity: true,
  }

  let appId
  if (existing) {
    console.log(`  Updating existing app: ${existing.id}`)
    const updated = await cf.zeroTrust.access.applications.update(existing.id, appConfig)
    appId = updated.id
    console.log(`  Domains: ${updated.self_hosted_domains}`)
  } else {
    console.log('  Creating new app...')
    const created = await cf.zeroTrust.access.applications.create({
      ...appConfig,
      policies: [{
        name: 'Admin Access',
        decision: 'allow',
        precedence: 1,
        include: emailRules,
      }],
    })
    appId = created.id
    console.log(`  Created: ${appId}`)
  }

  // Update policy if app existed
  if (existing) {
    const policies = await cf.zeroTrust.access.applications.policies.list(appId, { account_id: ACCOUNT_ID })
    const policy = policies.result?.[0]
    if (policy) {
      await cf.zeroTrust.access.applications.policies.update(policy.id, {
        account_id: ACCOUNT_ID,
        app_id: appId,
        name: 'Admin Access',
        decision: 'allow',
        precedence: 1,
        include: emailRules,
      })
      console.log('  Policy updated')
    }
  }

  // Summary
  console.log('\n=== Summary ===')
  console.log(`  Domain:        ${DOMAIN}`)
  console.log(`  Access app:    ${appId}`)
  console.log(`  Admin emails:  ${ADMIN_EMAILS.join(', ')}`)
  console.log(`  IdP:           Google (${GOOGLE_IDP_ID})`)
  console.log(`  KV namespace:  WAITLIST (7a77531c04a440d59b409192363fab11)`)
  console.log('\n  Secrets (set via wrangler):')
  console.log('    npx wrangler secret put TURNSTILE_SECRET_KEY --name claudefirm')
  console.log('\nDone.')
}

main().catch(err => {
  console.error('Error:', err.message)
  process.exit(1)
})
