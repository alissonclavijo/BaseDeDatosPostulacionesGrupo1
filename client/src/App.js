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
import Loginrh from './routes/Loginrh';
import Recursosh from './routes/Recursosh';



function App() {
  return (
    <AuthProvider>
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
          <Route path ="/loginrh" element={<Loginrh/>}/>
          <Route path ="/recursosh" element={<Recursosh/>}/>

        </Routes>    
      </div>
    </AuthProvider>  
  );
}

export default App;