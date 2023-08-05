import { Fade } from "react-awesome-reveal";
import { HiArrowNarrowRight } from "react-icons/hi";
import {
  AiOutlineGithub,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";
import { toast} from "react-toastify"
import pdf from "/public/CV.pdf";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { Link } from "react-scroll";
import TypeWritter from "typewriter-effect";

const Home = () => {
  return (
    <main
      name="home"
      className="w-full pt-[70px] md:pt-5 h-screen bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center h-full px-4">
        <Fade direction="left">
          <p className="text-pink-600 font-bold text-xl">Hi, my name is</p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
            Harold Aquino
          </h1>
          <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
            <TypeWritter
              onInit={(type) => {
                type
                  .typeString("Hello!")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("I'm a Software Developer Student")
                  .start();
              }}
            ></TypeWritter>
          </h2>
          <p className="text-[#8892b0] py-4 max-w-[700px] hover:text-white duration-100 transition-all ease-in-out">
            Focused on building frontend apps and then, full-stack web
            applications in a near future.
          </p>
          <div className="">
            <div className="flex gap-3">
              <button className="text-white border-2 px-6 py-3 my-2 flex gap-2 hover:bg-pink-600 hover:border-pink-600">
                <Link to="work" smooth={true} duration={500}>
                  View Work
                </Link>
                <HiArrowNarrowRight size={25} />{" "}
              </button>
              <a
                href={pdf}
                className=" text-white border-2 px-6 py-3 my-2 flex gap-2 hover:bg-pink-600 hover:border-pink-600"
                target="_blank"
                rel="noopener noreferrer"
                download="Harold Aquino CV.pdf"
                onClick={() => toast("CV Downloaded")}
              >
                Download CV
                <BsFileEarmarkPdf size={25} />
              </a>
            </div>
            {/* Links */}
            <div className="flex items-center gap-3 mt-4">
              <div className="bg-[#db2777] px-3 py-2 rounded">
                <a href="https://github.com/RDHarold11">
                  <AiOutlineGithub
                    size={25}
                    color="white"
                    className="hover:animate-spin"
                  />
                </a>
              </div>
              <div className="bg-[#db2777] px-3 py-2 rounded">
                <a href="https://twitter.com/HaroldAP1127">
                  <AiFillTwitterCircle
                    size={25}
                    color="white"
                    className="hover:animate-spin"
                  />
                </a>
              </div>
              <div className="bg-[#db2777] px-3 py-2 rounded">
                <a href="https://www.instagram.com/haroldmanuelaquino/">
                  <AiFillInstagram
                    size={25}
                    color="white"
                    className="hover:animate-spin"
                  />
                </a>
              </div>
            </div>
          </div>
        </Fade>
      </div>
      {/* Intento de imagen */}
    </main>
  );
};

export default Home;
