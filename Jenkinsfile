node {
 TESTCAFE_DOCKER_PATH = 'docker/Dockerfile'
}

pipeline {
 agent {
  dockerfile {
   filename "${TESTCAFE_DOCKER_PATH}"
  }
 }
 environment {
  HOME = '.'
 }
 stages {
  stage('Clone scm') {
   steps {
    checkout([$class: 'GitSCM', branches: [
      [name: '*/master']
     ],
     userRemoteConfigs: [
      [url: 'https://github.com/abhinaba-ghosh/testcafe-typescript-starter.git']
     ]
    ])
   }
  }

  stage('Configuration') {
   steps {
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
    sh 'docker rm -vf $(docker ps -a -q)'
    sh 'docker rmi -f $(docker images -a -q)'
   }
  }
 }
}