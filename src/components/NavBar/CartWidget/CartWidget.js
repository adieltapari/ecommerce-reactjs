import "./CartWidget.css";
import { Icon } from 'semantic-ui-react';
import React, { useContext } from 'react'
import { CartContext } from "../../../Context/CartContext/CartContext";

const CartWidget = () => {
    const { items, totalPrice } = useContext(CartContext)
    let itemsInCart = 0;
    const formatPeso = new Intl.NumberFormat("es-CL", {
        style: "currency",
        currency: "CLP",
        minimumFractionDigits: 0,
    });

    items.map((item) => {
        return itemsInCart = itemsInCart + item.qty;
    })
    return (
        <div className='containerCartWidget'>
            <ul>
                <li>
                    <Icon name='cart arrow down' size='large' />
                </li>
                <li>
                    <p> {itemsInCart} - {formatPeso.format(totalPrice())}</p>
                </li>
            </ul>
        </div>
    )
}

export default CartWidget
