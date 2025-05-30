import Honeybadger from '@honeybadger-io/js'

const projectRoot = process.cwd()
Honeybadger
  .configure({
    apiKey: process.env.HONEYBADGER_API_KEY,
    environment: process.env.VERCEL_TARGET_ENV,
    revision: process.env.VERCEL_GIT_COMMIT_SHA,
    projectRoot: 'webpack:///./',
    // debug: true,
    // reportData: true,
  })
  .beforeNotify((notice) => {
    if (!notice) {
      return
    }
    notice.backtrace.forEach((line) => {
      if (line.file) {
        line.file = line.file.replace(`${projectRoot}/.next/server`, `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`)
      }
      return line
    })
  })
Honeybadger.logger.debug('Honeybadger configured for server')
