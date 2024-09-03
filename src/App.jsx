import { Dashboard } from "./Modules/Dashboard/Dashboard";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contact } from "./Modules/Contact/Contact";
import { Projects } from "./Modules/Projects/Projects";
const App = () => {
  return (
  
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Dashboard></Dashboard>}></Route>
      {/* <Route path="/about" element={ }></Route> */}
      <Route path="/contact" element={ <Contact/>}></Route>
      <Route path="/projects" element={ <Projects></Projects>}></Route>
      </Routes>
      </BrowserRouter>
  )
}
export default App;