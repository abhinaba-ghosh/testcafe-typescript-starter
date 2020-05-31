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
    stage('Run TestCafe') {
      steps {
        sh 'testcafe "chromium --no-sandbox" testcafe/**/*.ts -s screenshots --reporter spec,xunit:results/test-results.xml'
      }
      post {
        always {
          junit 'results/test-results.xml'
        }
      }
    }
  }
}