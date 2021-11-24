import "./CartWidget.css";
import { Icon } from 'semantic-ui-react';

import React from 'react'
import ItemCount from "../../ItemCount/ItemCount";

const CartWidget = () => {
    return (
        <div className='containerCartWidget'>
			<ul>
				<li>
                    <Icon name='cart arrow down'  size='large'/>
				</li>
                <li>
                    <p>Mi carrito  - 0 Items</p>
                </li>
			</ul>
        </div>
    )
}

export default CartWidget
