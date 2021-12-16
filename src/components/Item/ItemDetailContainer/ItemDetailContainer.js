import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom";
//Firebase
import { db } from '../../../Services/getFirestore';
import { collection, query, getDocs } from 'firebase/firestore';

const ItemDetailContainer = () => {
	const [item, setItem] = useState([])

	let paramsID = useParams();


	const itemFiltered = item.filter((item) => {
		return item.id === paramsID.id;
	});

	useEffect(() => {
		const getProducts = async () => {
			const q = query(collection(db, 'robotics'));
			const docs = [];
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
			});
			setItem(docs);
		};
		getProducts();
	}, [paramsID]);
	return (
		<>
			{itemFiltered.map((item) => {
				return <ItemDetail item={item} key={item.id} />;
			})}
		</>
	);
}

export default ItemDetailContainer;