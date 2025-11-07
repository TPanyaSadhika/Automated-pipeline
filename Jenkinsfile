pipeline {
    agent any

    tools {
        nodejs "Node16"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/TPanyaSadhika/Automated-pipeline.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build Project') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                echo "✅ Build & Deployment successful!"
            }
        }
    }
}
