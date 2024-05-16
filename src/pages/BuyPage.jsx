import { useContext } from "react"
import { Card } from "../components/Card"
import { ProductsContext } from "../context/ProductsContext"
import { CartContext } from "../context/CartContext"

export const BuyPage = () => {

  const { productos } = useContext( ProductsContext )

  const { addBuy , addQuantity, reduceQuantity , deleteBuy} = useContext(CartContext)

  const handleBuy = (product) => {
    addBuy(product)
  }
  const handleAdd = (id) => {
    addQuantity(id);
  };
  const handleReduce = (id) => {
    reduceQuantity(id);
  };
  const handleDelete = (id) => {
    deleteBuy(id)
  }

  return (
    <>
      <h1>Productos</h1>
      <hr/>
      { productos.map(product => (
          <Card
            key={product.id} 
            id={product.id}
            image={product.image} 
            title={product.title}  
            price={product.price}  
            description={product.description}
            handleBuy={() => handleBuy(product)}
            handleAdd={() => handleAdd(product.id)}
            handleReduce={() => handleReduce(product.id)}
            handleDelete={() => handleDelete(product.id)}>
          </Card>
        ))
      }
    </>
  )
}
