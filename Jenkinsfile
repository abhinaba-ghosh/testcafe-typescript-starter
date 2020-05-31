pipeline {
  options {
    disableConcurrentBuilds()
    buildDiscarder(logRotator(numToKeepStr: '10'))
  }
  agent {
    dockerfile {
      label 'buildfarm'
      args '-v /var/jenkins_home:/var/jenkins_home -v /var/run/docker.sock:/var/run/docker.sock -v /usr/bin/docker:/usr/bin/docker'
    }
  }

  stages {
    stage('Build/Test') {
      steps {
        script {
          checkout scm

          def customImage = docker.build("${BUILD_TAG}")

          customImage.inside("-u 1000:1000") {
            stage("Test") {

              sh "npm install"
              sh "npm install testcafe"
              sh "npm run test"
            }
          }
        }
      }
    }
  }
}