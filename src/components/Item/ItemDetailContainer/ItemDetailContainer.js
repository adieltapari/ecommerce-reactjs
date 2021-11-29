import React,{ useEffect, useState } from 'react';
import ItemDetail  from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
	const [item, setItem] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setLoading(true)
		setTimeout(()=> {
				fetch(`https://api.mercadolibre.com/sites/MLA/search?q=Adidas&limit=1`)
				.then(response => response.json())
				.then(respJSON => {setItem(respJSON.results[0]);setLoading(false)})
				.catch(error => console.log('Error:',error))
		},2000)
	}, [])

	return (
		<>
		{
			loading ?
			<h5>cargando detalle del  producto..</h5>
			:
			<ItemDetail item={item} />
		}
		</>
	);
}

export default ItemDetailContainer;