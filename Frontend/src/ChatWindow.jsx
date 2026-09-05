import "./ChatWindow.css";
import { useState } from 'react';
import Chat from "./Chat.jsx";

import { useContext } from "react";
import {MyContext} from "./MyContext.jsx"
import {ScaleLoader} from "react-spinners";

function ChatWindow() {
    const {prompt,setPrompt,reply,setReply,currThreadId}=useContext(MyContext);
    const [loading,setLoading]=useState(false);

    const getReply=async ()=>{
        setLoading(true);
        console.log("meesage",prompt,"threadId",currThreadId);
        const options={
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                message:prompt,
                threadId:currThreadId
            })
        };

        try{
            const response=await fetch("http://localhost:8080/api/chat",options)
            const res=await response.json();
            setReply(res.reply);
            console.log(res);
        }catch(err){
            console.log(err);
        }

        setLoading(false);
    }

    return (
        <div className="chatWindow">
            <div className="navbar">
                <span >AneeshGPT <i className="fa-solid fa-angle-down"></i></span>
                <div className="userIconDiv">
                    <span className="userIcon">
                        <i className="fa-solid fa-user"></i>
                    </span>
                </div>
            </div>
            <Chat></Chat>

            {/* react-spinner */}
            <ScaleLoader color='#fff' loading={loading}>

            </ScaleLoader>
            <div className="chatInput">
                <div className="inputBox">
                    <input placeholder="Ask Anything" value={prompt}
                        onChange={(e)=> setPrompt(e.target.value)}
                        onKeyDown={(e)=> e.key ==='Enter' ?getReply():''}>
                    </input>
                    <div id="submit" onClick={getReply}>
                        <i className="fa-solid fa-paper-plane"></i>
                    </div>
                </div>
                <p className="info">
                    AneeshGPT can make mistakes.Check important info.See Cookie Preferences.
                </p>

            </div>
        </div>
    )
}

export default ChatWindow;