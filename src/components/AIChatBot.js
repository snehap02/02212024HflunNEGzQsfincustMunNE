import React, { useState, useRef, useEffect } from "react";

const AIChatBot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState(() => {
    const savedMessages = sessionStorage.getItem("chatMessages");
    return savedMessages
      ? JSON.parse(savedMessages)
      : [{ sender: "AI", text: "Hello! How can I assist you today?" }];
  });
  const [userInput, setUserInput] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isChatOpen) {
      scrollToBottom();
    }
  }, [messages, isChatOpen]);

  useEffect(() => {
    sessionStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSend = () => {
    if (userInput.trim() !== "") {
      const newMessages = [...messages, { sender: "User", text: userInput }];
      setMessages(newMessages);
      setUserInput("");
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "AI", text: "Thank you for your message!" },
        ]);
      }, 1000);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <div>
      {/* Chat Button */}
      <div
        className="chat-button fixed text-white text-8xl xl:-mt-[10rem] z-50 flex justify-end rounded-full right-8 bg-webBg cursor-pointer"
        onClick={toggleChat}
      >
        <img
          src="../images/AskAI.png"
          alt="ai"
          className="w-16 shadow-md shadow-black rounded-full"
        />
      </div>

      {/* Overlay when Chat is Open */}
      {isChatOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-40"
          onClick={toggleChat}
        />
      )}

      {/* Chat Window */}
      {isChatOpen && (
        <div className="fixed bottom-24 right-10 bg-[#012619] shadow-black shadow-xl w-[450px] h-[530px] rounded-lg overflow-hidden z-50">
          {/* Chat Header with Cancel Button */}
          <div className="bg-webBg text-white px-4 py-5 flex justify-between items-center font-bold">
            <img src="../images/logo.svg" alt="logo" className="w-24" />
            <button onClick={toggleChat}>
              <img src="../images/cancel.svg" alt="cancel" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="p-4 h-[calc(100%-10rem)] overflow-y-auto flex flex-col gap-8 scrollbarNew">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`${
                  message.sender === "AI" ? "text-left" : "text-right"
                }`}
              >
                <span
                  className={`inline-block p-4  ${
                    message.sender === "AI"
                      ? "bg-[#044d25] text-white desc tracking-wide shadow-xl shadow-[#0a1811] rounded-tl-2xl rounded-tr-2xl rounded-br-2xl"
                      : "bg-[#002915] text-white shadow-[#07110c] shadow-lg desc tracking-wide rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl"
                  }`}
                >
                  {message.text}
                </span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input Area */}
          <div className="flex rounded-full px-2 bg-webBg mx-2 mt-5">
            <textarea
              className="flex-1 rounded-full px-4 py-5 pr-14 resize-none bg-webBg focus:outline-none text-white desc placeholder:text-white placeholder:opacity-70 placeholder:tracking-wider scrollbarNew"
              rows="1"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type your message..."
            ></textarea>
            <button
              className="bg-green-950 text-white p-3 rounded-full absolute right-4 mt-[5px] transform hover:transition-all hover:scale-105"
              onClick={handleSend}
            >
              <img src="../images/send.svg" alt="send" className="w-7" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChatBot;
