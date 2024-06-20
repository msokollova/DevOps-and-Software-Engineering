pipeline{
    agent any
    stages{
        stage("NPM Install"){
            steps{
                bat 'npm install'
            }
           
        }
        stage("NPM Audit"){
            steps{
                bat 'npm audit'
            }
           
        }
    }
}