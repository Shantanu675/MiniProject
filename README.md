# 🍽️ QR Code Based Access Control for Mess Entry

> **Only for authorised students – fast, contactless & voice-assisted entry system**

---

## 📌 Project Overview

**QR Code Based Access Control for Mess Entry** is a smart verification system designed to automate and secure mess entry for authorised students only. Each student is issued an **ID card containing a unique QR code** (on the back side). At the mess entry gate, the QR code is scanned using a mobile application, and the registration number is instantly verified through a web-based React application.

The system provides **real-time visual feedback** (Access Allowed / Denied) along with **voice announcements**, making it ideal for high-traffic mess environments.

---

## 🎯 Problem Statement

Manual mess entry systems are:

* Time-consuming ⏳
* Error-prone ❌
* Easy to misuse ⚠️

This project solves the problem by introducing:

* QR-based identity verification
* Automated access decision
* Voice feedback for clarity

---

## 🚀 Key Features

* 🔐 **Authorised Access Only**
* 📱 **QR Code Scanning via Mobile App**
* ⚡ **Instant Verification**
* 🔊 **Voice Feedback (Entry Allowed / Denied)**
* 🎨 **Modern & Responsive UI**
* 🌐 **Environment-based configuration (.env)**
* 🧠 **Debounced input to avoid multiple scans**

---

## 🛠️ Tech Stack

### Frontend

* **React (Vite)**
* **Tailwind CSS**
* **Web Speech API (SpeechSynthesis)**

### Scanner

* **Barcode to Win (Android App)**

### Data Source

* **Environment Variables (.env)** for authorised registration numbers

---

## 🔄 Complete Project Flow

```text
[ Student ID Card with QR Code ]
              ↓
[ Barcode to Win Scanner App ]
              ↓
[ Registration Number Auto-Filled ]
              ↓
[ React Verification System ]
              ↓
[ Access Allowed / Denied ]
              ↓
[ Voice Feedback + Visual Status ]
```

---

## 🆔 Student ID Card Design

Each student ID card contains:

* Student Name
* Registration Number
* **QR Code (Back Side)** → Encodes Registration Number

📸 *Sample ID Card with QR Code*

![Student ID Card QR](images/id-card-qr.png)

---

## 📱 QR Code Scanning (Barcode to Win App)

We use the **Barcode to Win** Android application to scan QR codes from student ID cards.

### Why Barcode to Win?

* Fast and lightweight
* Accurate QR detection
* Automatically copies scanned text

📸 *Barcode to Win App Scanning Process*

![Barcode to Win App](images/barcode-to-win.png)


---

## 🔊 Voice Feedback System

The project uses the **Web Speech API (SpeechSynthesis)** to provide audio feedback:

* 🟢 **Entry Allowed** → "Entry Allowed"
* 🔴 **Entry Denied** → "Entry Denied"

### Why Voice Feedback?

* Helpful for guards and staff
* Reduces confusion in crowded areas
* Improves accessibility

---

## 🎨 User Interface Highlights

* Gradient background
* Responsive layout (mobile → desktop)
* Animated result cards
* Color-coded access status

---

## 🔮 Future Enhancements

* 🔗 Backend integration (Spring Boot / Node.js)
* 🗄️ Database-based authorisation
* 🧾 Entry logs & analytics
* 📲 Dedicated scanner app
* 🔐 Role-based access

---

## 👨‍💻 Author

**Shantanu Ajay Danej**
B.Tech IT Student
