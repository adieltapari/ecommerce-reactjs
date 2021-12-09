import React, { useContext } from 'react'
import { CartsContext } from '../../Context/CartContext/CartsContext'
import './Cart.css'

const Cart = () => {
    const { items, addItem } = useContext(CartsContext);
    return (
        <div>
            {
                items.map((item) => (
                    <div key={item.id}>
                        <h1>{item.title}</h1>
                    </div>
                ))
            }
        </div>

    )
}

export default Cart
