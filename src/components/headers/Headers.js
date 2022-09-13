import React from "react";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiFillGoogleCircle,
  AiFillCaretDown,
} from "react-icons/ai";
function Headers() {
  return (
    <div className="text-4xl font-bold text-[#423E3E] mx-8 flex flex-col h-screen pb-8 pt-48">
      <div className="grow">
        <h1>Hello</h1>
        <h1 className="mb-2">
          I'm <span className="text-[#FF753A]">Abdurrizqo</span>
        </h1>
        <h1>A Web Developer</h1>
        <div className="flex gap-5 mt-5 items-center text-4xl">
          <AiOutlineGithub />
          <AiFillLinkedin />
          <AiFillGoogleCircle />
        </div>
      </div>

      <div className="animate-bounce cursor-pointer">
        <p className="text-xl px font-light text-[#ADACAC] text-center">
          Selected works
        </p>
        <AiFillCaretDown className="block mx-auto text-[#ADACAC] text-lg" />
      </div>
    </div>
  );
}

export default Headers;
