import React, { useState } from "react";
import { conversations } from "../pages/SellerDashboard/MockCardData";
import ActiveConversation from "./ActiveConversation";
import ProfileView from "./ProfileView";

const MessageSidebar = () => {
  const [activeConversation, setActiveConversation] = useState(null);
  const [filter, setFilter] = useState("all");
  const [showFilter, setShowFilter] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProfile, setSelectedProfile] = useState(null);

  const filteredConversations = conversations.filter((conversation) => {
    if (filter === "unread") return conversation.unread > 0;
    if (filter === "read") return conversation.unread === 0;
    return conversation.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="h-[100vh] flex bg-[#01231B]">
      {/* Sidebar */}
      <div className="sidebar h-[100vh] w-[27rem] py-10">
        <div className="searchAndAI flex flex-col gap-5 w-full px-4 py-6">
          <div className="search relative">
            <input
              type="text"
              className="relative w-full h-[52px] rounded-full bg-[#005C0E] focus:outline-none px-4 placeholder:desc placeholder:text-lg placeholder:text-[#DAFF99] placeholder:tracking-wider placeholder:opacity-60 text-white desc text-lg"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute divider bg-[#6FAF55] h-[2px] w-[51px] right-12 rotate-90 -translate-y-[27px]"></div>
            <button className="absolute searchBtn transform hover:transition-all hover:scale-105 right-6 translate-y-3">
              <img src="../images/MessageSearch.svg" alt="search" />
            </button>
          </div>
          <div className="AI">
            <button className="bg-[#005C0E] w-full rounded-full h-[52px] flex gap-4 justify-center items-center">
              <img src="../images/MessageAI.svg" alt="ai" />
              <h1 className="text-[18px] name text-white">Ask AI</h1>
            </button>
          </div>
        </div>
        <div className="titleAndFilter flex justify-between items-center px-5">
          <h1 className="text-[18px] text-white tracking-wider name">
            All Conversation
          </h1>
          <div className="filter relative">
            <button onClick={() => setShowFilter(!showFilter)}>
              <img src="../images/MessageFilter.svg" alt="filter" />
            </button>
            {showFilter && (
              <div className="absolute right-0 mt-2 text-[14px] border border-[#DAFF99] bg-webBg desc text-white rounded-lg shadow-lg py-2 w-44 z-10 px-2">
                <button
                  className="block px-4 py-2 w-full text-left hover:bg-[#004726] rounded-lg"
                  onClick={() => {
                    setFilter("read");
                    setShowFilter(false);
                  }}
                >
                  Read Messages
                </button>
                <button
                  className="block px-4 py-2 w-full text-left hover:bg-[#004726] rounded-lg"
                  onClick={() => {
                    setFilter("unread");
                    setShowFilter(false);
                  }}
                >
                  Unread Messages
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Conversations List */}
        <div className="ImageConversationsAndTime mt-5 border-t border-[#464945] max-h-[65vh] overflow-y-scroll scrollbarNew scrollbar">
          {filteredConversations.map((conversation) => (
            <div
              key={conversation.id}
              onClick={() => setActiveConversation(conversation)}
              className={`flex items-center justify-between px-4 py-3 cursor-pointer border-b border-[#464945] hover:bg-[#00351B] ${
                activeConversation?.id === conversation.id &&
                "md:bg-gradient-to-l md:from-[#004321] md:to-[#002A20] border-t-4 border-mayGreen md:border-l-4 md:border-t-0"
              }`}
            >
              <div className="imageAndOtherParts flex items-center gap-4 w-full">
                <img
                  src={`../images/user${conversation.id}.png`}
                  alt={conversation.name}
                  className="w-14 h-14 rounded-full"
                />
                <div className="text flex flex-col gap-3 w-full">
                  <div className="flex justify-between items-center w-full">
                    <h1 className="text-white text-[17px] name tracking-wide">
                      {conversation.name}
                    </h1>
                    <p className="text-[#DAFF99] text-[14px] desc">
                      {conversation.time}
                    </p>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="-mt-1 text-[#DAFF99] text-[15px] desc opacity-60 w-[80%]">
                      {conversation.message}
                    </p>
                    {conversation.unread > 0 && (
                      <div className="-mt-1 flex justify-end w-[20%]">
                        <span className="bg-[#4b8a33] text-white text-[14px] desc px-2 py-[1px] -mt-1 rounded-full text-center">
                          {conversation.unread}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Active Conversation */}
      {activeConversation ? (
        <ActiveConversation
          conversation={activeConversation}
          setSelectedProfile={setSelectedProfile}
        />
      ) : (
        <div className="h-[97vh] flex-1 bg-[#004321] bg-opacity-50 flex flex-col gap-3 items-center justify-center">
          <img
            src="../images/AskAI.png"
            alt="logo"
            className="w-32 opacity-20"
          />
          <h1 className="text-[20px] tracking-wide text-white opacity-30 desc">
            Start a Conversation
          </h1>
        </div>
      )}

      {/* Profile View Component */}
      {selectedProfile && (
        <ProfileView
          selectedProfile={selectedProfile}
          setSelectedProfile={setSelectedProfile}
        />
      )}
    </div>
  );
};

export default MessageSidebar;
