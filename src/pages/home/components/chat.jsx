import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ENDPOINTS, moduleConverseStream } from "../home.api";
import { v7 as uuidv7 } from 'uuid';
import { stream } from "../../../services/api";


export const useStreamQuery = ({moduleId, threadId, message, enabled}) => {
  return useQuery({
    queryKey: ["stream"],
    queryFn: ()=>{
           const payload = {
        "moduleId": moduleId,
        "threadId": threadId,
        "message": message,
        "Stream": true
      }
      // return moduleConverseStream(payload)
    },
    enabled,
    staleTime: Infinity, // Avoid refetching
    refetchOnWindowFocus: false,
    cacheTime: 0, // Prevent caching since it's a live stream
  });
};

const Chat = () => {
  const { state } = useLocation();
  const [input, setInput]= useState('');
  const [threadId, setThreadId] = useState(uuidv7());
  const [messages, setMessages] = useState([]);

  

  const converseMutation = useMutation({
    mutationFn: async () => {
        const payload = {
            moduleId: state.id,
            threadId: threadId,
            message: input,
            Stream: true
        };
       return moduleConverseStream(payload);
    },
    mutationKey: ["onChatMessage"]
});

  const onConverStart = () => {
    setMessages(prev => [...prev, ]);
    converseMutation.mutate()
  }

  useEffect(() => {
    if(converseMutation.data && JSON.parse(converseMutation.data)) {
      const streamMessage = JSON.parse(converseMutation.data);
      let tempMessage = { type: "answer", text: streamMessage.asnwer?.answer, id: Date.now() };
      setMessages(prev => [...prev, tempMessage]); // Update last message
      setInput("");
    }

  }, [converseMutation.data])

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="text-center max-w-2xl">
        <img src={state.bannerImageUrl} alt="Hero Journey" className="mx-auto w-20 h-20 mb-4" />
        <h1 className="text-2xl font-semibold mb-6">{state?.name}</h1>

         {/* Chat Display Area */}
        <div className="border border-yellow-500 p-4 rounded-lg max-w-lg mx-auto mb-4 h-64 overflow-y-auto bg-gray-800">
          {messages.length === 0 ? (
            <p className="text-gray-400">No messages yet...</p>
          ) : (
            messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 p-2 rounded-lg max-w-xs ${
                  msg.type === "question"
                    ? "bg-yellow-500 text-black self-start" // Question (Left side)
                    : "bg-blue-500 text-white self-end" // Answer (Right side)
                } flex w-fit`}
              >
                {msg.text}
              </div>
            ))
          )}
        </div>
        
        
        <div className="flex items-center border border-yellow-500 p-3 rounded-lg max-w-lg mx-auto mb-4">
          <input 
            onChange={(e)=> setInput(e.target.value)}
            type="text" 
            placeholder="Enter questions" 
            className="bg-transparent w-full outline-none text-white" 
          />
        </div>
        <button onClick={()=> onConverStart()} className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200">
          Submit →
        </button>
      </div>
    </div>
  );
};

export default Chat;