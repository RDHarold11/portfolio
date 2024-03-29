import { Fade } from "react-awesome-reveal";

const Contact = () => {
  return (
    <Fade cascade direction="left">
      <div
        name="contact"
        className="w-full pt-[400px] bg-[#0a192f] flex justify-center items-center p-4"
      >
        <form
          method="POST"
          action="https://getform.io/f/cc73dff0-782d-4bac-bf55-39c969402a77"
          className="flex flex-col max-w-[600px] w-full "
        >
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
              Contact Me
            </p>
            <p className="text-gray-300 py-4"></p>
          </div>
          <input
            className="bg-[#ccd6f6] p-2"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="my-4 p-2 bg-[#ccd6f6]"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            name="message"
            className="bg-[#ccd6f6] p-2"
            placeholder="Message"
          ></textarea>
          <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
            Send the message
          </button>
        </form>
      </div>
    </Fade>
  );
};

export default Contact;
