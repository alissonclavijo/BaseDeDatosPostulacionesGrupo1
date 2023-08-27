import Navpost from '../components/Navpost';
import './Answer.css'
function Accepted (){
    return(
        <>
        <Navpost/>
        <div>
            <div className='answer1'>
                <h1 className='span1'>Nos complace enormemente informarte que has sido seleccionado/a  </h1>
                <h1 className='span1'>para unirte a la comunidad académica de la Universidad de las  </h1>
                <h1 className='span1'>Fuerzas Armadas ESPE como parte de nuestro concurso.</h1>
            </div>

            <div >
                <img className="gif1" src="https://i.gifer.com/XD4x.gif" alt="Imagen desde la web" />
            </div>
        

        </div>
        
        </>
    )
}

export default Accepted;