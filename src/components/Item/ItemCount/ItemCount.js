import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './ItemCount.css'

function ItemCount({ stock, initial, onAdd, item }) {
    // SETEAMOS STATE COUNTER
    const [quantity, setQuantity] = useState(initial);
    // METODOS PARA ACTUALIZAR EL STATE

    const sumQty = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    const restQty = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <>
            <div className="ContainerItemCount">
                <div className="ui cards">
                    <div className="card">
                        <div className="extra content">
                            <div className=" three button">
                                <div className="ui basic red button" onClick={restQty}>-</div>
                                <div className="ui basic button">{quantity}</div>
                                <div className="ui basic green button" onClick={sumQty}>+</div>
                            </div>
                        </div>
                        {
                            quantity > 0 ?
                                <div className="extra content">
                                    <div className="ui button attached button" onClick={() => onAdd(quantity)}>
                                        <i className="cart icon"></i>
                                        Añadir al carrito
                                    </div>
                                </div>
                                :
                                <div className="extra content">
                                    <div className="ui button attached button disabled">
                                        <i className="cart icon pad1"></i>
                                        Añadir al carrito
                                    </div>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}


export default ItemCount;