import Navpost from '../components/Navpost';
import './Answer.css'
function Answer (){
    return(
        <>
        <Navpost/>
        <div>
            <div className='answer1'>
                <h1 className='span1'>Estamos en proceso de revisar su solicitud con nuestro equipo de </h1>
                <h1 className='span1'>Recursos Humanos. Le agradecemos su paciencia mientras espera </h1>
                <h1 className='span1'>una respuesta.</h1>
            </div>

            <div >
                <img className="gif1" src="https://cdn.dribbble.com/users/782531/screenshots/6159013/media/b85afc52ac8b8fbfd2188e23ad00c0dc.gif" alt="Imagen desde la web" />
            </div>
        

        </div>
        
        </>
    )
}

export default Answer;