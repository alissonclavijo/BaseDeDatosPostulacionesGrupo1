import React from 'react'
import Navpost from '../components/Navpost';
import './HomePost.css'
import Vector1 from '../img/Vector1.png';
import Docente from '../img/Docente.png';
import Pdf from '../img/pdf.png'
import Word from '../img/word.png'
import Excel from '../img/excel.png'


function HomePost() {
  return (
    <>
      <Navpost/>
      <div className='intro'>
        <div className='i-left'>
          <div className='i-name'>
            <span className='welcome'> Bienvenido! </span>
            <span>Al Concurso de Mérito y Oposición! Esperamos que esta experiencia académica 
              sea enriquecedora para todos. ¡Éxito en su postulación!</span>
          </div>

          <br/> 

          <div className='i-documents'>
            <h1>Formato De Documentos</h1>
            <span>Hoja de vida formato ESPE</span>
            <img src={Excel} alt=""/>
          </div>

          <div className='i-documents'>
            <span>Certificados Experiencia Profesional Docente</span>
            <img src={Pdf} alt=""/>
            <img src={Word} alt=""/>
          </div>

          <div className='i-documents'>
            <span>Certificados Experiencia Profesional</span>
            <img src={Pdf} alt=""/>
            <img src={Word} alt=""/>
          </div>


        </div>

        <div className='i-right'>
          <div className='vector'><img src={Vector1} alt=""/></div>
          <div className='docente'><img src={Docente} alt=""/></div>
          
          
        </div>
      </div>
    </>
  )
}

export default HomePost