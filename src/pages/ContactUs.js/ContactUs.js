import React from "react";

const ContactUs = () => {
  return (
    <div className="w-full min-h-[70vh] bg-webBg pt-32 px-5 md:px-20">
      <h1 className="text-4xl bigText text-green-600 uppercase text-center w-full">
        Contact Us
      </h1>
      <p className="text-yellow-50 desc tracking-wider text-lg md:text-2xl text-center mt-10 w-full">
        We’re here to help with any questions or concerns about Fincust. Reach
        out to us:
      </p>
      <div className="flex flex-col justify-center gap-20 items-center md:flex-row md:flex-wrap py-32 md:mt-0 -mt-14">
        <div className="flex flex-col justify-center items-center p-10 gap-8 rounded-xl bg-green-900 bg-opacity-20 shadow-lg shadow-black w-80 md:w-96 md:h-80">
          <img src={`${process.env.PUBLIC_URL}/images/phone.png`} alt="" className="w-20" />
          <p className="name text-lg text-white">
            <a href="tel:+919365512681">Call Us: +919365512681</a>
          </p>
        </div>

        <div className="flex flex-col justify-center items-center p-10 gap-8 rounded-xl bg-green-900 bg-opacity-20 shadow-lg shadow-black w-80 md:w-96 md:h-80">
          <img src={`${process.env.PUBLIC_URL}/images/location.png`} alt="" className="w-20" />
          <p className="name text-[16px] text-white text-justify">
            Krishna Regency, Datta Mandir Road, Vakola, Santacruz East, Mumbai
            400055 Alternatively, use the contact form on our website, and we’ll
            get back to you promptly.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center p-10 gap-8 rounded-xl bg-green-900 bg-opacity-20 shadow-lg shadow-black w-80 md:w-96 md:h-80">
          <img src={`${process.env.PUBLIC_URL}/images/mail.png`} alt="" className="w-20" />
          <p className="name text-lg text-white">
            <a href="mailto:support@fincust.com">Mail to: FinCust</a>
          </p>
        </div>

        
      </div>
    </div>
  );
};

export default ContactUs;
