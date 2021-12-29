import React, { useState, useContext } from 'react';

import { CartContext } from '../../Context/CartContext/CartContext'
import { Input, Button } from 'semantic-ui-react';
//Firebase
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../Services/getFirestore';

import MessageSuccess from '../../components/MessageSuccess/MessageSuccess';
import Spinner from '../../components/Spinner/Spinner';

const CheckOut = () => {
    const initialState = {
        name: '',
        phone: '',
        email: ''
    }
    const [isLoading, setIsLoading] = useState(false);
    const [purchaseID, setPurchaseID] = useState('');
    const [formData, setFormData] = useState(initialState);

    const { items, clearItems } = useContext(CartContext);

    const handleChange = (e) => {
        console.log(e)
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const createOrder = async (e) => {
        setIsLoading(true);

        e.preventDefault();
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
        <div>
            {
                items.length !== 0 &&
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
        </div>
    )
}

export default CheckOut
