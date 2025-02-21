import React, { useState } from "react";

function FAQSection() {
  const [faqs, setFaqs] = useState([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const handleAdd = () => {
    if (question.trim() && answer.trim()) {
      setFaqs([...faqs, { question, answer }]);
      setQuestion("");
      setAnswer("");
      setIsAdding(false);
    }
  };

  return (
    <div className="text-white mt-10">
      <h1 className="text-[20px] font-bold mb-4">
        Frequently Asked Questions (FAQ) &nbsp;{" "}
        <span className="text-[#359846] text-[17px]">(OPTIONAL)</span>
      </h1>
      <h2 className="text-[14px] lg:text-[16px] editTitle text-[#359846] text-justify -mt-1">
        Add helpful questions and answers for your buyers.
      </h2>

      {!isAdding ? (
        <button
          className="bg-button hover:bg-green-800 text-white font-bold py-3 px-4 rounded mt-6 flex justify-between items-center gap-4"
          onClick={() => setIsAdding(true)}
        >
          Add Question <img src="../images/AddSym.svg" alt="add" />
        </button>
      ) : (
        <div className="rounded mb-4 mt-6 flex flex-col gap-3">
          <div className="mb-2">
            {/* <label className="block text-sm font-medium mb-1">
              Add a question
            </label> */}
            <input
              type="text"
              className="w-full focus:outline-none p-4 name bg-[#012619] rounded text-white"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Add a question"
            />
          </div>
          <div className="mb-2">
            {/* <label className="block text-sm font-medium mb-1">
              Add an answer
            </label> */}
            <textarea
              className="w-full focus:outline-none p-4 name bg-[#012619] rounded text-white"
              rows="3"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Add an answer"
            ></textarea>
          </div>
          <div className="flex gap-5 w-full">
            <button
              className="bg-button ring-2 ring-green-800 hover:bg-green-800 text-white font-bold py-2 px-10 rounded-lg text-[17px]"
              onClick={handleAdd}
            >
              Add
            </button>
            <button
              className="bg-transparent ring-2 ring-red-600 hover:bg-red-600 text-white font-bold py-2 px-10 rounded-lg text-[17px]"
              onClick={() => setIsAdding(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="mt-8">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="bg-green-950 p-5 mb-4 rounded-lg shadow-lg group"
          >
            <summary className="text-white flex justify-between items-center cursor-pointer text-[18px] name">
              {faq.question}
              <span className="group-open:rotate-180 transition-transform duration-300 border-none">
                <img src="../images/downArrow.svg" alt="downarrow" />
              </span>
            </summary>
            <p className="mt-4 text-sm text-white leading-relaxed text-[17px] desc">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}

export default FAQSection;
