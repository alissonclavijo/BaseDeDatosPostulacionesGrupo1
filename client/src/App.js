import './App.css';
import Navbar from "./components/Navbar";
import {Route, Routes} from "react-router-dom";
import Home from "./routes/Home"
import Information from "./routes/Information"
import Register from "./routes/Register"
import Contact from "./routes/Contact"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="/information" element={<Information/>}/>
        <Route path ="/register" element={<Register/>}/>
        <Route path ="/contact" element={<Contact/>}/>
      </Routes>    
    </div>
  );
}

export default App;
