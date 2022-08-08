import React, { useContext, useState, useEffect} from "react";
import { toast } from "react-hot-toast";

const value = {
  state: {
    languages: "Hello",
  },
};

export const Context = React.createContext(value);

export const useContextLogic = () => {
  return useContext(Context)
}

export const StateContext = ({ children }) => {

  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0)
  const [qty, setQty] = useState(1);

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find(item => item._id === product._id)

    setTotalPrice(prevTotalPrice => prevTotalPrice + product.price * quantity)
    setTotalQuantities(prevTotalQuantity => prevTotalQuantity + quantity)

    if(checkProductInCart) {
      
      const updatedCartItems = cartItems.map(item => {
        if(item._id === product._id)
        return {
          ...item,
          quantity: item.quantity + quantity
        }
      })

      setCartItems(updatedCartItems);
    }
    
    else {
      product.quantity = quantity;
      setCartItems([...cartItems, {...product}])
    }

    toast.success(`${qty} ${product.name} added to the cart.`)
  }

  const incQty = () => {
    setQty((prev) => prev + 1)
  }

  const decQty = () => {
    setQty((prev) => {
      if(prev-1 < 1)
        return 1;

      return prev-1
    })
  }

  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        setShowCart
      }}
    >
      {children}
    </Context.Provider>
  )
}

