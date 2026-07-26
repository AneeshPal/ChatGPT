# 🤖 SigmaGPT

SigmaGPT is a modern AI-powered chatbot inspired by ChatGPT, built using the **OpenAI API**. It provides an intuitive conversational interface with persistent chat history, thread management, and a clean responsive UI.

![SigmaGPT Preview](./preview.png)

---

## ✨ Features

- 💬 AI-powered conversations using OpenAI API
- 📝 Multiple chat threads
- ⚡ Real-time AI responses
- 🌙 Modern dark-themed UI
- 📱 Responsive design
- 🔐 Secure API key handling with environment variables
- 🚀 Fast frontend built with React + Vite
- 🎨 Clean and minimal interface

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- Axios
- React Icons

### Backend
- Node.js
- Express.js
- OpenAI API
- CORS
- dotenv

---

## 📂 Project Structure

```
SigmaGPT/
│
├── Frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── server.js
│   └── package.json
│
├── .gitignore
├── README.md
└── .env
```

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/AneeshPal/ChatGPT.git

cd ChatGPT
```

---

## Install Dependencies

### Frontend

```bash
cd Frontend
npm install
```

### Backend

```bash
cd ../backend
npm install
```

---

## Environment Variables

Create a `.env` file inside the backend folder.

```env
OPENAI_API_KEY=your_openai_api_key
PORT=5000
```

---

## Run the Project

### Start Backend

```bash
cd backend
npm run dev
```

### Start Frontend

```bash
cd Frontend
npm run dev
```

Open

```
http://localhost:5173
```

---

## Screenshots

### Home Page

> Add your screenshots here.

```
/screenshots/home.png
```

---

## API Used

OpenAI Chat Completions API

Example request:

```javascript
const response = await client.chat.completions.create({
  model: "gpt-4.1-mini",
  messages: [
    {
      role: "user",
      content: "Hello!"
    }
  ]
});
```

---

## Future Improvements

- ✅ User Authentication
- ✅ Markdown Support
- ✅ Code Syntax Highlighting
- ✅ Image Generation
- ✅ Voice Chat
- ✅ File Upload Support
- ✅ Streaming Responses
- ✅ Conversation Search

---

## Contributing

Contributions are welcome!

1. Fork the repository
2. Create your feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push

```bash
git push origin feature-name
```

5. Open a Pull Request

---

## License

This project is licensed under the MIT License.

---

## Author

**Aneesh Pal**

GitHub: https://github.com/AneeshPal

LinkedIn: https://linkedin.com/in/aneeshpal

---

⭐ If you like this project, don't forget to star the repository!