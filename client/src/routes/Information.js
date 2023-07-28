import Navbar from "../components/Navbar"
import React from "react";
import "./Information.css"
import BGVideo from "../video/pexels-yan-krukov-8198503 (1080p).mp4"
const imagen = require.context("../img/");

function Information (){
    return(
        <>
        <Navbar/>  
        <div className="video">
            <video src={BGVideo} autoPlay muted loop class="video-bg"/>
            <div className="bg-overlay">
            <div className="rigthcontainer">
                <div className="rigthDiv">
                    <h1>Conoce Más Acerca Del Concurso De Méritos De Oposición</h1>
                    <div className="pdfs">
                    <a href="https://drive.google.com/file/d/1oWn9U1A-9_iYYCOPv1OD3WeemYOODA7w/view?usp=sharing" target="_blank" class="download-button">
                        <img src={(imagen("./pdf.png"))} alt="Pdf de Nuestras Sedes" />
                        <span>Nuestras Sedes</span>
                    </a>
                    </div>
                    <div className="pdfs">
                    <a href="https://drive.google.com/file/d/1oWn9U1A-9_iYYCOPv1OD3WeemYOODA7w/view?usp=sharing" target="_blank" class="download-button">
                        <img src={(imagen("./pdf.png"))} alt="Pdf de Nuestras Sedes" />
                        <span>Bases Del Concurso 2023</span>
                    </a>
                    </div>
                    <div className="pdfs">
                    <a href="https://drive.google.com/file/d/1oWn9U1A-9_iYYCOPv1OD3WeemYOODA7w/view?usp=sharing" target="_blank" class="download-button">
                        <img src={(imagen("./pdf.png"))} alt="Pdf de Nuestras Sedes" />
                        <span>Cronograma</span>
                    </a>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default Information;