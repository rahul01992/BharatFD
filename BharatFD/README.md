# FAQ Management System (Express.js, MongoDB, Redis, Google Translate)

This project is a **FAQ Management System** built using **Node.js (Express.js)** with multilingual support, caching, and API management.

## **📌 Features**
✅ **REST API for FAQs** (Create, Read, Translate FAQs)  
✅ **MongoDB for Data Storage**  
✅ **Redis for Caching** (Improves API response speed)  
✅ **Google Translate API for Multilingual Support**  
✅ **Docker Support** (Dockerfile & `docker-compose.yml`)  
✅ **Environment Variables (`.env`) for Configuration**  
✅ **Unit Testing (Mocha/Chai - *To be added*)**  
✅ **Admin Panel (To be added)**  
✅ **Linting with ESLint (To be added)**  

---

## **🛠️ Installation & Setup**
### **1️⃣ Clone the Repository**
```sh
git clone <url></url>
cd faq-app
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Setup Environment Variables**
Create a **`.env`** file in the root directory and add the following:
```sh
MONGO_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/your_db
REDIS_URL=redis://your_redis_host:your_redis_port
GOOGLE_TRANSLATE_API_KEY=your_google_translate_api_key  #  Google Translate API
PORT=5000
```

### **4️⃣ Start the Server**
Run the server in development mode:
```sh
npm run dev
```

For production:
```sh
npm start
```

✅ **Expected Output:**
```
MongoDB Connected
Redis Connected
Server running on port 5000
```

---

## **📌 API Endpoints**

### **1️⃣ Fetch FAQs (Default - English)**
```sh
GET /api/faqs
```
📌 **Example Response:**
```json
[
  {
    "question": "What is Node.js?",
    "answer": "Node.js is a JavaScript runtime."
  }
]
```

### **2️⃣ Fetch FAQs in Hindi**
```sh
GET /api/faqs?lang=hi
```
📌 **Example Response:**
```json
[
  {
    "question": "नोड.जेएस क्या है?",
    "answer": "Node.js is a JavaScript runtime."
  }
]
```

### **3️⃣ Create New FAQ (With Auto-Translation)**
```sh
POST /api/faqs
Content-Type: application/json
```
📌 **Request Body:**
```json
{
  "question": "What is Express.js?",
  "answer": "Express.js is a web framework for Node.js."
}
```
✅ **Expected Response:**
```json
{
  "question": "What is Express.js?",
  "answer": "Express.js is a web framework for Node.js.",
  "translations": {
    "en": "What is Express.js?",
    "hi": "एक्सप्रेस.जेएस क्या है?",
    "bn": "এক্সপ্রেস.জেএস কি?"
  }
}
```

---

## **📌 Running with Docker**

### **1️⃣ Build and Run Docker Container**
```sh
docker-compose up --build
```

✅ **Expected Output:**
```
MongoDB, Redis, and the API should start inside Docker.
```

To stop Docker services:
```sh
docker-compose down
```

---

## **📌 Running Tests**
```sh
npm test
```
(Currently, testing needs to be added.)



## **📌 Roadmap & Future Enhancements**
- ✅ **Add Unit Tests (Mocha/Chai)**
- ✅ **Add Admin Panel (Express Admin or Custom UI)**
- ✅ **Implement Linting (ESLint, Prettier)**
- ✅ **Deploy to Heroku/AWS**

---

