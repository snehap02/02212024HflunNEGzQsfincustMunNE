import React, { useState } from "react";

const Editor = () => {
  const [alignment, setAlignment] = useState("left");
  const [content, setContent] = useState(""); // Track the content

  const applyFormatting = (command) => {
    document.execCommand(command, false, null);
  };

  const applyAlignment = (align) => {
    setAlignment(align);
    document.execCommand("justify" + align, false, null);
  };

  return (
    <div className="bg-[#012619] w-full h-80 flex flex-col mt-4 rounded-lg">
      {/* Toolbar */}
      <div className="w-full h-14 bg-[#21872F] rounded-tl-lg rounded-tr-lg flex flex-row p-2 gap-3">
        {/* Bold Button */}
        <button
          onClick={() => applyFormatting("bold")}
          className="hover:transition-all hover:scale-105 hover:bg-[#012619] px-4 rounded-lg"
        >
          <img src="../images/bold.svg" alt="bold" />
        </button>

        {/* Italic Button */}
        <button
          onClick={() => applyFormatting("italic")}
          className="hover:transition-all hover:scale-105 hover:bg-[#012619] px-4 rounded-lg"
        >
          <img src="../images/italics.svg" alt="italic" />
        </button>

        {/* Left Align Button */}
        <button
          onClick={() => applyAlignment("left")}
          className="hover:transition-all hover:scale-105 hover:bg-[#012619] px-4 rounded-lg"
        >
          <img src="../images/LeftAlign.svg" alt="left align" />
        </button>

        {/* Center Align Button */}
        <button
          onClick={() => applyAlignment("center")}
          className="hover:transition-all hover:scale-105 hover:bg-[#012619] px-4 rounded-lg"
        >
          <img src="../images/MiddleAlign.svg" alt="center align" />
        </button>

        {/* Right Align Button */}
        <button
          onClick={() => applyAlignment("right")}
          className="hover:transition-all hover:scale-105 hover:bg-[#012619] px-4 rounded-lg"
        >
          <img src="../images/RightAlign.svg" alt="right align" />
        </button>
      </div>

      {/* Editable Content Area */}
      <div
        id="editor"
        contentEditable
        className={`h-full rounded-bl-lg rounded-br-lg bg-transparent focus:outline-none pt-4 px-6 text-${alignment}`}
        style={{
          textAlign: alignment,
        }}
        onInput={(e) => setContent(e.target.innerHTML)} // Update state on input
        data-placeholder="Type Here...." // Placeholder text
      >
        {content === "" && (
          <span
            className="text-gray-500 name"
            style={{
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            Type Here....
          </span>
        )}
      </div>
      <div className="AI w-full flex justify-end p-3">
        <button>
          <img src="../images/AskAI.png" alt="ai" className="w-12" />
        </button>
      </div>
    </div>
  );
};

export default Editor;
