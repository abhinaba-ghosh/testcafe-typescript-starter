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

  stage('Clean Previous Reports') {
   steps {
    sh 'npm run clean'
   }
  }

  stage('Run TestCafe') {
   steps {
    sh 'npx testcafe chromium testcafe/**/*.js'
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