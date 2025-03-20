import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { moduleConverseStream } from "../home.api";
import { v7 as uuidv7 } from 'uuid';


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

    setMessages(prev => [...prev, { type: "question", text:  input }]);
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
    <div className="bg-themeblack text-white min-h-screen items-center justify-center">
      <div className="text-center">
        {/* <img src={state.bannerImageUrl} alt="Hero Journey" className="mx-auto w-20 h-20 mb-4" /> */}
        {/* <h1 className="text-2xl font-semibold mb-6">{state?.name}</h1> */}

         {/* Chat Display Area */}
        <div className="border border-yellow-500 p-4 rounded-lg max-w-lg mx-auto mb-4 h-64 overflow-y-auto">
          {messages.length === 0 ? (
            <p className="text-gray-400">No messages yet...</p>
          ) : (
            messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 p-2 rounded-lg max-w-xs ${
                  msg.type === "question"
                    ? "bg-blue-800 text-black self-start" // Question (Left side)
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
            value={input || ""}
            placeholder="Enter questions" 
            className="bg-transparent w-full outline-none text-white" 
          />
        </div>
        <button disabled={converseMutation.isPending} onClick={()=> onConverStart()} className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200">
        {converseMutation.isPending ? (
            <div className="animate-spin border-t-2 border-b-2 border-gray-900 rounded-full w-5 h-5"></div>
          ) : (
            "Submit →"
          )}
        </button>
      </div>
    </div>
  );
};

export default Chat;