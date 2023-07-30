import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./routes/Home"
import Information from "./routes/Information"
import Register from "./routes/Register"
import InforPost from "./routes/InforPost"
import RegisterInformation from './routes/RegisterInformation';
import Login from './routes/Login';
import HomePost from './routes/HomePost';
import Postulacion from './routes/Postulacion';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="/information" element={<Information/>}/>
        <Route path ="/register" element={<Register/>}/>
        <Route path ="/inforpost" element={<InforPost/>}/>
        <Route path ="/registerinformation" element={<RegisterInformation/>}/>
        <Route path ="/login" element={<Login/>}/>
        <Route path ="/homepost" element={<HomePost/>}/>
        <Route path ="/postulacion" element={<Postulacion/>}/>

      </Routes>    
    </div>
  );
}

export default App;