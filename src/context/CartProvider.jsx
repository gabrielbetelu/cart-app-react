import { useReducer } from "react";
import { CartContext } from "./CartContext"
import PropTypes from "prop-types";

const initialState = []

const buyReducer = (state = initialState , action = {}) => {
  switch (action.type) {
    case '[CARRITO] Agregar compra':
      
      return [...state,action.payload];

    case '[CARRITO] Aumentar cantidad compra':
    
      return state.map(item => {
        const quant = item.quantity + 1
        if (item.id == action.payload) return {...item , quantity: quant}
        return item
      });
      
    case '[CARRITO] Reducir cantidad compra':
      
    return state.map(item => {
      const quant = item.quantity - 1
      if (item.id == action.payload && item.quantity > 1) return {...item , quantity: quant}
      return item
    });

    case '[CARRITO] Eliminar compra':
    
      return state.filter(compra => compra.id != action.payload);
  
    default:

      return state;
  }
}

const CartProvider = ({ children }) => {

  const [buyList, dispatch] = useReducer(buyReducer, initialState)

  const addBuy = (buy) => {
    buy.quantity = 1
    const action = {
      type: '[CARRITO] Agregar compra',
      payload: buy
    }
    dispatch(action)
  }

  const addQuantity = (id) => {
    const action = {
      type: '[CARRITO] Aumentar cantidad compra',
      payload: id
    }
    dispatch(action)
  }

  const reduceQuantity = (id) => {
    const action = {
      type: '[CARRITO] Reducir cantidad compra',
      payload: id
    }
    dispatch(action)
  }

  const deleteBuy = (id) => {
    const action = {
      type: '[CARRITO] Eliminar compra',
      payload: id
    }
    dispatch(action)
  }

  return (
    <CartContext.Provider value={{buyList , addBuy , addQuantity , reduceQuantity , deleteBuy}}>
      {children}
    </CartContext.Provider>
  )  
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default CartProvider 
