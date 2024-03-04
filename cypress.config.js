const { defineConfig } = require('cypress')
const { cypressBrowserPermissionsPlugin } = require('cypress-browser-permissions')

module.exports = defineConfig({
  env: {
    browserPermissions: {
      notifications: "allow",
      geolocation: "allow",
    },
  },
  chromeWebSecurity: false,
  retries: 2,
  defaultCommandTimeout: 20000,
  video: true,
  videoCompression: 32,
  screenshotOnRunFailure: true,
  viewportWidth: 2400,
  viewportHeight: 1600,
  fixturesFolder:'cypress/fixtures',
  screenshotsFolder:'cypress/screenshots',
  videosFolder:'cypress/videos',
  e2e: {
    baseUrl: 'https://www.amazon.com',
    setupNodeEvents(on, config) {
      config = cypressBrowserPermissionsPlugin(on, config)
      return config
    },
  },
})
