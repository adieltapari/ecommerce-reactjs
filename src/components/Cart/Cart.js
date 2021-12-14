import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext/CartContext'
import './Cart.css'

const Cart = () => {
    const { items, removeItem, clearItems } = useContext(CartContext);
    return (
        <>
            <div >
                {
                    items.map((item) => (
                        <div className="ContainerCart" key={item.id}>
                            <div className='ContainerCartItem'>
                                <div className='ContainerName'>
                                    <h3 >{item.qty} -{item.name}</h3>
                                </div>
                                <div className='ContainerDelete'>
                                    <div className="ui button red" style={{ margin: "10" }} onClick={() => removeItem(item.id)}>
                                        <i className="delete icon"></i>
                                        Borrar
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div >
            <div className='EmptyCart'>
                <div className="ui button " style={{ margin: "10" }} onClick={() => clearItems()}>
                    <i className="cart icon"></i>
                    vaciar carrito
                </div>
            </div>
        </>

    )
}

export default Cart
