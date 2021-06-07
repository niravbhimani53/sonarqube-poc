const scanner = require('sonarqube-scanner');

// https://github.com/bellingard/sonar-scanner-npm
// This runs SonarQube analysis over our project and sends the information to SonarQube application
scanner(
  {
    serverUrl : 'http://localhost:9000',  // hosted sonar qubeurl Example => https://sonarqube.mycompany.com
    options: {
      // Token value
      'sonar.login': "<project-token>",
      // Name of the token
      'sonar.projectKey': '<project-token-name>',
      // Name of the project
      'sonar.projectName': '<project-name>',
      'sonar.sources': 'src',
      'sonar.tests': 'src',
      'sonar.inclusions': 'src/**/*.ts, src/**/*.tsx, src/**/*.jsx, src/**/*.js', // Entry point of your code
      'sonar.test.inclusions': 'src/**/*.spec.ts,src/**/*.spec.jsx',
    },
  },
  () => process.exit()
)