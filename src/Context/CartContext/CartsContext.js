import React, { createContext, useState } from "react";

export const CartsContext = createContext();

export const CartsProvider = ({ children }) => {
    const [carts, setCarts] = useState();

    return <CartsContext.Provider value={[carts, setCarts]}>{children}
    </CartsContext.Provider>;
};