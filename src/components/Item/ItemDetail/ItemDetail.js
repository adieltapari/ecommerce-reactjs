import React, { useContext, useState } from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount.js'
import { Link } from 'react-router-dom'
import adl_rm_01 from './adl_rm_01.png'
import { CartsContext } from '../../../Context/CartContext/CartsContext'

const ItemDetail = ({ item }) => {

    const [carts, setCarts] = useContext(CartsContext)
    console.log(carts)
    const [changeButton, setChangeButton] = useState(false)

    const addToCart = (qty) => {
        let prod;
        qty > 1 ? prod = 'productos' : prod = 'producto';
        setChangeButton(true);
        alert(`Ingresaste ${qty} ${prod} al carrito.`);
    }

    return (
        <div className="ContainerItemDetail">
            <div className="flexbox-container">
                <div className="image ">
                    <img src={adl_rm_01} alt={item.title} width="400" />
                </div>
                <div className="card">
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
                                    <button className=" ui basic button" onClick={() => setCarts(item)}>Terminar Compra</button>
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
