import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail'
import ItemCount from '../ItemCount/ItemCount.js'

const ItemDetailContainer = () => {
	const [item, setItem] = useState([])
	const [loading, setLoading] = useState(true)

	// useEffect(() => {
	// 	setLoading(true)
	// 	setTimeout(() => {
	// const responseItem = await axios.get(`https://api.mercadolibre.com/items?ids=${id}`)
	// console.log(responseItem.data[0].body.title)
	// const responseDescription = await axios.get(`https://api.mercadolibre.com/items/${id}/description`)
	// console.log(responseDescription.data.plain_text)
	// 		fetch(`https://api.mercadolibre.com/sites/MLA/search?category=MLA1499&limit=1`)
	// 			.then(response => { response.json(); console.log(response) })
	// 			.then(respJSON => { setItem(respJSON.results[0]); setLoading(false) })
	// 			.catch(error => console.log('Error:', error))
	// 	}, 2000)
	// }, [])
	useEffect(() => {
		setLoading(true)
		setTimeout(() => {
			fetch(`https://api.mercadolibre.com/sites/MLA/search?q=Adidas&limit=1`)
				.then(response => response.json())
				.then(respJSON => { setItem(respJSON.results[0]); setLoading(false) })
				.catch(error => console.log('Error:', error))
		}, 2000)
	}, [])


	const addToCart = (qty) => {
		let prod;
		qty > 1 ? prod = 'productos' : prod = 'producto';
		alert(`Ingresaste ${qty} ${prod} al carrito.`);
	}

	if (loading) {
		return <h5>cargando detalle del  producto..</h5>
	}
	return (
		<>
			<div>
				<ItemDetail item={item} />
				<ItemCount stock={20} initial={1} onAdd={addToCart} />
			</div>
		</>
	);
}

export default ItemDetailContainer;