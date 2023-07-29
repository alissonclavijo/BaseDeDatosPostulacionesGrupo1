import './App.css';
import Navbar from "./components/Navbar";
import {Route, Routes} from "react-router-dom";
import Home from "./routes/Home"
import Information from "./routes/Information"
import Register from "./routes/Register"
import Contact from "./routes/Contact"
import RegisterInformation from './routes/RegisterInformation';
import Login from './routes/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="/information" element={<Information/>}/>
        <Route path ="/register" element={<Register/>}/>
        <Route path ="/contact" element={<Contact/>}/>
        <Route path ="/registerinformation" element={<RegisterInformation/>}/>
        <Route path ="/login" element={<Login/>}/>
      </Routes>    
    </div>
  );
}

export default App;
