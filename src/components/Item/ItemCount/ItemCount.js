import React, { useState } from 'react';
import './ItemCount.css'

function ItemCount({ stock, initial, addItem, item }) {
    // SETEAMOS STATE COUNTER
    const [qty, setQty] = useState(initial);
    // METODOS PARA ACTUALIZAR EL STATE

    const sumQty = () => {
        if (qty < stock) {
            setQty(qty + 1);
        }
    };

    const restQty = () => {
        if (qty > 0) {
            setQty(qty - 1);
        }
    };

    return (
        <>
            <div className="ContainerItemCount">
                <div className="ui cards">
                    <div className="card">
                        <div className="extra content">
                            <div className="ui three button">
                                <div className="ui basic red button" onClick={restQty}>-</div>
                                <div className="ui basic button">{qty}</div>
                                <div className="ui basic green button" onClick={sumQty}>+</div>
                            </div>
                        </div>
                        {
                            qty > 0 ?
                                <div className="extra content">
                                    <div className="ui button attached button" onClick={() => addItem(item, qty)}>
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
                        <div className="ui button green attached button">
                            Finalizar Compra
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}


export default ItemCount;