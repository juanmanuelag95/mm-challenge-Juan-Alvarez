exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://www.manomano.co.uk/',
      show: true,
      browser: 'chromium'
    }
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    }
  },
  name: 'Question_5'
}