import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full min-h-[70vh] bg-webBg pt-28 md:pt-32 px-5 md:px-20">
      <h1 className="text-4xl bigText text-green-600 uppercase text-center w-full">
        About Us
      </h1>
      <p className="text-yellow-50 desc tracking-wider text-5xl md:text-7xl text-center mt-10 w-full">
        Welcome to Fincust!
      </p>
      <div className="lg:px-64">
        <p className="text-yellow-50 desc tracking-wide text-justify text-[16px] md:text-[19px] mt-10 md:mt-20 w-full leading-8">
          Fincust is your go-to freelance platform, connecting talented
          freelancers with clients who need quality services. Whether you’re
          looking to hire skilled professionals or showcase your talents, we
          provide a secure, user-friendly space to make collaborations happen.
          <br />
          Our mission is to empower creativity and collaboration by bridging the
          gap between freelancers and businesses worldwide. Join us and discover
          the power of freelance work with Fincust.
        </p>
      </div>
      <h1 className="text-2xl text-center font-sourcesans desc text-yellow-50 md:text-3xl mt-20 md:mt-32">
        From the Founders:
      </h1>
      <div className="cards flex flex-col justify-center items-center lg:justify-around pt-10 gap-6 sm:px-10 md:px-28 lg:px-16 text-white">
        <div className="kunals-card rounded-xl flex flex-col lg:gap-20 lg:flex-row justify-center items-center xl:gap-64">
          <div className="px-2 py-10 text-center">
            <img
              src="../images/me.jpg"
              className="w-96 hover:scale-105 transition duration-500 h-96 object-cover" 
              alt=""
            />
            <h1 className="font-sourcesans text-2xl pt-4">Kunal Purkayastha</h1>
            <h3 className="font-sourcesans italic text-lg">Co-founder</h3>
          </div>
          <div className="py-6 px-4 font-sourcesans tracking-wider text-justify rounded-bl-xl rounded-br-xl lg:w-[460px] lg:h-[290px] xl:w-[800px] xl:h-[300px] -mt-10 text-[16px] lg:text-[17px] lg:-mt-28 xl:text-xl">
            "As a co-founder of Fincust, I, Kunal Purkayastha, bring with me a
            background in computer science and an insatiable curiosity for the
            intersection of technology and finance. I possess a keen eye for
            detail and an unwavering commitment to creating a secure and
            reliable platform for financial transactions. My vision and
            determination have been instrumental in shaping Fincust's core
            principles and setting it on a path to become a leading name in the
            secure payment industry."
          </div>
        </div>

        <div className="debaruns-card desc rounded-xl flex flex-col lg:gap-20 lg:flex-row justify-center items-center xl:gap-64">
          <div className="px-2 py-10 text-center lg:hidden">
            <img
              src="../images/deburn1.jpg"
              className="w-96 hover:scale-105 transition duration-500"
              alt=""
            />
            <h1 className="font-sourcesans text-2xl pt-4">
              Debarun Purkayastha
            </h1>
            <h3 className="font-sourcesans italic text-lg">Co-founder</h3>
          </div>
          <div className="py-6 px-4 font-sourcesans tracking-wider text-justify rounded-bl-xl rounded-br-xl lg:w-[460px] lg:h-[290px] xl:w-[800px] xl:h-[300px] -mt-10 text-[16px] lg:text-[17px] xl:text-xl lg:-mt-44">
            "On the other hand, I, Debarun Purkayastha, also a co-founder, am
            driven by a true spirit of innovation and problem-solving. I am
            passionate about the potential of fintech to reshape the digital
            landscape. With a keen eye for market trends and a user-centric
            approach, I have been instrumental in transforming my ideas into
            actionable plans for Fincust. My entrepreneurial spirit and
            marketing expertise have proven invaluable in creating a platform
            that caters to diverse needs and fosters trust between buyers and
            sellers. I believe that this platform remains not only secure but
            also user-friendly, making online transactions a breeze for all
            customers."
          </div>
          <div className="px-2 py-10 text-center lg:flex hidden lg:flex-col">
            <img
              src="../images/deburn1.jpg"
              className="w-96 hover:scale-105 transition duration-500"
              alt=""
            />
            <h1 className="font-sourcesans text-2xl pt-4">
              Debarun Purkayastha
            </h1>
            <h3 className="font-sourcesans italic text-lg">Co-founder</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
