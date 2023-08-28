import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navpost from '../components/Navpost';
import './HomePost.css'
import Vector1 from '../img/Vector1.png';
import Docente from '../img/Docente.png';
import Pdf from '../img/pdf.png'
import Word from '../img/word.png'
import Excel from '../img/excel.png'
import { Link } from 'react-router-dom';


const HomePost = () => {
  const candidatoNombre = localStorage.getItem("cand_nombre1");
  
  return (
    <>
      <Navpost/>
      <div className='intro'>
        <div className='i-left'>
          <div className='i-name'>
            <span className='welcome'> Bienvenido {candidatoNombre}</span>
            <span>Al Concurso de Mérito y Oposición! Esperamos que esta experiencia académica 
              sea enriquecedora para todos. ¡Éxito en su postulación!</span>
          </div>

          <br/> 

          <div className='i-documents'>
            <h1>Formato De Documentos</h1>
            <span>Hoja de vida formato ESPE</span>
            <img src={Pdf} alt=""/>
          </div>

          <div className='i-documents'>
            <span>Certificados Experiencia Profesional Docente</span>
            <img src={Pdf} alt=""/>
          </div>

          <div className='i-documents'>
            <span>Certificados Experiencia Profesional</span>
            <img src={Pdf} alt=""/>
          </div>

          <div className='i-documents'>
            <button ><Link to={"/InforPost"} className='link'>Postulacion</Link></button>
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