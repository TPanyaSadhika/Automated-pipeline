pipeline {
    agent any

    tools {
        nodejs "NodeJS"   // <-- Use the NodeJS name you added under Jenkins Tools
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/TPanyaSadhika/Automated-pipeline.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'   // use 'sh' if running on Linux
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
