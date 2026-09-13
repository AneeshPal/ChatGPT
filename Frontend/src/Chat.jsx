import "./Chat.css";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "./MyContext.jsx";

import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

import "highlight.js/styles/github-dark.css";

function Chat() {

    const { newChat, prevChats, reply } = useContext(MyContext);

    const [latestReply, setLatestReply] = useState("");

    // Typing effect
    useEffect(() => {

        if (!reply) {
            return;
        }

        // Clear previous response
        setLatestReply("");

        const content = reply.split(" ");

        let idx = 0;

        const interval = setInterval(() => {

            setLatestReply(
                content.slice(0, idx + 1).join(" ")
            );

            idx++;

            if (idx >= content.length) {
                clearInterval(interval);
            }

        }, 40);

        // Cleanup old interval
        return () => clearInterval(interval);

    }, [reply]);


    return (
        <>
            {newChat && (
                <h1>Start a New Conversation</h1>
            )}

            <div className="chats">

                {/* Previous messages */}
                {prevChats?.slice(0, -1).map((chats, idx) => (

                    <div
                        className={
                            chats.role === "user"
                                ? "userDiv"
                                : "gptDiv"
                        }
                        key={idx}
                    >

                        {chats.role === "user" ? (

                            <p className="userMessage">
                                {chats.content}
                            </p>

                        ) : (

                            <ReactMarkdown
                                rehypePlugins={[rehypeHighlight]}
                            >
                                {chats.content}
                            </ReactMarkdown>

                        )}

                    </div>

                ))}


                {/* Current response - typing effect */}
                {reply && latestReply && (

                    <div className="gptDiv" key="typing">

                        <ReactMarkdown
                            rehypePlugins={[rehypeHighlight]}
                        >
                            {latestReply}
                        </ReactMarkdown>

                    </div>

                )}

            </div>
        </>
    );
}

export default Chat;