# 📚 Library Management System

A modern full-stack **Library Management System** built using:

- ⚛️ React.js (Frontend)
- 🟣 Laravel REST API (Backend)
- 🐬 MySQL Database
- 🎨 Tailwind CSS

This project was developed as a **University Semester Project** with professional architecture, modern UI, role-based authentication, analytics dashboard, and complete library management features.

---

# 🚀 Features

## 👨‍💼 Admin Features

- Admin Authentication
- Professional Dashboard
- Dashboard Analytics
- Charts & Statistics
- Add Books
- Edit Books
- Delete Books
- Manage Books
- Issue Books
- Return Books
- View Issued Books
- PDF Receipt Generation
- Search & Filter Books
- Stock Management
- Role-Based Access Control

---

## 👨‍🎓 User Features

- User Registration
- User Login
- User Dashboard
- View Books
- Issue Books
- View Issued Books
- Download Receipts
- Search Books

---

# 🛠️ Tech Stack

## Frontend

- React.js
- React Router DOM
- Axios
- Tailwind CSS
- SweetAlert2
- Recharts

---

## Backend

- Laravel
- Laravel REST API
- Eloquent ORM
- DomPDF

---

## Database

- MySQL

---

# 📂 Project Structure

```bash
library-management-system/
│
├── library-backend/
│   ├── app/
│   ├── routes/
│   ├── database/
│   ├── resources/
│   └── ...
│
├── library-frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── layouts/
│   ├── routes/
│   └── ...
│
└── README.md
```

---

# ⚙️ Installation Guide

## 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/library-management-system.git
```

---

# 🔧 Backend Setup (Laravel)

## Navigate to backend folder

```bash
cd library-backend
```

## Install dependencies

```bash
composer install
```

## Create environment file

```bash
cp .env.example .env
```

## Generate application key

```bash
php artisan key:generate
```

## Configure Database

Update `.env` file:

```env
DB_DATABASE=library_management_system
DB_USERNAME=root
DB_PASSWORD=
```

## Run migrations

```bash
php artisan migrate
```

## Start Laravel server

```bash
php artisan serve
```

Backend runs on:

```bash
http://127.0.0.1:8000
```

---

# ⚛️ Frontend Setup (React)

## Navigate to frontend folder

```bash
cd library-frontend
```

## Install dependencies

```bash
npm install
```

## Run frontend server

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# 🔐 Authentication

## Admin Login

```text
Email: admin@gmail.com
Password: 123456
```

---

# 🧾 PDF Receipt Feature

The system automatically generates downloadable PDF receipts when books are issued.

---

# 📊 Dashboard Analytics

The dashboard includes:

- Total Books Count
- Issued Books Count
- Total Users Count
- Interactive Charts

---

# 📸 Screenshots

## Admin Dashboard

- Analytics Cards
- Charts
- Book Management
- Sidebar Navigation

## User Dashboard

- Personalized Dashboard
- Book Access
- Receipt Access

---

# 🔮 Future Improvements

- Email Notifications
- QR Code Receipts
- Dark Mode
- Fine Management System
- Due Date Notifications
- Mobile Responsive Optimization
- Real-time Notifications

---

# 👨‍💻 Author

**Muhammad Hamdan**

University Semester Project

---

# 📜 License

This project is created for educational and learning purposes.

