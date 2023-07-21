import { Fade } from "react-awesome-reveal";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import TypeWritter from "typewriter-effect";

const Home = () => {
  return (
    <main name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center h-full px-4">
        <Fade direction="left">
          <p className="text-pink-600 font-bold text-xl">Hi, my name is</p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
            Harold Aquino
          </h1>
          <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
            <TypeWritter
              options={{
                strings: ["I'm a Software Developer Student"],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <p className="text-[#8892b0] py-4 max-w-[700px] hover:text-white duration-100 transition-all ease-in-out">
            Focused on building frontend apps and then, full-stack web
            applications in a near future.
          </p>
          <div>
            <button className="text-white border-2 px-6 py-3 my-2 flex gap-2 hover:bg-pink-600 hover:border-pink-600">
              <Link to="work" smooth={true} duration={500}>
                View Work
              </Link>
              <HiArrowNarrowRight size={25}/>{" "}
            </button>
          </div>
        </Fade>
      </div>
    </main>
  );
};

export default Home;
