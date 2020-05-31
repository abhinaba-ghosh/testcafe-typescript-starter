pipeline {
  agent {
    docker {
      image 'testcafe/testcafe'
    }
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
      sh 'sudo npm install'
      sh 'sudo npm run clean'
      sh 'sudo npm run lint'
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