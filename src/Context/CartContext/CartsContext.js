import React, { createContext, useState } from "react";

export const CartsContext = createContext([]);

export const CartsProvider = ({ children }) => {
    const [items, setItems] = useState([])

    const isInCart = (id) => {

    }
    const addiItem = (item, qty) => {
        setItems([...item, { id: item.id, name: item.title, price: item.price, qty: qty }]);
    }
    return (
        <CartsContext.Provider value={{ items, addiItem }}>{children}
        </CartsContext.Provider>
    )
}