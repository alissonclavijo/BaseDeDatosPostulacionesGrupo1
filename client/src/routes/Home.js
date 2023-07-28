import Hero from "../components/Hero"
import Navbar from "../components/Navbar"

function Home (){
    return(
        <>
        <Navbar/>  
        <Hero 
        cName = "hero"
        heroImg="https://uar.espe.edu.ec/wp-content/uploads/2020/09/Espe-Sangolgui.jpg"
        title="Trabaja con Nosotros"
        text="Forma Parte Del Cuerpo Docente De Nuestra Prestigiosa Universidad"
        url="/"
        btnClass="show"
        />
        </>
    )
}

export default Home;