import { Honeybadger } from '@honeybadger-io/react'

Honeybadger.configure({
  apiKey: process.env.NEXT_PUBLIC_HONEYBADGER_API_KEY,
  environment: process.env.NEXT_PUBLIC_VERCEL_TARGET_ENV,
  revision: process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA,
  projectRoot: 'webpack://_N_E/./',
  // debug: true,
  // reportData: true,
})
Honeybadger.logger.debug('Honeybadger configured for browser')
