import React from "react";
import { Fade } from "react-awesome-reveal";

import skills from "../data/skills";
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
            {skills.map((skill, index) => {
              const { id, title, description, img } = skill;
              return (
                <article
                  className="flex flex-col gap-3 rounded items-center justify-center hover:bg-[#526D82] hover:scale-110 duration-400 hover:text-gray-100 ease-in transition-all"
                  key={id}
                >
                  <header className="border-b-2">
                    <h2 className="font-bold mb-1">{id}</h2>
                  </header>
                  <main className="flex flex-col gap-1 items-center justify-center">
                    <div>
                      <img
                        className="max-w-[45px] hover:animate-spin"
                        src={img}
                        alt=""
                      />
                    </div>
                    <h4 className="uppercase font-bold">{title}</h4>
                    <p className="text-gray-400">{description}</p>
                  </main>
                </article>
              );
            })}
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Skills;
