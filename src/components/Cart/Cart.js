import React, { useContext } from 'react'
import { useCartContext } from '../../Context/CartContext/CartContext'
import './Cart.css'

const Cart = () => {
    const { items, removeItem, clearItems, totalPrice } = useContext(useCartContext);
    console.log(totalPrice);
    return (
        <>
            <div >
                {items.length === 0 && <h4 style={{ margin: 40 }}> carrito vacio</h4>}
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
            {items.length !== 0 &&
                <div className='EmptyCart'>
                    <div className="ui button " style={{ margin: "10" }} onClick={() => clearItems()}>
                        <i className="cart icon"></i>
                        vaciar carrito
                    </div>
                    <p>{totalPrice}</p>
                </div>
            }
        </>

    )
}

export default Cart
