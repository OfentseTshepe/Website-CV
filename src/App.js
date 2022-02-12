import Home from "./components/Home";
import PersonalInfo from "./components/PersonalInfo";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience  from "./components/Experience"
import Education from "./components/Education";
import Navbar from "./components/Navbar";
import {BrowserRouter} from "react-router-dom"





function App() {
  return (
    
      <BrowserRouter>
       <Navbar/>

      <Home/>
      <PersonalInfo/>
      <Projects/>
      <Experience/>
      <Education/>
      <Skills/>
      
      </BrowserRouter>
     
    
  );
}

export default App;
