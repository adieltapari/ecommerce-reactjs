import React, { createContext, useContext, useState } from "react";


export const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

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
        return items.reduce(
            (acc, value) => acc + value.price * value.qty,
            0
        );
    };

    return (
        <CartContext.Provider value={{
            items,
            addToCart,
            removeItem,
            clearItems,
            totalPrice
        }}>
            {children}
        </CartContext.Provider>
    )
}