import React from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de importar Link
import NavpostAdmin from '../components/NavpostAdmin';
import './AnswerRRHH.css';

function AnswerRRHH() {
    return (
        <>
            <NavpostAdmin />
            <div>
                <div className='answer2'>
                    <h1 className='span2'>Tu selección cuidadosa fortalece nuestra Universidad</h1>
                </div>

                <div>
                    <img className="gif2" src="https://administracion-360.com/assets/images/gif_services_003.gif" alt="Imagen desde la web" />
                </div>

                <div className='botonPostulantes'>
                    <button>
                        <Link to={"/recursosh"} className='link'>Postulantes</Link>
                    </button>
                </div>
            </div>
        </>
    );
}

export default AnswerRRHH;
