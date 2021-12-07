import React, { useEffect, useState } from 'react';
import ItemList from './ItemList/ItemList'

import './ItemListContainer.css';

const ItemListContainer = ({ categoryId }) => {
	const [items, setItems] = useState([])
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		setLoading(true)
		setTimeout(() => {
			fetch(`https://api.mercadolibre.com/sites/MLA/search?category=${categoryId}&limit=4`)
				.then(response => response.json())
				.then(respJSON => { setItems(respJSON.results); setLoading(false) })
				.catch(error => console.log('Error:', error))
		}, 2000)
	}, [categoryId])
	if (loading) {
		return (
			<h5>cargando detalle del  producto..</h5>
		)
	}
	return (
		<div>
			<h1>Categoria:{categoryId}</h1>
			<ItemList items={items} />
		</div>
	);
}

export default ItemListContainer;
