import React, { useEffect, useState } from 'react';
import ItemList from './ItemList/ItemList'
//Firebase
import { db } from '../../../Services/getFirestore';
import { collection, query, getDocs } from 'firebase/firestore';

import './ItemListContainer.css';

const ItemListContainer = () => {
	const [items, setItems] = useState([])
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const getProducts = async () => {
			const q = query(collection(db, 'robotics'));
			const docs = [];
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
			});
			setItems(docs);
		};
		getProducts();
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	}, []);

	if (isLoading) {
		return (
			<h5>cargando detalle del  producto..</h5>
		)
	}
	return (
		<div>
			<ItemList items={items} />
		</div>
	);
}

export default ItemListContainer;
