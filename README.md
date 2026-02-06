# 🚀 SyncTask

**SyncTask** is a professional-grade Task Management System built with **React**. It focuses on seamless state synchronization, component-based architecture, and modern UI/UX principles.

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

---

## ✨ Key Features

- **Dynamic State Management:** Implements "Lifting State Up" to ensure data consistency across components.
- **Real-time UI Synchronization:** Tasks automatically toggle styles (line-through) and status upon user interaction.
- **Automated Workflows:** Integrated with **GitHub Actions** for Continuous Integration (CI) and build verification.
- **Responsive Design:** Fully optimized for all screen sizes using Bootstrap 5.

---

## 🛠️ Technical Stack

- **Frontend:** React.js (Hooks, Functional Components)
- **Styling:** CSS3, Bootstrap 5
- **Automation:** GitHub Actions (CI/CD)
- **Version Control:** Git & GitHub (Agile Workflow)

---

## 🏗️ Architecture & Data Flow

This project demonstrates a deep understanding of React's **Unidirectional Data Flow**:

1. **App.js:** Holds the "Source of Truth" (Central State).
2. **ItemList.js:** Acts as a bridge, mapping data to child components.
3. **Item.js:** Handles user interactions and communicates changes back to the parent via prop callbacks.



---

## 🚀 How to Run

1. Clone the repository:
   ```bash
   git clone [https://github.com/shimaamohamed923/SyncTask.git](https://github.com/shimaamohamed923/SyncTask.git)
