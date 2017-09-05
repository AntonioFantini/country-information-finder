pipeline {
  agent any
  stages {
    stage('CommunityArtifactsVersioningChecks') {
      steps {
        git(url: 'http://git.app.eng.bos.redhat.com/git/jboss-prod-core/gates.git/', branch: 'master')
        load 'communityartifactsversioning/RunGate.groovy'
      }
    }
  }
}