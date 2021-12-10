import React, { createContext, useState } from "react";

export const CartsContext = createContext([]);

export const CartsProvider = ({ children }) => {
    const [items, setItems] = useState([])

    const addItem = (item, qty) => {
        setItems([...items, { id: item.id, name: item.title, price: item.price, qty: qty }]);
    }
    return (
        <CartsContext.Provider value={{ items, addItem }}>{children}
        </CartsContext.Provider>
    )
}