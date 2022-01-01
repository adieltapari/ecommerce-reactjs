import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import Featured from '../../components/Featured/Featured'

const Home = () => {
    return (
        <>
            <header>
                <section>
                    <h1>Aprende a programar</h1>
                    <div class="conte">
                        <p>Multiples configuraciones
                        </p>
                        <Link to="/item/URysHOmLTyqi1AYN6wLP">
                            <div className=" cart-btn" >COMPRAR</div>
                        </Link>
                    </div>
                </section>
            </header>
            <div>
                <h3 style={{ margin: 20 }}>DESTACADOS</h3>
                <Featured categoryId="kits" />
            </div>
        </>
    )
}

export default Home
