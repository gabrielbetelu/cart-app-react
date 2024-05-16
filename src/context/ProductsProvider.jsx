import { useEffect, useState } from "react"
import PropTypes from "prop-types";
import { ProductsContext } from "./ProductsContext"

const ProductsProvider = ({ children }) => {

  const [productos, setProductos] = useState([])

  const fetchProductos = async () => {
    try {
      const response = await fetch ('https://fakestoreapi.com/products')
      const data = await response.json()
      setProductos(data)
    } catch (error) {
      console.error("Se encontró el siguiente error: ", error);
    }    
  };

  useEffect(() => {
    fetchProductos()
    } , [])
  
  return (
    <ProductsContext.Provider  value={{productos}}>
    {children}
    </ProductsContext.Provider>
  )
}

ProductsProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default ProductsProvider;
