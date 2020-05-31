// eslint-disable-next-line unicorn/prevent-abbreviations
const DOC_ALLURE_CONFIG = {
  CLEAN_REPORT_DIR: true,
  RESULT_DIR: '/reports/allure/allure-results',
  REPORT_DIR: '/reports/allure/allure-report',
  META: {
    STORY_ID: 'STORY',
    TEST_ID: 'ID',
    SEVERITY: 'SEVERITY',
    TEST_RUN: 'TEST_RUN',
  },
  labels: {
    screenshotLabel: 'Screenshot',
    browserLabel: 'Browser',
    userAgentLabel: 'User Agent',
    allureStartMessage: 'Allure reporter started...',
    allureClosedMessage: 'Allure reporter closed...',
  },
};

// eslint-disable-next-line no-undef
module.exports = DOC_ALLURE_CONFIG;
