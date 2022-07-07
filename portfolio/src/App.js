import Nav from "./components/Nav";
import Banner from './components/Banner'
import './globals.css'
import Skills from "./components/Skills";
import Projects from './components/Projects'
import Contact from "./components/Contact";

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <>
    <Nav/>
    <Banner/>
    <Skills/>
    <Projects/>
    <Contact/>

    <ToastContainer/>
    </>
  );
}

export default App;
