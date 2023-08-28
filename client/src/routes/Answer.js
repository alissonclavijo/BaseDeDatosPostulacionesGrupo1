import React, { useEffect, useState } from 'react';
import Navpost from '../components/Navpost';
import { Solicitud } from '../services/api';
import Accepted from './Accepted';
import Rejected from './Rejected';
import './Answer.css';

function Answer() {
    const cand_id = localStorage.getItem("cand_id");
    const [solicitud, setSolicitud] = useState({});
    const [solicitudEncontrada, setSolicitudEncontrada] = useState(true);

   
    useEffect(() => {
        async function fetchData() {
            try {
                const solicitudes = await Solicitud();
                const solicitudParaCandidato = solicitudes.find(s => s.cand_id === parseInt(cand_id));
                if (solicitudParaCandidato) {
                    setSolicitud(solicitudParaCandidato);
                } else {
                    setSolicitudEncontrada(false);
                }
            } catch (error) {
                console.error("Error al obtener los datos:", error);
            }
        }
        fetchData();
    }, [cand_id]);

    return (
        <>
            <Navpost />
            <div>
                <div className='answer1'>
                    <h1 className='span1'>Estamos en proceso de revisar su solicitud con nuestro equipo de </h1>
                    <h1 className='span1'>Recursos Humanos. Le agradecemos su paciencia mientras espera </h1>
                    <h1 className='span1'>una respuesta.</h1>
                </div>
                <div>
                    <img className="gif1" src="https://cdn.dribbble.com/users/782531/screenshots/6159013/media/b85afc52ac8b8fbfd2188e23ad00c0dc.gif" alt="Imagen desde la web" />
                </div>
            </div>
            
            <div>
                {solicitudEncontrada && solicitud.sol_aprobacion === true ?   <Accepted /> : <Rejected />}
            </div>
        </>
    )
}

export default Answer;
