import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="w-full min-h-[70vh] bg-webBg pt-32 px-5 md:px-20 lg:px-48">
      <h1 className="text-4xl bigText text-green-600 uppercase w-full">
        Terms and Conditions
      </h1>
      <p className="text-yellow-50 desc tracking-wider md:text-xl mt-10">
        By using Fincust, you agree to these Terms and Conditions.
      </p>

      <div className="mt-10 flex flex-col gap-10">
        <div className="first-point">
          <h1 className="text-[22px] md:text-[26px] bigText text-white">1. Overview
          </h1>
          <h2 className="text-[16px] name text-white mt-4 w-[80%]">
            Fincust is a platform where freelancers sell online services
            directly to buyers. We facilitate transactions but are not a party
            to agreements between freelancers and buyers.
          </h2>
        </div>

        <div className="second-point">
          <h1 className="text-[22px] md:text-[26px] bigText text-white">
            2. User Responsibilities
          </h1>
          <ul className="text-white desc list-disc px-10 md:px-16 mt-4">
            <li>
              Freelancers: Must deliver services as promised and meet
              agreed-upon deadlines.
            </li>
            <li className="mt-2">
              Buyers: Must provide clear, accurate details when ordering
              services.
            </li>
            <li className="mt-2">
              Users must ensure that all communications and transactions remain
              professional and lawful.
            </li>
          </ul>
        </div>

        <div className="third-point">
          <h1 className="text-[22px] md:text-[26px] bigText text-white">
            3. Transactions and Payments
          </h1>
          <ul className="text-white desc list-disc px-10 md:px-16 mt-4">
            <li>Payments are processed securely via third-party systems.</li>
            <li className="mt-2">
              Fincust charges a service fee for transactions, which will be
              displayed during checkout.
            </li>
            <li className="mt-2">
              Refunds or disputes are subject to our Refund Policy and
              Resolution Process.
            </li>
          </ul>
        </div>

        <div className="fourth-point">
          <h1 className="text-[22px] md:text-[26px] bigText text-white">
            4. Prohibited Activities
          </h1>
          <ul className="text-white desc list-disc px-10 md:px-16 mt-4">
            <li>
              Misrepresentation of services or violation of intellectual
              property rights.
            </li>
            <li className="mt-2">
              Fraudulent activities, harassment, or inappropriate content.
            </li>
            <li className="mt-2">
              Circumventing Fincust’s payment or communication systems.
            </li>
          </ul>
        </div>

        <div className="fifth-point mb-20">
          <h1 className="text-[22px] md:text-[26px] bigText text-white">
            5. Limitation of Liability
          </h1>
          <h2 className="text-[16px] name text-white mt-4 w-[80%]">
            Fincust is a facilitator and is not responsible for disputes,
            quality of services, or damages resulting from user interactions.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
