import React, { useEffect, useState } from 'react';
import ItemList from './ItemList/ItemList'
import './ItemListContainer.css'
//Firebase
import { db } from '../../../Services/getFirestore';
import { collection, query, where, getDocs } from 'firebase/firestore';

import Spinner from '../../Spinner/Spinner';

const ItemListContainer = ({ categoryId }) => {
	console.log(categoryId)
	const [items, setItems] = useState([])
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const getProducts = async () => {

			if (categoryId === 'all') {
				const q = query(collection(db, 'robotics'));
				const docs = [];
				const querySnapshot = await getDocs(q);
				querySnapshot.forEach((doc) => {
					docs.push({ ...doc.data(), id: doc.id });
				});
				setItems(docs);
			}
			else {
				const q = query(collection(db, 'robotics'), where('category', '==', categoryId));
				const docs = [];
				const querySnapshot = await getDocs(q);
				querySnapshot.forEach((doc) => {
					docs.push({ ...doc.data(), id: doc.id });
				});
				setItems(docs);
			}
		};
		getProducts();
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	}, [categoryId]);


	return (
		<>
			{isLoading ? (
				<div className='spinner'>
					<Spinner />
				</div>
			) : (
				<div className='containerItemList'>
					<ItemList items={items} />
				</div>
			)}
		</>

	);
}

export default ItemListContainer;
