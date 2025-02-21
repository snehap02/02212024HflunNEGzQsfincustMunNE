import React, { useState } from "react";

const AddRequirements = () => {
  const [questions, setQuestions] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [questionType, setQuestionType] = useState("text");
  const [questionText, setQuestionText] = useState("");
  const [attachment, setAttachment] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);
  const [multipleChoices, setMultipleChoices] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleAddQuestion = () => {
    // Validation for required fields
    if (
      (questionType === "text" && questionText.trim() === "") ||
      (questionType === "multiple-choice" &&
        multipleChoices.every((choice) => choice.trim() === "")) ||
      (questionType === "attachment" && !attachment)
    ) {
      alert("Please fill in the required fields before adding the question.");
      return;
    }

    if (editingIndex !== null) {
      const updatedQuestions = [...questions];
      updatedQuestions[editingIndex] = {
        type: questionType,
        text: questionText,
        attachment,
        multipleChoices,
      };
      setQuestions(updatedQuestions);
      resetForm();
      return;
    }

    setQuestions([
      ...questions,
      { type: questionType, text: questionText, attachment, multipleChoices },
    ]);
    resetForm();
  };

  const resetForm = () => {
    setShowForm(false);
    setQuestionType("text");
    setQuestionText("");
    setAttachment(null);
    setEditingIndex(null);
    setMultipleChoices([]);
  };

  const handleEdit = (index) => {
    const question = questions[index];
    setShowForm(true);
    setEditingIndex(index);
    setQuestionType(question.type);
    setQuestionText(question.text);
    setAttachment(question.attachment || null);
    setMultipleChoices(question.multipleChoices || []);
  };

  const handleAddChoice = () => {
    setMultipleChoices([...multipleChoices, ""]);
  };

  const handleChoiceChange = (index, value) => {
    const updatedChoices = [...multipleChoices];
    updatedChoices[index] = value;
    setMultipleChoices(updatedChoices);
  };

  const handleAttachmentChange = (event) => {
    setAttachment(event.target.files[0]);
  };
  return (
    <div>
      {/* Requirement Section */}
      <div className="project-requirements -mt-5">
        <h2 className="text-[17px] bigText">Add Requirements</h2>
        <h2 className="text-[14px] lg:text-[16px] editTitle text-[#359846] text-justify">
          Provide the details needed to complete the order.
        </h2>

        <div className="mt-7">
          <button
            onClick={() => setShowForm(true)}
            className="bg-button hover:bg-green-800 text-white font-bold py-3 px-4 mt-3 flex justify-between items-center gap-4 rounded-lg"
          >
            Add New Question <img src="../images/AddSym.svg" alt="add" />
          </button>

          {showForm && (
            <div className="mt-6 space-y-4 border p-4 rounded bg-transparent boredr border-[#6B8F71] desc">
              {/* First Div */}
              {/* <div className="flex justify-between items-center space-x-4">
                <span className="name">Add the question in the form of:</span>
                <select
                  value={questionType}
                  onChange={(e) => setQuestionType(e.target.value)}
                  className="bg-[#012619] text-white py-2 px-5 rounded-lg shadow-lg shadow-[#071B16] focus:outline-none cursor-pointer"
                >
                  <option value="text">Text</option>
                  <option value="multiple-choice">Multiple Choice</option>
                  <option value="attachment">Attachment</option>
                </select>
              </div> */}
              {/* First Div */}
              <div className="flex justify-between items-center space-x-4">
                <span className="name">Add the question in the form of:</span>

                <div className="relative">
                  {/* Dropdown Button */}
                  <button
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="bg-[#023523] text-white py-2 w-48 rounded-lg shadow-lg shadow-[#071B16] focus:outline-none cursor-pointer flex justify-center gap-4 items-center space-x-2"
                  >
                    <span>
                      {questionType === "text"
                        ? "Text"
                        : questionType === "multiple-choice"
                        ? "Multiple Choice"
                        : "Attachment"}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-6 h-6 transition-transform text-buttonHover transform ${
                        showDropdown ? "rotate-180" : "rotate-0"
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  {/* Dropdown Options */}
                  {showDropdown && (
                    <div className="absolute top-12 left-0 bg-[#023523] rounded-lg shadow-lg w-full">
                      <div
                        onClick={() => {
                          setQuestionType("text");
                          setShowDropdown(false);
                        }}
                        className={`py-2 px-4 cursor-pointer hover:bg-forestGreen hover:text-white text-[15px] ${
                          questionType === "text"
                            ? "bg-[#023523] text-white"
                            : ""
                        }`}
                      >
                        Text
                      </div>
                      <div
                        onClick={() => {
                          setQuestionType("multiple-choice");
                          setShowDropdown(false);
                        }}
                        className={`py-2 px-4 cursor-pointer hover:bg-forestGreen  hover:text-white text-[15px] ${
                          questionType === "multiple-choice"
                            ? "bg-[#012619] text-white"
                            : ""
                        }`}
                      >
                        Multiple Choice
                      </div>
                      <div
                        onClick={() => {
                          setQuestionType("attachment");
                          setShowDropdown(false);
                        }}
                        className={`py-2 px-4 cursor-pointer hover:bg-forestGreen hover:text-white text-[15px] ${
                          questionType === "attachment"
                            ? "bg-[#012619] text-white"
                            : ""
                        }`}
                      >
                        Attachment
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Second Div */}
              <div>
                <p className="mb-2">Add a question</p>
                <textarea
                  value={questionText}
                  onChange={(e) => setQuestionText(e.target.value)}
                  maxLength={500}
                  className="w-full focus:outline-none p-4 name bg-[#012619] rounded-lg text-white shadow-lg shadow-[#071B16] mt-2"
                  placeholder="Point out necessary details you need from the user..."
                />
                <p className="text-sm text-gray-200 text-right">
                  {questionText.length}/500
                </p>

                {/* Additional Inputs Based on Type */}
                {questionType === "multiple-choice" && (
                  <div className="mt-4">
                    {multipleChoices.map((choice, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 mb-2"
                      >
                        <input
                          type="text"
                          value={choice}
                          onChange={(e) =>
                            handleChoiceChange(index, e.target.value)
                          }
                          className="border p-2 rounded flex-1"
                          placeholder={`Option ${index + 1}`}
                        />
                      </div>
                    ))}
                    <button
                      onClick={handleAddChoice}
                      className="text-[#DAFF99] mt-2"
                    >
                      + Add Option
                    </button>
                  </div>
                )}

                {questionType === "attachment" && (
                  <div className="mt-4">
                    {attachment ? (
                      <div className="flex items-center space-x-2">
                        <span>{attachment.name}</span>
                        <button
                          onClick={() => setAttachment(null)}
                          className="text-red-500"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <input
                        type="file"
                        onChange={handleAttachmentChange}
                        className="mt-2"
                      />
                    )}
                  </div>
                )}
              </div>

              {/* Buttons */}
              <div className="space-x-2 flex justify-end">
                <button
                  onClick={handleAddQuestion}
                  className="bg-[#026310] text-white px-8 py-2 rounded-lg hover:bg-green-600 name mr-2"
                >
                  {editingIndex !== null ? "Save Changes" : "Add"}
                </button>
                <button
                  onClick={resetForm}
                  className="bg-transparent ring-2 ring-red-600 hover:bg-red-600 text-white py-2 px-6 rounded-lg name"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Render Questions */}
          <div className="mt-6 space-y-4">
            {questions.map((question, index) => (
              <div
                key={index}
                className="flex justify-between items-center w-full focus:outline-none p-4 name bg-[#012619] rounded-lg shadow-lg shadow-[#071B16]"
              >
                <div>
                  <p className="font-bold bg-[#054D0F] px-10 py-1 rounded-lg bg-opacity-50 text-[#6B8F71] text-[14px] name">{question.type.toUpperCase()}</p>
                  <p className="mt-4">{question.text}</p>
                  {question.type === "multiple-choice" && (
                    <ul className="mt-2 space-y-1 text-sm text-gray-600">
                      {question.multipleChoices.map((choice, idx) => (
                        <li key={idx}>- {choice}</li>
                      ))}
                    </ul>
                  )}
                  {question.type === "attachment" && question.attachment && (
                    <p className="mt-2 text-sm text-gray-600">
                      Attachment: {question.attachment.name}
                    </p>
                  )}
                </div>
                <button
                  onClick={() => handleEdit(index)}
                  className="mt-10"
                >
                  <img src="../images/editPen.svg" alt="edit" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRequirements;
