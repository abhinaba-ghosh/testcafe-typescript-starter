pipeline {
  agent {
    docker {
      image 'testcafe/testcafe'
    }
  }
   environment {
        HOME = '.'
    }
  stages {
    stage('Clone scm') {
      steps {
        checkout([$class: 'GitSCM', branches: [[name: '*/master']],
          userRemoteConfigs: [[url: 'https://github.com/abhinaba-ghosh/testcafe-typescript-starter.git']]])
      }
    }

     stage('Configuration') {
      steps {
      sh 'npm install -g allure-commandline testcafe-reporter-allure --loglevel verbose'
      sh 'npm run clean'
      sh 'npm run lint'
      }
    }

    stage('Run TestCafe') {
      steps {
        sh 'npx testcafe chromium ./testcafe/**/*.spec.ts --reporter allure,xunit:reports/xml/report.xml'
      }
      post {
        always {
          junit 'reports/xml/report.xml'
        }
      }
    }

    stage('Teardown') {
      steps {
        sh """
  docker ps -a \
    | awk '{ print \$1,\$2 }' \
    | grep imagename \
    | awk '{print \$1 }' \
    | xargs -I {} docker rm -f {}
  """
      }
    }
  }
}