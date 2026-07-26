import { useState } from 'react';
import Sidebar  from "./Sidebar.jsx";
import ChatWindow from "./ChatWindow.jsx";
import {MyContext} from "./MyContext.jsx";
import './App.css';

function App() {
  const providerValues={}; // passing values
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
