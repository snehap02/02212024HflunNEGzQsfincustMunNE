import React, { useState, useEffect } from "react";
import EmojiPicker from "emoji-picker-react";

const ActiveConversation = ({ conversation, setSelectedProfile }) => {
  const [lastSeen, setLastSeen] = useState("");
  const [localTime, setLocalTime] = useState("");
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const getLastSeen = (timestamp) => {
    const now = new Date();
    const lastSeenDate = new Date(timestamp);
    const diffInMinutes = Math.floor((now - lastSeenDate) / 60000);
    if (diffInMinutes < 1) return "Just now";
    if (diffInMinutes < 60) return `${diffInMinutes} min ago`;
    return lastSeenDate.toLocaleDateString();
  };

  useEffect(() => {
    setLastSeen(getLastSeen(conversation.lastSeenTimestamp));
    setLocalTime(new Date().toLocaleString());
  }, [conversation]);

  const handleEmojiClick = (emojiObject) => {
    setMessage((prev) => prev + emojiObject.emoji);
    setShowEmojiPicker(false); // Close picker after selection
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Get selected file
    if (file) {
      if (file.size > 100 * 1024 * 1024) {
        alert("File size exceeds 100MB. Please select a smaller file.");
        return;
      }
      setSelectedFile(file);
      setMessage(file.name); // Show file name in input box
    }
  };

  return (
    <div className="h-[94vh] flex-1 bg-opacity-50 mt-8">
      <div className="messageHeader flex items-center justify-between mb-4 bg-[#01231B] py-3 px-7">
        <div className="nameAndDeatils flex items-center gap-4 cursor-pointer mt-2">
          <img
            src={`../images/user${conversation.id}.png`}
            alt={conversation.name}
            className="w-10 h-10 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedProfile(conversation);
            }}
          />
          <div className="flex flex-col">
            <div className="nameAndVerified flex gap-2">
              <h1
                className="text-white text-[16px]"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProfile(conversation);
                }}
              >
                {conversation.name}
              </h1>
              <img src="../images/verified.svg" alt="verified" className="w-5" />
            </div>
            <div className="timezonesAndLastseen text-[#799270] name text-[15px] tracking-wide flex gap-3">
              <h1 className="lastSeen">Last Seen: {lastSeen}</h1>
              <span className="bigText">|</span>
              <h1 className="timeZone">Local Time: {localTime}</h1>
            </div>
          </div>
        </div>
        <button className="icons bg-[#004321] p-3 rounded-lg cursor-pointer mt-2">
          <img src="../images/VideoCall.svg" alt="videocall" />
        </button>
      </div>

      {/* Message Box Section */}
      <div className="messageBox space-y-4 px-10 h-[69vh] bg-[#004321] -mt-3 py-5 overflow-y-auto">
        {/* Sender Message (With Attachment) */}
        <div className="flex items-start gap-3">
          <img src="../images/user1.png" alt="User" className="w-8 h-8 rounded-full" />
          <div className="bg-[#004726] text-white p-4 rounded-lg max-w-[60%]">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
            <div className="mt-2 bg-[#005C0E] p-2 rounded-lg flex items-center gap-3">
              <img src="../images/FileIcon.svg" alt="file" className="w-5" />
              <span className="text-white text-sm">doc.pdf</span>
            </div>
            <p className="text-[#799270] text-xs mt-2">7 Nov 2024, 9:00</p>
          </div>
        </div>
        </div>
        

      <div className="sendMessage w-full webBg h-16 flex justify-between gap-6 items-center py-3 mt-3 relative">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="h-14 px-4 desc bg-[#012619] tracking-wide focus:outline-none text-white w-[90%] rounded-lg placeholder:text-[#DAFF99] placeholder:opacity-50"
          placeholder="Type message...."
        />
        <button className="sendBtn flex gap-2 bg-[#005C0E] py-4 px-8 rounded-lg">
          <h1 className="name text-white tracking-wider">Send</h1>
          <img src="../images/MessageSend.svg" alt="sendSymb" />
        </button>
      </div>

      <div className="attachments flex gap-2 relative">
        {/* Hidden file input */}
        <input
          type="file"
          accept="image/*,video/*,.pdf,.doc,.docx,.txt"
          className="hidden"
          id="fileInput"
          onChange={handleFileChange}
        />
        
        {/* Attachment button triggers file input */}
        <button
          className="icons bg-[#004321] py-2 px-5 rounded-lg cursor-pointer mt-2"
          onClick={() => document.getElementById("fileInput").click()}
        >
          <img src="../images/MessageAttachment.svg" alt="MessageAttachment" />
        </button>

        {/* Emoji Picker Button */}
        <button
          className="icons bg-[#004321] py-2 px-5 rounded-lg cursor-pointer mt-2"
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
        >
          <img src="../images/MessageEmoji.svg" alt="MessageEmoji" />
        </button>

        {showEmojiPicker && (
          <div className="absolute bottom-16 left-0 bg-white p-2 rounded-lg shadow-lg">
            <EmojiPicker onEmojiClick={handleEmojiClick} />
          </div>
        )}

        <button className="icons bg-[#004321] py-2 px-5 rounded-lg cursor-pointer mt-2 text-white name tracking-wide">
          Custom Offer
        </button>
      </div>
    </div>
  );
};

export default ActiveConversation;
