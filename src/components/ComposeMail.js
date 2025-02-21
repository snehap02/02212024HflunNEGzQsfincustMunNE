import React, { useState } from "react";

const EmailComposer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    body: "",
  });
  const [attachments, setAttachments] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setAttachments([...attachments, ...files]);
  };

  const handleRemoveFile = (index) => {
    const updatedAttachments = attachments.filter((_, i) => i !== index);
    setAttachments(updatedAttachments);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataWithAttachments = new FormData();
    Object.keys(formData).forEach((key) =>
      formDataWithAttachments.append(key, formData[key])
    );
    attachments.forEach((file) =>
      formDataWithAttachments.append("attachments", file)
    );

    const response = await fetch("/api/send-email", {
      method: "POST",
      body: formDataWithAttachments,
    });

    if (response.ok) {
      alert("Email sent successfully!");
      setAttachments([]);
    } else {
      alert("Failed to send email.");
    }
  };

  return (
    <div className="max-w-lg mt-10">
      <form onSubmit={handleSubmit} className="space-y-4 flex flex-col gap-6">
        <div className="name flex items-center gap-5">
          <h1 className="text-[16px] text-white name">Name</h1>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="bg-[#012619] rounded-md w-full h-14 px-4 desc shadow-lg focus:outline-none text-white ml-4"
            required
          />
        </div>
        <div className="email flex items-center gap-5">
          <h1 className="text-[16px] text-white name">Email</h1>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="bg-[#012619] rounded-md w-full h-14 px-4 desc shadow-lg focus:outline-none text-white ml-5"
            required
          />
        </div>
        <div className="subject flex items-center gap-5">
          <h1 className="text-[16px] text-white name">Subject</h1>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="bg-[#012619] rounded-md w-full h-14 px-4 desc shadow-lg focus:outline-none text-white ml-1"
            required
          />
        </div>
        <div className="body flex gap-5">
          <h1 className="text-[16px] text-white name">Message</h1>
          <textarea
            name="body"
            value={formData.body}
            onChange={handleChange}
            placeholder="Enter your question"
            className="bg-[#012619] rounded-md w-full px-4 py-3 desc shadow-lg focus:outline-none text-white -ml-1"
            rows="5"
            required
          ></textarea>
        </div>
        <div className="attachments rounded-md">
          <div className="flex items-center justify-between gap-7">
            <div className="flex gap-4">
              <h1 className="text-[16px] text-white name">Attachment</h1>
              {/* <img
                src="../images/attachments.svg"
                alt="attachments"
                className="w-6"
              /> */}
            </div>

            <div className="flex items-center gap-4 space-x-2">
              <span className="text-[#8fb695] desc">
                {attachments.length} Files Added
              </span>
              <label
                htmlFor="file-upload"
                className="flex bg-[#012619] rounded-md px-4 py-3 items-center gap-3 text-white name cursor-pointer"
              >
                <span className="text-sm">Add More Files</span>
                <img src="../images/AddMore.svg" alt="addmore" />
              </label>
              <input
                id="file-upload"
                type="file"
                multiple
                onChange={handleFileUpload}
                className="hidden"
              />
            </div>
          </div>
          {attachments.length > 0 && (
            <ul className="mt-4 space-y-1 border border-buySellBorder px-4 py-2 rounded-lg">
              {attachments.map((file, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between text-[#6B8F71] desc py-1"
                >
                  <span>{file.name}</span>
                  <button
                    type="button"
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleRemoveFile(index)}
                  >
                    <img src="../images/cancelRed.svg" alt="cancel" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="send-button w-full flex justify-end">
          <button
            className="px-14 py-3 bg-[#052D23] hover:text-black hover:bg-buttonHover border border-buySellBorder font-medium rounded-lg shadow-md transition-all text-[17px] name flex justify-between items-center gap-3 text-white"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmailComposer;
