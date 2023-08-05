import {
  AiOutlineGithub,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-[#241468] text-white w-full h-full mt-10">
      <section className="max-w-[1220px] mx-auto py-10 h-full px-4">
        <div className="grid md:grid-cols-2 grid-cols-1 items-center justify-center">
          <div>
            <h3 className="uppercase font-bold text-3xl mb-3">
              My Social Media
            </h3>
          </div>
          <div className="grid md:grid-cols-1 grid-cols-1 items-center  gap-5">
            <div className="flex items-center  gap-2">
              <div>
                <AiOutlineGithub size={40} />
              </div>
              <div>
                <h5 className="text-gray-400">Github</h5>
                <p className="text-gray-300">https://github.com/RDHarold11</p>
              </div>
            </div>
            <div className="flex items-center  gap-2">
              <div>
                <AiFillTwitterCircle size={40} />
              </div>
              <div>
                <h5 className="text-gray-400">Twitter</h5>
                <p className="text-gray-300">
                  https://twitter.com/HaroldAP1127
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <AiFillInstagram size={40} />
              </div>
              <div>
                <h5 className="text-gray-400">Instagram</h5>
                <p className="text-gray-300">
                  https://www.instagram.com/haroldmanuelaquino/
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
