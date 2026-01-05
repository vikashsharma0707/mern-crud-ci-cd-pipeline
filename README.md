🚀 MERN CRUD Application with CI/CD, Docker & Kubernetes
📌 Project Overview

This project is a full-stack MERN CRUD application deployed using a complete CI/CD pipeline and modern DevOps tools.

The goal of this project is to demonstrate real-world deployment flow:
from code commit → automated build → containerization → orchestration → live deployment.

🛠️ Tech Stack
Frontend

React.js (Vite)

HTML, CSS, JavaScript

Nginx (Production build)

Backend

Node.js

Express.js

MongoDB (Atlas)

DevOps & Deployment

Jenkins (CI/CD)

Docker & Docker Compose

Docker Hub (Image Registry)

Kubernetes (Minikube)

Render (Backend Hosting)

🏗️ System Architecture
User Browser
     |
     v
Frontend (React + Nginx)  ----->  Backend (Node + Express)  -----> MongoDB Atlas
     |
     v
Kubernetes Service (NodePort)


Frontend and backend are separate Docker containers

Deployed as Kubernetes Deployments

Exposed using NodePort Services

Backend also deployed on Render using Docker

🔄 CI/CD Pipeline Flow (Jenkins)

Developer pushes code to GitHub

Jenkins pipeline triggers automatically

Docker images are built for:

Backend

Frontend

Images are pushed to Docker Hub

Kubernetes pulls images from Docker Hub

Pods are created / updated automatically

✔ Fully automated
✔ No manual deployment
✔ Production-ready flow

🐳 Docker Implementation

Separate Dockerfile for frontend and backend

Backend runs on port 5000

Frontend uses multi-stage Docker build

Production frontend served via Nginx

☸️ Kubernetes Implementation
Kubernetes Resources Used

Deployment

Service (NodePort)

Backend

2 replicas for scalability

Environment variables injected via deployment YAML

Frontend

Static build served through Nginx

Exposed using NodePort service

Useful Commands
kubectl get pods
kubectl get svc
minikube service frontend-service --url
minikube service backend-service --url

🌐 Render Deployment (Backend)

Backend deployed on Render using Docker

Connected GitHub repository

Provided:

Dockerfile path

Environment variables (MongoDB URI, PORT)

Render automatically:

Builds Docker image

Deploys backend API

Provides HTTPS endpoint

⚠️ Challenges Faced & Solutions
Issue	Solution
Docker permission denied in Jenkins	Added Jenkins user to docker group
Docker Hub push failed	Used Personal Access Token
ImagePullBackOff in Kubernetes	Fixed Docker image name
Frontend blank page	Switched from Vite dev mode to Nginx static build
Minikube tunnel issues	Restarted tunnel
🎯 Key Learnings

End-to-end CI/CD pipeline setup

Docker image consistency across environments

Kubernetes orchestration & self-healing

Production-ready frontend deployment

Real-world debugging & troubleshooting



📌 How to Run Locally
docker-compose up --build

🧠 Resume Highlight

“Designed and deployed a full-stack MERN application using Jenkins CI/CD, Docker, Docker Hub, Kubernetes (Minikube), and Render with automated builds and scalable architecture.”

👨‍💻 Author

Vikash Sharma
MERN Stack Developer | DevOps Enthusiast

⭐ If you like this project

Give it a ⭐ on GitHub!