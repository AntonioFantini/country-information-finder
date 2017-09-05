pipeline {
  agent any
  stages {
    stage('CommunityArtifactsVersioningChecks') {
      steps {
        git(url: 'https://github.com/AntonioFantini/gates-tool.git', branch: 'master')
        load 'communityartifactsversioning/RunGate.groovy'
      }
    }
  }
}