const { defineConfig } = require('cypress')

module.exports = defineConfig({
    e2e: {
        baseUrl : 'https://ww2.leonardhors.site',
        specPattern : "cypress/support/e2e",
        supportFile : false

    }
})