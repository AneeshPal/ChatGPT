import "./Chat.css";
import {useContext} from "react";
import {MyContext} from "./MyContext.jsx";

//react-markdown
// rehype-highlight
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

import "highlight.js/styles/github-dark.css";

function  Chat(){
    const {newChat,prevChats}=useContext(MyContext);
    return (
        <>
        {newChat && <h1>Start a New Conversation </h1>}
        <div className="chats">

            {
                prevChats?.map((chats,idx)=>
                <div className={chats.role ==="user"?"userDiv":"gptDiv"} key={idx}>
                    {
                        chats.role==="user" ?
                        <p className="userMessage">{chats.content}</p> :
                        <ReactMarkdown rehypePlugins={rehypeHighlight}>{chats.content}</ReactMarkdown>
                    }
                    </div>
                )
            }
        </div>

        </>
    )
}

export default Chat;