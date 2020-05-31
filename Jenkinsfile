node {
 TESTCAFE_DOCKER_PATH = 'docker/Dockerfile'
}

pipeline {
 agent {
    docker {
      image 'honomoa/docker-jenkins-testcafe'
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
    sh 'npm run e2e:firefox' 
   }
  }

  stage('Run TestCafe') {
   steps {
    sh 'echo'
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