import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export const CartPage = () => {

  const {buyList , addQuantity , reduceQuantity , deleteBuy} = useContext(CartContext)

  const totalCalc = (buyList) => {
    return buyList.reduce((total, item) => total + item.price * item.quantity , 0).toFixed(2)
  }

  const totalProd = (buyList) => {
    return buyList.reduce((total, item) => total + item.quantity , 0).toFixed(0)
  }

  const handlePrint = () => {
    (buyList.length > 0) ?  print() : ""
  } 
  
  return (
    <>
      <hr/>
      <table className="table table-striped container">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Canidad</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {
            buyList.map(prod => (              
              <tr key = {prod.id}>
                <th >{prod.title}</th>
                <td>{prod.price}</td>
                <td>
                  <button 
                    className="btn btn-outline-primary" 
                    onClick={() => reduceQuantity(prod.id)}
                  >
                    -
                  </button>

                  <button 
                    className="btn btn-primary"
                  >
                    {prod.quantity}
                  </button>

                  <button 
                    className="btn btn-outline-primary" 
                    onClick={() => addQuantity(prod.id)}
                  >
                    +
                  </button>
                  
                  </td>
                <td>
                  <button 
                    type="button"
                    className="btn btn-danger"
                    onClick={() => deleteBuy(prod.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          }

          <tr>
            <td></td> 
            <th><b>TOTAL : </b></th>
            <td></td>
            <td>${totalCalc(buyList)}</td>
          </tr>

          <tr>
            <td></td>
            <th><b>UNIDADES: </b></th>
            <td></td>
            <td>{totalProd(buyList)}</td>
          </tr>

          <tr>
            <td></td>
            <th><b>ARTICULOS: </b></th>
            <td></td>
            <td>{buyList.length}</td>
          </tr>

        </tbody>
      </table>
      <hr/>
      <div className="d-grid gap-2">
        <button 
          className="btn btn-secondary"
          onClick={handlePrint}
        >
          FINALIZAR COMPRA
        </button>
      </div>
      <hr/>
    </>
  )
}
