import React, { useContext, useState } from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount.js'
import { Button } from "semantic-ui-react";
import { useCartContext } from '../../../Context/CartContext/CartContext'
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {
    const { addToCart } = useContext(useCartContext)
    const [changeButton, setChangeButton] = useState(false);

    const onAdd = (quantity) => {
        addToCart(item, quantity)
        setChangeButton(true)
    };


    return (
        <div className="ContainerItemDetail" key={item.id}>
            <div className="flexbox-container">
                <div className="image ">
                    <img src={item.thumbnail} alt="imagen" width={150} />
                </div>
                <div className="cards">
                    <h2>${item.price}</h2>
                    <h3>{item.title}</h3>
                    <div>
                        {!changeButton && (
                            <ItemCount item={item} stock={20} initial={0} onAdd={onAdd} />
                        )
                        }
                        {changeButton && (
                            <Link to="/cart">
                                <Button className="ui bottom blue">
                                    Finalizar Compra
                                </Button>
                            </Link>
                        )}
                        {changeButton && (
                            <Link to="/">
                                <Button className="ui bottom blue">
                                    Seguir Comprando
                                </Button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
