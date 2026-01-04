pipeline {
    agent any

    environment {
        DOCKER_USER = "vikashsharma0707"
        BACKEND_IMAGE = "practicecrud-backend"
        FRONTEND_IMAGE = "practicecrud-frontend"
    }

    stages {

        stage('Clone Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/vikashsharma0707/mern-crud-ci-cd-pipeline.git'
            }
        }

        stage('Build Docker Images') {
            steps {
                sh 'docker build -t $DOCKER_USER/$BACKEND_IMAGE ./backend'
                sh 'docker build -t $DOCKER_USER/$FRONTEND_IMAGE ./frontend'
            }
        }

        stage('Docker Hub Login') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'DOCKER_USERNAME',
                    passwordVariable: 'DOCKER_PASSWORD'
                )]) {
                    sh 'echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin'
                }
            }
        }

        stage('Push Images') {
            steps {
                sh 'docker push $DOCKER_USER/$BACKEND_IMAGE'
                sh 'docker push $DOCKER_USER/$FRONTEND_IMAGE'
            }
        }
    }

    post {
        success {
            echo "✅ CI Pipeline Completed Successfully!"
        }
        failure {
            echo "❌ CI Pipeline Failed"
        }
    }
}
