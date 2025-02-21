import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PaymentMethodFilling from "./PaymentMethodFilling";

const BankAccount = () => {
  const [cards, setCards] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/auth/Cards/${userId}`
        );
        const data = await response.json();
        setCards(data);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    fetchCards();
  }, []);

  // Function to mask card number
  const maskCardNumber = (cardNumber) => {
    if (!cardNumber || cardNumber.length !== 16) {
      return "Invalid Card Number";
    }
    return `XXXXXXXXXXXX${cardNumber.slice(-4)}`;
  };
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="whole-container px-5 2xl:px-[20rem] 2xl:-ml-56 left-0 h-[96vh] overflow-y-scroll scrollbarNew">
      <div className="title mt-8 md:mt-20 2xl:mt-28 text-white flex flex-col gap-6">
        <h1 className="text-[18px] lg:text-[24px] tracking-wide name">
          Bank Account
        </h1>
        <div className="h-[1px] w-full bg-[#6B8F71] opacity-40"></div>
      </div>

      <div className="billingMethod mt-6">
        {cards.length === 0 && (
          <h1 className="text-[19px] text-[#45be59] desc">
            You haven't added a payment method yet.
          </h1>
        )}

        <div className="flex flex-col gap-6 border border-[#4B5736] rounded-lg px-4 py-10 mt-8">
          {cards.length > 0 ? (
            cards.map((card, index) => (
              <div
                key={index}
                className="billingBox flex gap-6 border border-[#4B5736] rounded-lg w-[40%] justify-center items-center py-8"
              >
                <div className="flex flex-col">
                  <span className="text-white">
                    {maskCardNumber(card.cardNumber)}
                  </span>{" "}
                  {/* Masked card number */}
                  <span className="text-white">{card.firstName}</span>{" "}
                  {/* Cardholder's first name */}
                </div>
              </div>
            ))
          ) : (
            <div className="flex justify-center items-center">
              <h1 className="text-[18px] text-[#6bad76] desc tracking-wide">
                No cards available.
              </h1>
            </div>
          )}
        </div>

        <div
          className="billingBox flex gap-6 border border-[#4B5736] rounded-lg w-[40%] justify-center items-center py-8 cursor-pointer mt-3"
          onClick={openModal}
        >
          <img src="../images/bill.svg" alt="billing" />
          <button className="billingButton name text-[17px] text-white">
            Add Billing Method
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#1e1e1e] rounded-lg p-6 w-[90%] md:w-[50%] h-[90%]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-white text-lg name">Add Payment Method</h2>
              <button
                className="text-white text-lg font-bold"
                onClick={closeModal}
              >
                <img src="../images/cancel.svg" alt="cancel"/>
              </button>
            </div>
            <PaymentMethodFilling />
          </div>
        </div>
      )}
    </div>
  );
};

export default BankAccount;
