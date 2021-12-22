import React, { createContext, useState } from "react";


export const useCartContext = createContext([]);

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([])

    const isInCart = (id) => {
        const found = items.find(item => item.id === id);
        return found;
    }

    const addToCart = (item, qty) => {
        isInCart(item.id)
            ?
            setItems(items.map((prod) => {
                if (prod.id === item.id) {
                    prod.qty += qty
                }
                return prod
            }))
            :
            setItems([...items, { id: item.id, img: item.img, price: item.price, description: item.description, stock: item.stock, model: item.model, qty: qty }]);
    }

    const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id))
    }

    const clearItems = () => {
        setItems([])
    }

    const totalPrice = () => {
        return items.reduce((acum, value) => (acum + (value.qty * items.price)), 0)
    }

    return (
        <useCartContext.Provider value={{
            items,
            addToCart,
            removeItem,
            clearItems,
            totalPrice
        }}>
            {children}
        </useCartContext.Provider>
    )
}