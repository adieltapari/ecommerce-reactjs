import React from 'react'
import adlrobotics from './img/ADL-Web_editable-B_16.png'
import adl_rm_01 from './img/adl_rm_01.png'

const Home = () => {
    return (
        <>
            <img src={adlrobotics} alt="imagen producto" />
            <h1>Productos</h1>
            <div class="ui inverted stackable divided grid">

                <div class="row">
                    <div class="three wide column">

                    </div>
                    <div class="three wide column">
                        <h4 class="ui inverted header">Contacto</h4>
                        <div>
                            <img src={adl_rm_01} alt="imagen producto" width="300px" />
                        </div>
                    </div>
                    <div class="seven wide column">
                        <h4 class="ui inverted header">Redes Sociales</h4>
                        <p >Canal de Youtube</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home
