import "./App.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from "react-toastify"

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <ToastContainer/>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Work/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
