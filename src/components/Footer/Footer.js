import React from 'react'
import adlrobotics from './img/ADL_logo.png'
import './Footer.css'

const Footer = () => {
    return (
        <div class="ui ContainerFooter">
            <div class="ui container">
                <div class="ui inverted stackable divided grid">
                    <div class="row">
                        <div class="three wide column">
                            <img src={adlrobotics} alt="imagen producto" width="60px" />
                            <div role="list" class="ui inverted link list">

                            </div>
                        </div>
                        <div class="three wide column">
                            <h4 class="ui inverted header">Contacto</h4>
                            <div>
                                <h5>11 - 23432223</h5>
                            </div>
                        </div>
                        <div class="seven wide column">
                            <h4 class="ui inverted header">Redes Sociales</h4>
                            <p >Canal de Youtube</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer


