/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Modal = ({ isOpen, onClose, title, questions }) => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (question) => {
    setActiveQuestion(activeQuestion === question ? null : question);
  };

  if (!isOpen) return null;

  return (
    <div className=" fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 scroll-smooth">
      <div className="bg-white p-6 rounded-md shadow-lg max-w-4xl w-full">
        <h2 className="text-[36px] font-semibold mb-4 ">{title}</h2>
        <div className="mb-4">
          {questions.map((q, index) => (
            <div key={index} className="mb-4">
              
              <button
                className="w-full text-left p-2 font-bold  rounded hover:bg-gray-100 opacity-70"
                onClick={() => toggleQuestion(q.question)}
              >
                {q.question}
              </button>

              
              {activeQuestion === q.question && (
                <div className="mt-2 p-2 bg-gray-50 rounded">
                  <p>{q.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
