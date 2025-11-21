
# Java Vulnerability Scanner – CI/CD Pipeline (Git, Jenkins, AWS, Maven, Spring Boot, React)

A fully automated CI/CD pipeline for a Java-based Vulnerability Scanner built using **Spring Boot**, **React**, **Jenkins**, and **AWS EC2**.  
The project integrates build automation, testing, security scanning, and cloud deployment to ensure fast, reliable, and secure delivery.



## 🚀 Project Overview

This project automates the complete lifecycle of a Java Vulnerability Scanner application — from code push to deployment.

**Key achievements:**
- 100% automated integration + deployment flow  
- 40% reduction in deployment time  
- Scalable microservice architecture  
- Secure AWS-based deployment  



## 🧩 Architecture

Developer → GitHub → Jenkins → Maven Build → Tests ↓ Security Scan → AWS EC2 Deployment



## 🛠️ Tech Stack

### Backend
- Java  
- Spring Boot  
- Maven  
- REST APIs  

### Frontend
- React.js  
- Axios  

### DevOps
- Git  
- Jenkins  
- AWS EC2  
- Linux  
- Shell Scripts  



## 📌 Features

### 🔐 Java Vulnerability Scanner
- Scans Java source code for insecure patterns  
- Identifies unsafe methods or vulnerable code blocks  
- Generates a formatted report  

### ⚙️ End-to-End CI/CD Pipeline
- Auto-trigger on GitHub push  
- Maven build + unit tests  
- Security scanning  
- Artifact packaging  
- Automated deployment to EC2  

### ☁️ AWS Deployment
- Backend deployed as systemd service  
- Frontend served via Nginx  
- Optional S3 integration  



## 📂 Project Structure

/backend ├── src/main/java ├── pom.xml

/frontend ├── src ├── package.json

/jenkins ├── Jenkinsfile

/docs ├── diagram.png



## 🧪 Pipeline Workflow

1. Code pushed to GitHub  
2. Jenkins pipeline triggers automatically  
3. Maven build + unit tests  
4. Security scan stage  
5. Artifact packaging  
6. SCP/SSH deployment to EC2  
7. Backend service restart  
8. Frontend build update  
9. Deployment complete  



## 🚀 Local Setup

### Backend
```bash
cd backend
mvn clean install
java -jar target/*.jar

### Frontend

cd frontend
npm install
npm start




## 📊 Results & Impact

Deployment cycle improved by 40%

Fully automated code-to-deploy pipeline

Cleaner modular architecture

Faster testing + debugging workflow



## 👨‍💻 Author

Chetan Rohan Gattupalli
B.Tech CSE — VIT-AP University
Experienced in Java, Spring Boot, AWS, Jenkins, CI/CD.