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
import Recursosh from './routes/Recursosh';
import CorreoValidacion from './routes/CorreoValidacion'
import { Error404 } from "./routes/Error404";
import RecursosVerCandidato from "./routes/RecursosVerCandidato";
import ProtectedRoutes from './utils/ProtectedRoutes';


function App() {
  return (
   
      <div className="App">
        <Routes>
        
          <Route exact path ="/" element={<Home/>}/>
          <Route exact path ="/login" element={<Login/>}/>
          <Route exact path ="/information" element={<Information/>}/>
          <Route exact path ="/register" element={<Register/>}/>
          <Route exact path ="/registerinformation" element={<RegisterInformation/>}/>
          <Route exact path ="/validacioncorreo" element={<CorreoValidacion/>}/>
          {/*Rutas Protegidas */}
          <Route element={<ProtectedRoutes/>}>
          <Route exact path ="/inforpost" element={<InforPost/>}/>
          <Route exact path ="/homepost" element={<HomePost/>}/>
          <Route exact path ="/postulacion" element={<Postulacion/>}/>         
          <Route exact path ="/recursosh" element={<Recursosh/>}/>        
          <Route exact path ="/recursosvercandidato" element={<RecursosVerCandidato/>}/>
          </Route>
          <Route exact path="*" element={<Error404 />} />
        </Routes>    
      </div>
   
  );
}

export default App;