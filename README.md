# CI-CD-for-a-Node.js-or-Python-app
set up CI/CD for a Node.js or Python app with GitHub → Jenkins → Docker → Deployment

Quick project summary

my-node-app is a simple Express application that listens on port 3000.

my-python-app is a simple Flask application that listens on port 5000.

Each app has a Dockerfile for building container images.

Two Jenkins pipelines are included:

Root Jenkinsfile (recommended as a job for Node.js) — uses dir('my-node-app') to run commands.

my-python-app/Jenkinsfile — separate Jenkins job target for Python pipeline.

Prerequisites (server where Jenkins runs)

Ubuntu/Debian or similar Linux host

Jenkins installed and running (default user jenkins)

Docker installed and running

Git

(Optional) Docker Hub account (for pushing images)

Important permissions: Add the jenkins user to the docker group so Jenkins can run Docker commands:

sudo usermod -aG docker jenkins
sudo systemctl restart jenkins

How to use (step-by-step)
1. Clone repo locally
git clone https://github.com/<your-username>/CI-CD-for-a-Node.js-or-Python-app.git
cd CI-CD-for-a-Node.js-or-Python-app

2. Node.js app — local run
cd my-node-app
npm install # creates node_modules and downloads dependencies
node app.js # verifies app runs on http://localhost:3000
Docker (local):
docker build -t my-node-app:latest .
docker rm -f my-node-app || true
docker run -d -p 3000:3000 --name my-node-app my-node-app:latest

3. Python app — local run (using venv)
cd my-python-app
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python app.py # verifies app runs on http://localhost:5000

Docker (local):
docker build -t my-python-app:latest .
docker rm -f my-python-app || true
docker run -d -p 5000:5000 --name my-python-app my-python-app:latest

If you get address already in use when running containers, find and stop the process that uses the port or choose a different host port (example -p 5001:5000).

Jenkins setup (create two pipeline jobs)

A. Node.js pipeline (root Jenkinsfile)

In Jenkins: New Item → Pipeline → OK

Under Pipeline select Pipeline script from SCM

SCM: Git

Repository URL: https://github.com/<your-username>/CI-CD-for-a-Node.js-or-Python-app.git

Branch Specifier: */main

Script Path: Jenkinsfile

Under Build Triggers, enable GitHub hook trigger for GITScm polling (if webhook configured)

Save and run.

B. Python pipeline (my-python-app/Jenkinsfile)

New Pipeline job

SCM and repo same as above

Script Path: my-python-app/Jenkinsfile

Save and run.

This project is provided as-is for learning/demo purposes...




