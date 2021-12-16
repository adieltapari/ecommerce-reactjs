import React from 'react'
import adlrobotics from './img/ADL-Web_editable-B_16.png'
import adl_rm_01 from './img/adl_rm_01.png'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <img src={adlrobotics} alt="imagen producto" />
            <div className="containerTextHome">
                <h1>Somos una Pyme especilizada en la robótica educativa.</h1>
                <p>Brindamos talleres y productos para fomentar la innovación,
                    con unas de las plataformas libres más difundida y
                    utilizada en la actualidad (Arduino),
                    a través de procesos  colaborativos
                    que generen soluciones creativas para la sociedad.</p>
            </div>
            <div class="ui inverted stackable divided grid">
                <div class="row ">
                    <div class="three wide column">

                    </div>
                    <div class="three wide column">
                        <div>
                            <img src={adl_rm_01} alt="imagen producto" width="300px" />
                        </div>
                    </div>
                    <div class="seven wide column">
                        <h4 class="ui inverted header">Redes Sociales</h4>
                        <h1 className="titleHome">Aprendé  a programar.</h1>
                        <h1 >Multiples Configuraciones.</h1>
                        <Link to="/category/all">
                            <div className=" ui basic button" >COMPRAR</div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
