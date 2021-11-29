import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

import './ItemListContainer.css';

const ItemListContainer = () => {
	const addToCart = (qty) =>{
		let prod;
		qty > 1 ? prod = 'productos' : prod = 'producto';
		alert(`Ingresaste ${qty} ${prod} al carrito.`);
	}

	return (
		<>
			<div >
				<ItemCount stock={20} initial={1} onAdd={addToCart}/>
			</div>
		</>
	);
}

export default ItemListContainer;
