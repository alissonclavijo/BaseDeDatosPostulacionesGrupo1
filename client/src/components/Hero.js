import "./HeroStyles.css";
const imagen = require.context("../img/");

function Hero (props){
    return(
        <>
            <div className={props.cName}>
                <img className="logo" src={props.heroImg} alt="Universidad" />
                <div className="hero-text">
                    <div className="container">
                        <div className="centredDiv">
                            <h1>{props.title}</h1>
                            <p>{props.text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;