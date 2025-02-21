import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="w-full min-h-[70vh] bg-webBg pt-32 px-5 md:px-20 lg:px-48">
      <h1 className="text-4xl bigText text-green-600 uppercase w-full">
        Privacy Policy
      </h1>
      <p className="text-yellow-50 desc tracking-wider md:text-xl mt-10">
        At Fincust, your privacy is important to us. This Privacy Policy
        outlines how we collect, use, and protect your information when you
        visit or make a purchase from our website.
      </p>
      <div className="mt-10 flex flex-col gap-10">
        <div className="first-point">
          <h1 className="text-[22px] md:text-[26px] bigText text-white">
            1. Information We Collect
          </h1>
          <h2 className="text-[16px] name text-white mt-4">
            We may collect the following types of information:
          </h2>
          <ul className="text-white desc list-disc px-10 md:px-16 mt-4">
            <li>
              Personal Information: Your name, email address, phone number,
              shipping address, and payment details when you place an order.
            </li>
            <li className="mt-2">
              Non-Personal Information: Your IP address, browser type, device
              information, and browsing behavior to improve our website.
            </li>
          </ul>
        </div>

        <div className="second-point">
          <h1 className="text-[22px] md:text-[26px] bigText text-white">
            2. How We Use Your Information
          </h1>
          <h2 className="text-[16px] name text-white mt-4">
            We use your information to:
          </h2>
          <ul className="text-white desc list-disc px-10 md:px-16 mt-4">
            <li>Process and fulfill your orders.</li>
            <li className="mt-2">
              Communicate with you regarding your purchases or inquiries.
            </li>
            <li className="mt-2">
              Improve our website and personalize your experience.
            </li>
            <li className="mt-2">Comply with legal obligations.</li>
          </ul>
        </div>

        <div className="third-point">
          <h1 className="text-[22px] md:text-[26px] bigText text-white">
            3. Data Protection
          </h1>
          <h2 className="text-[16px] name text-white mt-4 w-[80%]">
            We implement security measures to protect your data from
            unauthorized access, alteration, or disclosure. However, no online
            platform is completely secure, so please use our site responsibly.
          </h2>
        </div>

        <div className="fourth-point">
          <h1 className="text-[22px] md:text-[26px] bigText text-white">
            4. Sharing Your Information
          </h1>
          <h2 className="text-[16px] name text-white mt-4">
            We do not sell your personal information. We may share your
            information with:
          </h2>
          <ul className="text-white desc list-disc px-10 md:px-16 mt-4">
            <li>Payment processors for order transactions.</li>
            <li className="mt-2">Delivery services for shipping orders.</li>
            <li className="mt-2">Legal authorities if required.</li>
          </ul>
        </div>

        <div className="fifth-point">
          <h1 className="text-[22px] md:text-[26px] bigText text-white">
            5. Your Rights
          </h1>
          <h2 className="text-[16px] name text-white mt-4 w-[80%]">
            You can request access to, correction, or deletion of your personal
            data by contacting us at{" "}
            <a href="mailto:support@fincust.com">support@fincust.com</a>.
          </h2>
        </div>

        <div className="sixth-point mb-20">
          <h1 className="text-[22px] md:text-[26px] bigText text-white">
            6. Cookies
          </h1>
          <h2 className="text-[16px] name text-white mt-4 w-[80%]">
            We use cookies to enhance your browsing experience. By using our
            site, you consent to the use of cookies.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
