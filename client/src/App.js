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
import AuthProvider from "./routes/AuthContext";
import Recursosh from './routes/Recursosh';
import CorreoValidacion from './routes/CorreoValidacion'
import { Error404 } from "./routes/Error404";
import Terminos from "./routes/terms";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
        
          <Route exact path ="/" element={<Home/>}/>
          <Route exact path ="/information" element={<Information/>}/>
          <Route exact path ="/register" element={<Register/>}/>
          <Route exact path ="/inforpost" element={<InforPost/>}/>
          <Route exact path ="/registerinformation" element={<RegisterInformation/>}/>
          <Route exact path ="/login" element={<Login/>}/>
          <Route exact path ="/homepost" element={<HomePost/>}/>
          <Route exact path ="/postulacion" element={<Postulacion/>}/>         
          <Route exact path ="/recursosh" element={<Recursosh/>}/>
          <Route exact path ="/validacioncorreo" element={<CorreoValidacion/>}/>
          <Route exact path="*" element={<Error404 />} />
          <Route exact path ="/terminosycondiciones" element={<Terminos/>}/>

        </Routes>    
      </div>
    </AuthProvider>  
  );
}

export default App;