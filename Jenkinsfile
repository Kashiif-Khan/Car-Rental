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

        stage('Docker Run') {
            steps {
                sh '''
                    docker stop car-rental-container || true
                    docker rm car-rental-container || true

                    docker run -d \
                      --name car-rental-container \
                      -p 8082:80 \
                      car-rental-app
                '''
            }
        }

    }
}
