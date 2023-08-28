import Navpost from '../components/Navpost';
import './Answer.css'
function Rejected (){
    return(
        <>
        <Navpost/>
        <div>   
            <div className='answer1'>
                <h1 className='span1'>Después de un proceso de evaluación minucioso y exhaustivo,</h1>
                <h1 className='span1'>lamentamos informarte que no podemos ofrecerte un lugar en  </h1>
                <h1 className='span1'>la Universidad de las Fuerzas Armadas ESPE en esta ocasión.</h1>
            </div>

            <div >
                <img className="gif1" src="https://media.istockphoto.com/id/1223018538/es/vector/icono-de-sobre-eliminar-blanco-aislado-con-sombra-larga-eliminar-o-error-de-letra-cruz-a.jpg?s=612x612&w=0&k=20&c=U9254jYXFvj96ZJ3jSVLOMnltKY1lbRCQivywD0n4AA=" alt="Imagen desde la web" />
            </div>
        

        </div>
        
        </>
    )
}

export default Rejected;