import React, { useState } from 'react';
import { Input, Button } from 'semantic-ui-react';
import './FormContainer.css';

import MessageSuccess from '../MessageSuccess/MessageSuccess';
import Spinner from '../Spinner/Spinner';

import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../Services/getFirestore';

const initialState = {
    name: '',
    lastName: '',
    email: '',
    adress: '',
};

const FormContact = () => {
    const [values, setValues] = useState(initialState);
    const [purchaseID, setPurchaseID] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    // Add a new document in collection "purchases"
    const onSubmitHandler = async (e) => {
        setIsLoading(true);
        e.preventDefault();
        const docRef = await addDoc(collection(db, 'purchases'), {
            values,
        });
        // console.log('Document written with ID: ', docRef.id);
        setPurchaseID(docRef);
        setTimeout(() => {
            setIsLoading(false);
            setValues(initialState);
        }, 1000);
    };

    return (
        <div>
            <form className='form-container' onSubmit={onSubmitHandler}>
                <Input
                    className='form-input'
                    placeholder='Nombre'
                    name='name'
                    value={values.name}
                    onChange={onChangeHandler}
                />
                <Input
                    className='form-input'
                    placeholder='Apellido'
                    name='lastName'
                    value={values.lastName}
                    onChange={onChangeHandler}
                />
                <Input
                    className='form-input'
                    placeholder='Email'
                    name='email'
                    value={values.email}
                    onChange={onChangeHandler}
                />
                <Input
                    className='form-input'
                    placeholder='Dirección'
                    name='adress'
                    value={values.adress}
                    onChange={onChangeHandler}
                />
                <Button className='form-btn' primary>
                    ENVIAR
                </Button>
            </form>

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
    );
};

export default FormContact;
