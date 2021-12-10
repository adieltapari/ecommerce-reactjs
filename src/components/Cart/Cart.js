import React, { useContext } from 'react'
import { CartsContext } from '../../Context/CartContext/CartsContext'
import './Cart.css'

const Cart = () => {
    const { items, removeItem, clearItems } = useContext(CartsContext);
    return (
        <div>
            {
                items.map((item) => (
                    <div key={item.id}>
                        <h3>{item.qty} -{item.name}</h3>
                        <h6 style={{ color: "red" }} onClick={() => removeItem(item.id)}>Borrar</h6>
                    </div>
                ))
            }
            <h6 style={{ color: "red" }} onClick={() => clearItems()}>vaciar carrito</h6>
        </div>

    )
}

export default Cart
