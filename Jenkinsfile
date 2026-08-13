pipeline {
    agent any

    stages {

        stage('Check Tools') {
            steps {
                sh 'node --version'
                sh 'npm --version'
                sh 'docker --version'
            }
        }

        stage('Build React App') {
            steps {
                dir('Car-Retal-System') {
                    sh 'npm ci'
                    sh 'npm run build'
                }
            }
        }

        stage('Docker Build') {
            steps {
                dir('Car-Retal-System') {
                    sh 'docker build -t car-rental-app .'
                }
            }
        }

    }
}
