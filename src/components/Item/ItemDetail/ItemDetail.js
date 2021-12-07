import React, { useState } from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount.js'
import { Link } from 'react-router-dom'


const ItemDetail = ({ item }) => {

    const [changeButton, setChangeButton] = useState(false)

    const addToCart = (qty) => {
        let prod;
        qty > 1 ? prod = 'productos' : prod = 'producto';
        setChangeButton(true);
        alert(`Ingresaste ${qty} ${prod} al carrito.`);
    }

    return (
        <div className="ContainerItemDetail">
            <div className="ui cards ">
                <div className="card">
                    <div className="image">
                        <img src={item.thumbnail} alt={item.title} width="300" />
                    </div>
                    <h2>${item.price}</h2>
                    <h3>{item.title}</h3>
                    <div>
                        {
                            !changeButton &&
                            <ItemCount stock={20} initial={0} onAdd={addToCart} changeButton={changeButton} />
                        }
                        {
                            changeButton &&
                            <div className="extra content">
                                <div className="ui two button">
                                    <Link to="/">
                                        <div className=" ui basic button" >Continue comprando</div>
                                    </Link>
                                    <Link to="/cart">
                                        <div className=" ui basic button">Terminar Comprar</div>
                                    </Link>
                                </div>
                            </div>

                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ItemDetail
