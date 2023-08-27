import Navpost from '../components/Navpost';
import './Answer.css'
function Norequest (){
    return(
        <>
        <Navpost/>
        <div>   
            <div className='answer1'>
                <h1 className='span1'>Lamento informar que el documento solicitado </h1>
                <h1 className='span1'>aún no ha sido enviado</h1>
            </div>

            <div >
                <img className="gif1" src="https://media.tenor.com/q-zZSTX6jSIAAAAC/mail-download.gif" alt="Imagen desde la web" />
            </div>
        

        </div>
        
        </>
    )
}

export default Norequest;