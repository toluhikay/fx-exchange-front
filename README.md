# Frontend - Project Delta

This is the **frontend** for Project Delta, built with **React**, **Vite**, **Redux Toolkit**, **RTK Query**, and **React Hook Form**. It communicates with the backend API for authentication, protected routes, and CRUD operations.

---

## 🚀 Features

- **Vite** for fast build and development
- **React** with functional components and hooks
- **Redux Toolkit** for state management
- **RTK Query** for API requests and caching
- **React Hook Form** for form handling and validation
- **Protected Routes** using React Router
- Authentication with token storage
- Modular folder structure for scalability

---

## 📂 Folder Structure

```
frontend/
├── public/                # Static assets
├── src/
│   ├── app/               # Redux store setup
│   ├── components/        # Reusable UI components
│   ├── features/          # RTK slices & queries
│   ├── hooks/             # Custom hooks
│   ├── pages/             # Page components (Login, Dashboard, etc.)
│   ├── routes/            # Route configuration and protected route logic
│   ├── main.tsx           # Application entry point
│   └── vite-env.d.ts      # Vite TypeScript definitions
├── index.html
├── package.json
└── vite.config.ts
```

---

## 🛠 Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/toluhikay/project-delta-front.git
   cd project-delta-frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the root:

   ```env
   VITE_APP_BASE_URL=http://localhost:8080/api
   ```

4. **Run development server**

   ```bash
   npm run dev
   ```

5. **Build for production**

   ```bash
   npm run build
   ```

6. **Preview production build**
   ```bash
   npm run preview
   ```

---

## 🔑 Authentication Flow

- User logs in via the `/login` endpoint using RTK Query mutation
- Access token is stored in localStorage or sessionStorage
- Protected routes verify token before rendering
- RTK Query automatically attaches token to API requests

---

## 📜 Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |

---

## 🧑‍💻 Author

Kayode Toluhi
