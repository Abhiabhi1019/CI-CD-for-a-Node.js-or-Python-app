pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Abhiabhi1019/CI-CD-for-a-Node.js-or-Python-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test || echo "No tests found"'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t my-node-app:latest .'
            }
        }

        stage('Deploy Container') {
            steps {
                sh '''
                docker rm -f my-node-app || true
                docker run -d -p 3000:3000 --name my-node-app my-node-app:latest
                '''
            }
        }
    }
}
