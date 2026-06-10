# 📌 Simple Todo App

This is a practice project from The Odin Project curriculum.

---

## 🎯 Learning Objective  
The main goal of this project was not only to build a functional Todo application, but also to practice software development principles and improve problem-solving skills through a project-based learning approach.
During development, the focus was on:
- Designing and implementing a modular architecture.
- Managing application state without external libraries.
- Separating business logic from UI logic.
- Persisting data using Local Storage.
- Reusing components and functionality whenever possible.
- Practicing software design decisions and responsibility separation.
-Building a complete project from planning to deployment-ready state.

---

## 🛠️ Technologies Used
- HTML5
- CSS3
- JavaScript (ES6 Modules)
- Local Storage API
No frameworks or external libraries were used. The project was intentionally built using only core web technologies to strengthen fundamental frontend development skills.

---

## 📷 Examples / Screenshots
# Todo app
<img width="1366" height="646" alt="home" src="https://github.com/user-attachments/assets/b9bda81d-e8c8-4338-ba27-1632b9046439" />

# Todo Form
<img width="1366" height="649" alt="todoForm" src="https://github.com/user-attachments/assets/ef1db408-13b1-4932-ac83-9ac983aa6f7e" />

# Project Form
<img width="1365" height="658" alt="projectForm" src="https://github.com/user-attachments/assets/59734a4e-04ce-4910-ab5b-db8789fcab02" />

# Todo table
<img width="1366" height="648" alt="todo" src="https://github.com/user-attachments/assets/054d770e-17e6-4d16-806f-47593e1e41b2" />

---

## 📂 Project Structure
src/ 
│ 
├── modules/ 
│ ├── projects/ 
│ │ ├── Project.js 
│ │ └── projectService.js 
│ │ └── projectEditing.js 
│ │ 
│ ├── todos/ 
│ │ ├── Todo.js 
│ │ └── todoService.js 
│ │ └── todoEditing.js 
│ │ 
│ ├── ui/ 
│ │ ├── domSelector.js 
│ │ ├── renderProjects.js 
│ │ ├── renderTodos.js 
│ │ ├── uiEvents.js 
│ │ 
│ ├── modals/
│ │ └── modalController.js 
│ │ 
│ ├── storage/ 
│ │ └── storage.js 
│ │ 
├── state/ 
│ │ └── globalState.js 
│ │ 
├── coordinator/
│ └── coordinator.js
├── bootstrap/ 
│ └── bootstrapApp.js
│ │ 
├── styles/ 
│ │ └── styles.css 
│ │ 
├── index.js 
│ │ 
├── template.html 

The application follows a modular architecture where each module has a single responsibility:

State Module → Stores the application's global state.
Projects Module → Handles project-related operations.
Todos Module → Handles todo-related operations.
Storage Module → Manages Local Storage persistence.
UI Module → Handles rendering and user interactions.
Modal Module → Controls modal behavior and form management.
Coordinator Module → Orchestrates communication between modules.

---

## 📚 Learnings
# State Management
- Learned how to manage a centralized application state without using frameworks such as React, Redux, or Vue.

# Separation of Concerns

- Practiced dividing responsibilities across modules instead of placing all logic in a single file.

# Data Persistence

- Learned how to persist application data using the Local Storage API and restore state when the application loads.

# Component Reusability

- Implemented reusable modal functionality that supports both creation and editing workflows.

# Event Delegation

- Used event delegation to efficiently manage dynamically rendered elements.

# Data Modeling

- Designed relationships between Projects and Todos while maintaining unique identifiers for each entity.

# Derived Data

- Implemented dynamic views such as:
1- Today
2- Next 7 Days
without storing duplicate data in the application state.

# Software Development Process

- Practiced defining a Minimum Viable Product (MVP), planning features before implementation, and completing the project scope before introducing new ideas.

---

## 🔮 Possible Improvements
# Features
- Filter Todos by priority.
- Sort Todos by due date.
- Add project statistics.
- Support recurring Todos.
- Add drag-and-drop functionality.
- Add dark mode.

# Technical Improvements
- Migrate to TypeScript.
- Add automated testing.
- Improve accessibility (ARIA attributes and keyboard navigation).
- Add form validation.
- Improve error handling.
- Implement a more scalable state management solution.

# Backend Integration
Future versions could include a backend API to provide:
- User authentication.
- Cloud synchronization.
- Multi-device support.
- Database persistence.
