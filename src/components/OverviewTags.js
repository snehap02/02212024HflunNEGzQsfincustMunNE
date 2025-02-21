import React, { useState } from "react";

const OverviewTags = ({ placeholder, onTagsChange }) => {
  const [currentTag, setCurrentTag] = useState("");
  const [tagList, setTagList] = useState([]);

  const addTag = () => {
    if (currentTag.trim() && !tagList.includes(currentTag)) {
      const updatedTags = [...tagList, currentTag.trim()];
      setTagList(updatedTags);
      onTagsChange(updatedTags); // Notify parent about the new tags
    }
    setCurrentTag(""); // Clear the input
  };

  const removeTag = (tag) => {
    const updatedTags = tagList.filter((t) => t !== tag);
    setTagList(updatedTags);
    onTagsChange(updatedTags); // Notify parent about the removed tags
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTag();
    }
  };

  return (
    <div className="flex flex-col gap-2 mt-5">
      <div className="flex flex-wrap gap-4 px-3 py-4 bg-[#012619] rounded-md">
        {tagList.map((tag, index) => (
          <div
            key={index}
            className="flex items-center bg-limeGreen text-black text-lg name px-2 py-1 rounded-md"
          >
            {tag}
            <button
              className="ml-2 text-black text-2xl"
              onClick={() => removeTag(tag)}
            >
              &times;
            </button>
          </div>
        ))}
        <input
          type="text"
          value={currentTag}
          onChange={(e) => setCurrentTag(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="bg-transparent outline-none text-white text-[17px]"
        />
      </div>
    </div>
  );
};

export default OverviewTags;