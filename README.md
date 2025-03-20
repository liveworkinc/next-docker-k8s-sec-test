# Project Overview

This project is a technical test that demonstrates the ability to implement a simple web application with a variety of key features, including backend functionality, Dockerization, and deployment to Kubernetes.


## How to Run the Project

### Prerequisites
- Node.js
- Docker (if you want to run the app in a container)
- A database (if Prisma is integrated)

### 1. Clone the Repository

```bash
git clone <repository-url>
cd <project-directory>

npm install

npm run dev
```
---

## Test Instruction

### Requirements

#### 1. Implement POST and DELETE Routes with a Form
- Run the project and acess to http://localhost:3000/users.
- Create a `POST` route to add new data in te same page.
- Create a `DELETE` route to remove data in te same page.
- Implement a form to modify or delete the displayed data.

#### 2. Dockerize the Application
- Containerize the application using Docker, allowing it to be run in any environment with Docker installed.

#### 3. Clear README with Instructions
- Write a clear `README.md` or replace this one that explains how to run the project locally and any required dependencies.
- Ensure that the steps for running the project are easy to follow.

#### 4. Push the Code to GitHub
- Push the code to a GitHub repository, making sure it is publicly accessible.
- Share it with your Livework contact

---

### Optional Bonus Tasks
Feel free to pick desired bonus tasks or implement all

#### 1. Kubernetes Deployment (Bonus)
- Write Kubernetes YAML files to deploy the app in a cluster.
- Use your preferred tool for Kubernetes local deployment (e.g., K3s, Minikube, or any managed Kubernetes service).

#### 2. Implement Unit Tests (Bonus)
- Implement unit tests for success and error cases.
- Write tests to ensure that the POST and DELETE routes are functioning properly.
- You can do it manually or using vite, jest...

#### 3. Code Audit and Security (Bonus)
- Perform a basic audit of your code.
- Identify any potential security vulnerabilities and explain how you have mitigated them or what security practices you've applied.

#### 4. Database Integration with Prisma and SQLite or PostgreSQL (Bonus)
- Integrate a database using Prisma.
- Use either SQLite or PostgreSQL as the database for the application instead of hardcoded data.

#### 5. Styling with Tailwind CSS (Bonus)
- Style the application using Tailwind CSS or another package of your choice.
- Ensure that the application is visually appealing and responsive.

#### 6. Review (Bonus)
- Make a review of the existing code or your own you added.
- What can be improved, what is deprecated, is there a best architecture or implementation, is there unmantained packages...
