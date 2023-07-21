import React from "react";
import { Fade } from "react-awesome-reveal";
const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <Fade cascade direction="left">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-pink-600">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>Hi. I'm Harold Aquino. I'm a Software Developer student.</p>
            </div>
            <div>
              <p>
                I am passionate guy who loves to make websites. After a long
                time studying Frontend, I'm currently studying everything about
                the Backend Developer. My main goal is building Full Stack Web
                applications to be a Full Stack Developer and try to teach all
                my knowledges to the people. Also, I love the server side
                programming, where I can build complex databases and systems.
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default About;
