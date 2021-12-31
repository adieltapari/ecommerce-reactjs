import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Featured.css'
//Firebase

import { collection, query, where, getDocs } from 'firebase/firestore';
import Spinner from '../Spinner/Spinner';
import { db } from '../../Services/getFirestore';

const Featured = ({ categoryId }) => {
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

                <div className='containerfeatured'>
                    {items.map((item) => (
                        <NavLink to={`/category/all`}>
                            <div className="cardProductFeatured" style={{ margin: 20 }}>
                                <img src={item.img} alt="Avatar" style={{ height: 175, padding: 10 }} />
                                <div className="containerProduct">
                                    <h3><b>{item.model}</b></h3>
                                </div>
                            </div>
                        </NavLink>
                    ))}
                </div>


            )}
        </>

    )
}

export default Featured
