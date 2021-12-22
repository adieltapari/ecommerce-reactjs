import React, { useState, useContext } from 'react'
import { useCartContext } from '../../Context/CartContext/CartContext'
import { Input, Button } from 'semantic-ui-react';

import './Cart.css';
//Firebase
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../Services/getFirestore';
import MessageSuccess from '../../components/MessageSuccess/MessageSuccess';
import Spinner from '../../components/Spinner/Spinner';

const Cart = () => {
    const initialState = {
        name: '',
        phone: '',
        email: ''
    }
    const [formData, setFormData] = useState(initialState);
    const [purchaseID, setPurchaseID] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const { items, removeItem, clearItems } = useContext(useCartContext);
    console.log(items);


    const handleChange = (e) => {
        console.log(e)
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const createOrder = async (e) => {
        setIsLoading(true);

        e.preventDefault();
        // const order = {};

        // order.date = db.firestore.Timestamp.fromDate(new Date());
        // order.buyer = formData;
        // order.item = items.map((items) => {
        //     const id = items.id
        //     const name = items.name
        //     const price = items.price
        //     return { id, name, price }
        // })

        const docRef = await addDoc(collection(db, 'orders'), {
            formData, items
        });

        setPurchaseID(docRef);
        setTimeout(() => {
            setIsLoading(false);
            setFormData(initialState);
            clearItems();
        }, 1000);
    }

    return (
        <>
            <div >
                {items.length === 0 && <h4 style={{ margin: 40 }}> carrito vacio</h4>}
                {
                    items.map((item) => (
                        <div className="ContainerCart" key={item.id}>
                            <div className='ContainerCartItem'>
                                <div className='ContainerName'>
                                    <h3 >{item.qty} x {item.model}</h3>
                                </div>
                                <div className='ContainerDelete'>
                                    <div className="ui button red" style={{ margin: "10" }} onClick={() => removeItem(item.id)}>
                                        <i className="delete icon"></i>
                                        Borrar
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div >
            {items.length !== 0 &&
                <div className='EmptyCart'>
                    <div className="ui button " style={{ margin: "10" }} onClick={() => clearItems()}>
                        <i className="cart icon"></i>
                        vaciar carrito
                    </div>
                </div>
            }
            {items.length !== 0 &&
                <div>
                    <form className='form-container' onSubmit={createOrder}>
                        <Input
                            className='form-input'
                            placeholder='Nombre'
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <Input
                            className='form-input'
                            placeholder='Telefono'
                            name='phone'
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        <Input
                            className='form-input'
                            placeholder='Email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <Button className='form-btn' primary>
                            ENVIAR
                        </Button>
                    </form>
                </div>
            }
            {isLoading ? (
                <Spinner />
            ) : (
                purchaseID.id && (
                    <div>
                        <MessageSuccess msg={purchaseID} />
                    </div>
                )
            )}

        </>
    )
}

export default Cart
