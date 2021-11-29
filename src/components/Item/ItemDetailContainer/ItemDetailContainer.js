import React,{ useEffect, useState } from 'react';
import ItemDetail  from '../ItemDetail/ItemDetail'

const ItemDetailContainer = ({categoryId}) => {
	const [item, setItem] = useState([])
	useEffect(() => {
		setTimeout(()=> {
				fetch(`https://api.mercadolibre.com/sites/MLA/search?q=Adidas&limit=1`)
				.then(response => response.json())
				.then(respJSON => {setItem(respJSON.results[0])})
				.catch(error => console.log('Error:',error))
		},2000)
	}, [])

	return (
		<>
		    <ItemDetail item={item} />
		</>
	);
}

export default ItemDetailContainer;