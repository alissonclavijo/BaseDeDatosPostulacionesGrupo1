import './App.css';
//import Navbar from "./components/Navbar";
import {Route, Routes} from "react-router-dom";
import Home from "./routes/Home"
import Information from "./routes/Information"
import Register from "./routes/Register"
import Contact from "./routes/Contact"
import RegisterInformation from './routes/RegisterInformation';
import Login from './routes/Login';
import Postulacion from './routes/Postulacion';
import HomePost from './routes/HomePost';


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
        <Route path ="/postulacion" element={<Postulacion/>}/>
        <Route path ="/homepost" element={<HomePost/>}/>
      </Routes>    
    </div>
  );
}

export default App;
