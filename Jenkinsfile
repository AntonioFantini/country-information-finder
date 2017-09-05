pipeline {
  agent any
  stages {
    stage('CommunityArtifactsVersioningChecks') {
      steps {
        git(url: 'http://git.app.eng.bos.redhat.com/git/jboss-prod-core/gates.git/', branch: 'master')
        load 'gates/communityartifactsversioning/RunGate.groovy'
      }
    }
    stage('UniqueVerionsIdentifiers') {
      steps {
        load 'gates/uniqueversionsidentifiers/RunGate.groovy'
      }
    }
  }
}