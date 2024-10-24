import { createContext, useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

const cartContext = createContext();

export const { Provider } = cartContext;

export const useCartContext = () => {
    return useContext(cartContext);
};



const CartContextProvider = ({ children }) => {
    const [totalQty, setTotalQty] = useState(0);
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);


    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cart"));
        if (cart) {
            setCart(cart);
        }
    },[])

    const setCartLocalStorage = (cartSave)=>{
        localStorage.setItem("cart", JSON.stringify(cartSave));
    };


    const clearCart = () => {
        setCart([]);
        setTotalQty(0);
        setTotalPrice(0)
        setCartLocalStorage([])
    };


    const addToCart = (item, sum) => {
        setTotalQty(totalQty + sum);
        setTotalPrice(totalPrice + item.price * sum)

        let newCart = [];

        if (isInCart(item.id)) {
            const newCart = cart.map((elem) => {
                if (elem.id === item.id) {
                    return { ...elem, sum: elem.sum + sum }
                } else {
                    return elem;
                }
            })
            setCart(newCart);
        } else {
            const newCart = [...cart, { ...item, sum }]
            setCart(newCart);
        }
        setCartLocalStorage(newCart)
    };

    const removeItem = (id, price, sum) => {
        setTotalQty(totalQty - sum)
        setTotalPrice(totalPrice - price * sum)
        const newCart = cart.filter((elem) => elem.id != id)
        setCart(newCart);
        setCartLocalStorage(newCart)
    }



    const isInCart = (id) => {
        return cart.find((elem) => elem.id === id);
    }



    const contextValue = {
        totalQty,
        cart,
        totalPrice,
        removeItem,
        clearCart,
        addToCart
    };

    return <Provider value={contextValue}>{children}</Provider>;

};

export default CartContextProvider;


