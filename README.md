# 📚 MERN Bookstore

A full-stack Bookstore Management Application built using the MERN stack (MongoDB, Express.js, React, and Node.js). The application allows users to manage a collection of books through a simple and responsive interface.

## ✨ Features

- **View Books:** Display all books stored in MongoDB.
- **Add Books:** Create new book records.
- **Book Details:** View information about an individual book.
- **Edit Books:** Update existing book information.
- **Delete Books:** Remove books from the collection.
- **REST API:** Backend API built with Express.js and Mongoose.
- **Responsive UI:** Frontend built with React and Tailwind CSS.
- **Notifications:** User feedback for application actions.

## 🛠️ Tech Stack

**Frontend**
- React
- Vite
- Tailwind CSS
- Axios
- React Router
- React Icons
- Notistack

**Backend**
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- CORS

## 📁 Project Structure

```text
BookStore/
├── backend/
│   ├── models/
│   │   └── bookModel.js
│   ├── routes/
│   │   └── booksRoute.js
│   ├── config.js
│   ├── index.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   └── package.json
├── .gitignore
└── README.md
```

## ⚙️ Getting Started

### Prerequisites

Install the following before running the project:

- [Node.js](https://nodejs.org/)
- npm
- A [MongoDB Atlas](https://www.mongodb.com/atlas) account or another accessible MongoDB instance
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/chelisha-pulugu/mern-bookstore.git
cd mern-bookstore
```

### 2. Configure the Backend

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend/` folder:

```env
PORT=5555
MONGODB_URL=your_mongodb_connection_string
```

Replace the placeholder with your MongoDB connection URI. Never commit your real credentials.

Make sure `config.js` loads these environment variables and exports `PORT` and `mongoDBURL`.

Start the backend:

```bash
npm run dev
```

If your backend doesn't define a `dev` script, check `backend/package.json` and use its configured start command.

### 3. Configure the Frontend

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## 🔌 API Endpoints

The backend runs on port `5555` by default.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/books` | Retrieve all books |
| GET | `/books/:id` | Retrieve a book by ID |
| POST | `/books` | Add a new book |
| PUT | `/books/:id` | Update a book |
| DELETE | `/books/:id` | Delete a book |

### Example Book Object

```json
{
  "title": "The Alchemist",
  "author": "Paulo Coelho",
  "publishYear": 1988
}
```

## 🔐 Security

- Store database credentials in environment variables.
- Keep `.env` files out of Git.
- Configure CORS to allow your intended frontend origin.
- Never publish passwords, access tokens, or private connection strings.

## 🚀 Future Improvements

- User authentication and authorization
- Search and filter books
- Book categories and sorting
- Pagination
- Shopping cart and checkout functionality

## 👩‍💻 Author

**Chelisha Pulugu**

GitHub: https://github.com/chelisha-pulugu/

---

Built as a full-stack web development project using the MERN stack.
