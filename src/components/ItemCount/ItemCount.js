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
                    <div className='CounterSection'>
                        <p>Cantidad: {counter}</p>
                        <div className='btn-section'>
                            <button onClick={handlerCounterUp}>Incrementar</button>
                            <button onClick={handlerCounterDown}>Decrementar</button>
                        </div>
                    </div>
                </Card.Content>
            </Card>
	    </div>
    );

}
    

export default ItemCount;