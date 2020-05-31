pipeline {
  agent { 
                docker {
                        image 'testcafe/testcafe'
                        args  '--net=host -e DISPLAY=":0"'
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

  stage('Run TestCafe') {
   steps {
     sh 'npm i --verbose'
    sh "node_modules/.bin/testcafe 'chromium:headless --no-sandbox --disable-dev-shm-usage' ./testcafe/**/*.spec.ts" 
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


