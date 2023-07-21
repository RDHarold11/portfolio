import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import Node from "../assets/node.png";
import Sql from "../assets/sql.svg";
import Git from "../assets/git.svg";
import { Fade } from "react-awesome-reveal";

//Me falta SQL

const Skills = () => {
  return (
    <div
      name="skills"
      className="bg-[#0a192f] text-gray-300 w-full md:h-screen py-[300px]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <Fade direction="left" cascade>
          <div>
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              Skills
            </p>
            <p className="py-4">
              These are the technologies I'm currently working with
            </p>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-5   text-center py-8">
            <Fade cascade damping={0.1}>
              <div className="shadow-md shadow-[#0f2648] hover:scale-110 duration-500 py-2">
                <img className="w-20 mx-auto" src={HTML} alt="html img" />
                <p className="my-4">HTML</p>
              </div>
              <div className="shadow-md shadow-[#0f2648] hover:scale-110 duration-500 py-2">
                <img className="w-20 mx-auto" src={CSS} alt="html img" />
                <p className="my-4">CSS</p>
              </div>
              <div className="shadow-md shadow-[#0f2648] hover:scale-110 duration-500 py-2">
                <img className="w-20 mx-auto" src={JavaScript} alt="html img" />
                <p className="my-4">JavaScript</p>
              </div>
              <div className="shadow-md shadow-[#0f2648] hover:scale-110 duration-500 py-2">
                <img className="w-20 mx-auto" src={ReactImg} alt="html img" />
                <p className="my-4">React</p>
              </div>
              <div className="shadow-md shadow-[#0f2648] hover:scale-110 duration-500 py-2">
                <img className="w-20 mx-auto" src={Tailwind} alt="html img" />
                <p className="my-4">Tailwind</p>
              </div>
              <div className="shadow-md shadow-[#0f2648] hover:scale-110 duration-500 py-2">
                <img className="w-20 mx-auto" src={Git} alt="html img" />
                <p className="my-4">Git</p>
              </div>
              <div className="shadow-md shadow-[#0f2648] hover:scale-110 duration-500 py-2">
                <img
                  className="w-20 mx-auto bg-[#fff]"
                  src={Sql}
                  alt="html img"
                />
                <p className="my-4">SQL</p>
              </div>
              <div className="shadow-md shadow-[#0f2648] hover:scale-110 duration-500 py-2">
                <img
                  className="w-20 mx-auto bg-[#fff]"
                  src={Node}
                  alt="html img"
                />
                <p className="my-4">Node Js</p>
              </div>
            </Fade>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Skills;
