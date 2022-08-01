import { useContext } from "react";
import { About } from "./Components/About/About.js";
import Contact from "./Components/Contact/Contact.js";
import Intro from "./Components/Intro/Intro.js";
import Productlist from "./Components/Productlist/Productlist.js";
import Toggle from "./Components/Toggle/Toggle.js";
import { ThemeContext } from "./Context.js";

const App = () => {
  const theme=useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
  <div style={{backgroundColor: darkMode ? "#222" : "white",
  color: darkMode && "white",}}>
    <Toggle/>
    <Intro/>
    <About/>
    <Productlist />
    <Contact/>
  </div>
  );
};

export default App;