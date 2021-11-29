import React,{ useEffect, useState } from 'react';
import ItemList from './ItemList/ItemList'

import './ItemListContainer.css';

const ItemListContainer = ({categoryId}) => {
	// const addToCart = (qty) =>{
	// 	let prod;
	// 	qty > 1 ? prod = 'productos' : prod = 'producto';
	// 	alert(`Ingresaste ${qty} ${prod} al carrito.`);
	// }
	const [items, setItems] = useState([])
	useEffect(() => {
		setTimeout(()=> {
				fetch(`https://api.mercadolibre.com/sites/MLA/search?category=${categoryId}&limit=4`)
				.then(response => response.json())
				.then(respJSON => {setItems(respJSON.results)})
				.catch(error => console.log('Error:',error))
		},2000)
	}, [categoryId])

	return (
		<>
			<h1>{categoryId}</h1>
			<div >
				<ItemList items={items} />
			</div>
		</>
	);
}

export default ItemListContainer;
