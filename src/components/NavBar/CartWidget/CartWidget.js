import "./CartWidget.css";
import { Icon } from 'semantic-ui-react';
import React, { useContext } from 'react'
import { useCartContext } from "../../../Context/CartContext/CartContext";

const CartWidget = () => {
    const { items } = useContext(useCartContext)
    let itemsInCart = 0;

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
                    <p> {itemsInCart} - $0,00</p>
                </li>
            </ul>
        </div>
    )
}

export default CartWidget
