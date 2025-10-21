# 🧭 Job Tracker App  
### Full-stack Job Tracking Application built with React, Node.js, GraphQL & MongoDB  

A web application that helps job-seekers track their applications, monitor interview progress, and stay organized during the job search.  
The app includes authentication, a modern dashboard, and filtering features for different job statuses — all built using a modern MERN-style stack with GraphQL.  

---

## 🚀 Tech Stack

**Frontend:**
- React (Vite)
- Apollo Client (GraphQL)
- Tailwind CSS  
- React Router  

**Backend:**
- Node.js  
- Express  
- Apollo Server (GraphQL)  
- MongoDB (Mongoose)  
- JSON Web Tokens (JWT) for authentication  

**Other Tools:**
- Git & GitHub  
- Dotenv for environment variables  
- Render / Vercel for deployment  

---

## ⚙️ Features

✅ User Authentication (JWT)  
✅ Add, edit, delete job applications  
✅ Filter jobs by status (Applied, Interview, Rejected, Offer)  
✅ Secure GraphQL API  
✅ Responsive UI built with Tailwind CSS  
✅ Deployed full-stack app (frontend + backend)  

---

## 🧱 Project Structure

job-tracker-app/
├── client/ # React frontend (Vite + Apollo Client)
├── server/ # Node.js + GraphQL backend
└── README.md

yaml
Copy code

---

## 🪜 Getting Started (Local Setup)

### 1️⃣ Clone the repository
```bash
git clone git@github.com:Salmankd/job-tracker-app.git
cd job-tracker-app
2️⃣ Setup the backend
bash
Copy code
cd server
npm install
Create a .env file in /server with:

ini
Copy code
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
Start the server:

bash
Copy code
npm start
Server runs at 👉 http://localhost:4000/graphql

3️⃣ Setup the frontend
bash
Copy code
cd ../client
npm install
npm run dev
Frontend runs at 👉 http://localhost:5173

🌍 Deployment
Frontend: Deployed on Vercel

Backend: Deployed on Render / Railway

Database: MongoDB Atlas

🖥️ Live Demo: (link will be added once deployed)

📸 Screenshots
Login Page	Dashboard	Add Job

📈 Future Improvements
Add search & sorting

Add statistics charts (job status over time)

Add dark mode toggle

Add notifications/reminders for interview dates

👨‍💻 Author
Salman Khalid
Frontend Developer | Test Automation Engineer | Open to Full-stack Roles
📍 Based in Germany, open to relocation (UAE / Saudi Arabia)
🔗 LinkedIn Profile

🏷️ License
This project is licensed under the MIT License — free to use, copy, and modify with attribution.
