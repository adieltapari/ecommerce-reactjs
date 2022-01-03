import React, { useContext, useState } from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount.js'
import { Button } from "semantic-ui-react";
import { CartContext } from '../../../Context/CartContext/CartContext'
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const ItemDetail = ({ item }) => {
    const { addToCart } = useContext(CartContext)
    const [changeButton, setChangeButton] = useState(false);

    const onAdd = (quantity) => {
        addToCart(item, quantity)
        setChangeButton(true)
        Swal.fire({
            title: `Se agregó el producto al carrito`,
            icon: 'success'
        })
    };

    return (
        <div className='containerProductPage'>

            <div className='left-column'>
                <img src={item.img} alt='imagen producto' />
            </div>
            <div className='right-column'>
                <div className='product-description'>
                    <span>{item.category}</span>
                    <h1>{item.model}</h1>
                    <p>{item.description}</p>
                    <div className='product-price'>
                        <span >${item.price}</span>
                    </div>
                    {item.stock === 0 ? (
                        <h5 style={{ color: "red" }}>Sin stock</h5>
                    ) : (
                        <h5 >Unidades Disponibles: {item.stock}</h5>
                    )}
                </div>
                <div >
                    {!changeButton && (
                        item.stock !== 0 && (
                            <ItemCount item={item} stock={item.stock} initial={0} onAdd={onAdd} />
                        ))}
                    {changeButton && (

                        <div>
                            <Link to="/cart">
                                <Button className="ui bottom blue">
                                    Finalizar Compra
                                </Button>
                            </Link>
                            <Link to="/category/all">
                                <Button className="ui bottom green">
                                    Seguir Comprando
                                </Button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
