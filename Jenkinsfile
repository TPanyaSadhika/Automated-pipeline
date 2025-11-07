pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo '✅ Pulling latest code from GitHub...'
                git branch: 'main', url: 'https://github.com/TPanyaSadhika/Automated-pipeline.git'
            }
        }

        stage('Build') {
            steps {
                echo '🧱 No build needed — this is a static website.'
            }
        }

        stage('Deploy') {
            steps {
                echo '🎉 Static website files are ready for deployment!'
                echo 'You can now deploy these files to GitHub Pages or a web server.'
            }
        }
    }
}
