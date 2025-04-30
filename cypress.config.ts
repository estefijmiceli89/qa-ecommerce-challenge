import { defineConfig } from 'cypress'
import createBundler from '@bahmutov/cypress-esbuild-preprocessor'
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor'
import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild'

async function setupNodeEvents(
    on: Cypress.PluginEvents,
    config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
    await addCucumberPreprocessorPlugin(on, config)

    on(
        'file:preprocessor',
        createBundler({
            plugins: [createEsbuildPlugin(config)],
        })
    )

    return config
}

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome',
    overwrite: true,
    html: true,              
    json: false,               
    embeddedScreenshots: true,
    inlineAssets: true,
    charts: true,
    code: false,
    showCode: false
  },
  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/integration/**/*.feature',
    baseUrl: 'http://localhost:3000/',
    supportFile: 'cypress/support/e2e.{js,jsx,ts,tsx}',
    video: false,
    screenshotOnRunFailure: true,
    experimentalRunAllSpecs: true,
    testIsolation: false
  },
});