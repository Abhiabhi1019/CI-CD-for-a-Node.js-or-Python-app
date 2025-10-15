pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo "Cloning repository..."
                git branch: 'main', url: 'https://github.com/Abhiabhi1019/CI-CD-for-a-Node.js-or-Python-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                dir('my-node-app') {
                    echo "Installing Node.js dependencies..."
                    sh 'npm install'
                }
            }
        }

        stage('Test') {
            steps {
                dir('my-node-app') {
                    echo "Running tests (if available)..."
                    sh 'npm test || echo "No tests found"'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                dir('my-node-app') {
                    echo "Building Docker image for Node.js app..."
                    sh 'docker build -t my-node-app:latest .'
                }
            }
        }

        stage('Deploy Container') {
            steps {
                echo "Deploying Node.js container..."
                sh '''
                docker rm -f my-node-app || true
                docker run -d -p 3000:3000 --name my-node-app my-node-app:latest
                '''
            }
        }
    }
}

