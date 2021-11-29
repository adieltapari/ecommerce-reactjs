import React, { useState } from 'react';


function ItemCount ({stock, initial,onAdd}) {
    // SETEAMOS STATE COUNTER
	const [qty, setQty] = useState(initial);
	// METODOS PARA ACTUALIZAR EL STATE

	const sumQty = () => {
        if(qty < stock){
            setQty(qty + 1);
        }
	};

	const restQty = () => {
        if(qty>0){
            setQty(qty - 1);
        }
	};

    return(
        <>
            <div className="ui cards">
                <div className="card">
                    <div className="image">
                        <img src="https://semantic-ui.com/images/avatar2/large/elyse.png" alt="imagen producto"/>
                    </div>
                    <div className="content">
                        <div className="header">Producto</div>
                        <div className="meta">Categoría</div>
                        <div className="descripcion">Descripción del Producto</div>
                    </div>
                    <div className="extra content">
                        <div className="ui three button">
                            <div className="ui basic red button" onClick={restQty}>-</div>   
                            <div className="ui basic button">{qty}</div>
                            <div className="ui basic green button" onClick={sumQty}>+</div>
                        </div>
                    </div>
                    {
                        qty > 0 ?
                        <div className="ui button attached button" onClick={()=> onAdd(qty)}>
                            <i className="cart icon"></i>
                            Añadir al carrito
                        </div>
                        :
                        <div className="ui button attached button disabled">
                            <i className="cart icon"></i>
                            Añadir al carrito
                        </div>
                    }
                </div>
            </div>            
        </>
    );
}
    

export default ItemCount;