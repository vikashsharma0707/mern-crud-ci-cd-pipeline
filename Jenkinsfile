pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = 'dockerhub-creds'
        DOCKERHUB_USER = 'vikashsharma0707'
        BACKEND_IMAGE = 'vikashsharma0707/practicecrud-backend'
        FRONTEND_IMAGE = 'vikashsharma0707/practicecrud-frontend'
    }

    stages {

        stage('Clone Code') {
            steps {
                git branch: 'master',
                    url: 'https://github.com/vikashsharma0707/mern-crud-ci-cd-pipeline.git'
            }
        }

        stage('Build Docker Images') {
            steps {
                sh 'docker compose build'
            }
        }

        stage('Docker Hub Login') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                }
            }
        }

        stage('Push Images') {
            steps {
                sh 'docker compose push'
            }
        }
    }

    post {
        success {
            echo '✅ CI Pipeline Successful'
        }
        failure {
            echo '❌ CI Pipeline Failed'
        }
    }
}
