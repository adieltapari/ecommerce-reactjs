import React, { useState } from 'react';
import { Card } from 'semantic-ui-react';

import './ItemCount.css';


function ItemCount ({stock}) {
    // SETEAMOS STATE COUNTER
	const [counter, setCounter] = useState(0);
	// METODOS PARA ACTUALIZAR EL STATE
	const handlerCounterUp = () => {
        if(counter < stock){
            setCounter(counter + 1);
        }
	};

	const handlerCounterDown = () => {
        if(counter>0){
            setCounter(counter - 1);
        }
	};

    return(
        <div className='ItemCountContainer'>
            <Card>
                <Card.Content>
                    <div className='containerItemCount'>
                        <ul>
                            <li>
                                <button onClick={handlerCounterDown}> - </button>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <p>{counter}</p>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <button onClick={handlerCounterUp}>+</button>
                            </li>
                        </ul>
                    </div>
                    <div className='containerAddCart'>
                        <ul>
                            <li>
                                <button className="buttonAdd"> Agregar al carrito</button>
                            </li>
                        </ul>
                    </div>
                </Card.Content>
            </Card>
        </div>
    );
}
    

export default ItemCount;