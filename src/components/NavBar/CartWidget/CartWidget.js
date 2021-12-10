import "./CartWidget.css";
import { Icon } from 'semantic-ui-react';

import React, { useContext } from 'react'
import { CartsContext } from "../../../Context/CartContext/CartsContext";

const CartWidget = () => {
    const { items } = useContext(CartsContext)
    let itemsInCart = 0;

    items.map((item) => {
        itemsInCart = itemsInCart + item.qty;
    })
    return (
        <div className='containerCartWidget'>
            <ul>
                <li>
                    <Icon name='cart arrow down' size='large' />
                </li>
                <li>
                    <p> {itemsInCart} - $0,00</p>
                </li>
            </ul>
        </div>
    )
}

export default CartWidget
