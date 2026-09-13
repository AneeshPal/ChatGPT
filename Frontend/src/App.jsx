import { useState } from 'react';
import Sidebar  from "./Sidebar.jsx";
import ChatWindow from "./ChatWindow.jsx";
import {MyContext} from "./MyContext.jsx";
import {v1 as uuid} from "uuid";
import './App.css';

function App() {
  const [prompt,setPrompt]=useState("");
  const [reply,setReply]=useState(null);
  const [currThreadId,setcurrThreadId]=useState(uuid());
  const [prevChats,setPrevChats]=useState([]); // stores all chats of curr thread(prompt+reply)
  const [newChat,setNewChat]=useState(true); 
  const [allThreads,setAllThreads]=useState([]);

     
  // passing values
  const providerValues={
       prompt,setPrompt,
       reply,setReply,
       currThreadId,setcurrThreadId,
       newChat,setNewChat,
       prevChats,setPrevChats,
       allThreads,setAllThreads
  }; 
  return (
    <div className="app">
      <MyContext.Provider value={providerValues}>
      <Sidebar></Sidebar>
      <ChatWindow>
      </ChatWindow>
      </MyContext.Provider>
    </div>
  )
}

export default App;
