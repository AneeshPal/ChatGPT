import express from "express";
import Thread from "../models/Thread.js";
import getOpenAIAPIResponse from "../utilis/openai.js";

const router=express.Router();

//testing the route
router.post("/test",async(req,res)=>{
    try{
        const thread=new Thread({
            threadId:"xyz",
            title:"Testing New thread"
        });
        const reponse=await thread.save();
        res.send(response);
    } catch(err){
        console.log(err);
        res.status(500).json({error:"Failed to save in DB"});
    }
});

// get all the threads
router.get("/thread",async (req,res)=>{
    try{
        // descending order  of updatedAt... to get the most recent chat on top
        const threads=await Thread.find({}).sort({updatedAt:-1});
        res.json(threads);
    } catch(err){
        console.log(err);
        res.status(500).json({error:"Failed to fetch threads"});
    }
});

// to get a specific chat from the history
router.get("/thread/:threadId", async (req,res)=>{
    const {threadId}= req.params;

    try{
        const thread=await Thread.findOne({threadId});

        if(!thread){
            res.status(404).json({error:"Thread not found"});
        }

        res.json(thread.messages);

    } catch(err){
         console.log(err);
        res.status(500).json({error:"Failed to fetch chat from history"});
    }
});


// destroy route
router.delete("/thread/:threadId", async (req,res)=>{
    const {threadId}= req.params;

    try{
        const deletedThread=await Thread.findOneAndDelete({threadId});

        if(!deletedThread){
            res.status(404).json({error:"Thread not found"});
        }

        res.json(thread.messages);

    } catch(err){
         console.log(err);
        res.status(500).json({error:"Failed to delete chat from history"});
    }
});

// getting a response for user
router.post("/chat",async(req,res)=>{
     const {threadId,message}=req.body;

     // is any one parameter is missing from user
     if(! threadId || !message){
        res.status(400).json({error:"missing required  fields"});
     }

     try{
         
        const thread=await Thread.findOne({threadId});
        // if no thread means its a new chat so create a new chat for it.
        if(!thread){
          thread=new Thread({
            threadId,
            title:message,
            messages:[{role:"user",content:message}]
          });
        } else{
            thread.messages.push({role:"user",content:message});
        }

        const assistantReply = await getOpenAIAPIResponse(message);
        thread.message.push({role:"assistant",content:assistantReply});
        thread.updatedAt=new Date();

        await thread.save();
        response.json({reply:assistantReply});

     } catch(err){
        console.log(err);
        res.status(500).json({error:"something went wrong!"});
     }
});

export default router;