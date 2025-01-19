import React, { useState } from "react";
import { assests } from "../assets/assets";

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const faqs = [
    {
      question: "Is there a free trail available?",
      answer:
        "Yes, you can try us for free for 30days.If you want,we'll provide you with a free,presonalized 30-minute onboarding call to get you up and running as soon as possible",
    },
    {
      question: "Can I change my plan later?",
      answer: "Yes, you can change your plan later.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "You can cancel your plan at any time with no additional charges.",
    },
    {
      question: "Can other info be added to an invoice?",
      answer:
        "Yes, additional information such as payment terms, due dates, company logos, and item descriptions can be added to an invoice.",
    },
    {
      question: "How does billing work?",
      answer:
        "Billing involves issuing invoices for products or services, with payment terms and methods specified.",
    },
    {
      question: "How do I change my account email?",
      answer:
        "To change your account email, go to the account settings or profile section and update the email address field.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Frequently Asked Questions
      </h2>
      <p className="text-gray-500 text-center mb-16">
        Everything you need to know about the product and billing
      </p>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleAnswer(index)}
          >
            <h3 className="text-lg ">{faq.question}</h3>
            <span className="text-xl">{activeIndex === index ? "-" : "+"}</span>
          </div>
          {activeIndex === index && (
            <p className="mt-2 text-gray-600">{faq.answer}</p>
          )}
          <hr className="my-4" />
        </div>
      ))}

      <div className="flex flex-col items-center pt-16 bg-gray-100 mt-16 rounded-xl w-full max-w-full px-4">
        <img src={assests.avatar_group} alt="" className="mb-4" />
        <p className="text-center mb-2">Still have questions?</p>
        <p className="text-center mb-4">
          Can't find the answer you're looking for? Please chat to our friendly
          team
        </p>
        <button className="bg-red-600 text-white rounded-lg p-6 pt-2 pb-2 mb-10">
          Get in touch
        </button>
      </div>
      <hr className="my-4 mt-16 border-t-2 border-gray-100" />
    </div>
  );
};

export default Faqs;
