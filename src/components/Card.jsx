import { useState , useEffect , useContext } from "react";
import { CartContext } from "../context/CartContext";
import PropTypes from "prop-types";
import '../styles/cards.css';

export const Card = ({ id ,image , title , price , description , handleBuy , handleAdd, handleReduce ,handleDelete }) => {

  const [added, setAdded] = useState(false)
  const {buyList} = useContext(CartContext)

  const buyListIndex = buyList.findIndex(prod =>prod.id == id)

  useEffect(() => {
    const isAdded = buyList.some(item => item.id === id);
    setAdded(isAdded);
  }, [buyList, id]); 

  const clickAgregar = () => {
    handleBuy ()
  }

  const clickAddQuantity = () => {
    handleAdd();
  };

  const clickReduceQuantity = () => {
    handleReduce();
  };

  const clickQuitar = () => {
    handleDelete ()
  }

  return (
    <div className="tarjeta">
      <img src={image} alt={title} className="tarjeta-imagen"/>
      <div className="tarjeta-contenido" >
        <h3 className="tarjeta-titulo">{title}</h3>
        <p className="tajeta-descripcion">{description}</p>
        <p className="tarjeta-precio">{price}</p>
        <p className="tarjeta-botones">
          {added
            ? <button
                type="button"
                className="boton-quitar"
                onClick={clickQuitar}
              >
                Quitar del carrito
              </button>
            : <button
                type="button"
                className="boton-agregar"
                onClick={clickAgregar}
              >
                Agregar al carrito
              </button>
          }

          {added
            ? <button 
              className="btn btn-outline-secondary btn-reduce" 
              onClick={clickReduceQuantity}
              >
                -
              </button>
            : <></> 
          }

          {added
            ? <button 
              className="btn btn-secondary"
              >
              {buyList[buyListIndex] ? buyList[buyListIndex].quantity : "0"}
              </button>
            : <></>
          }

          {added
          ? <button 
              className="btn btn-outline-secondary" 
              onClick={clickAddQuantity}
            >
              +
            </button> 
          : <></>
          }
        </p>
      </div>      
    </div>
  )
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired, 
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  handleBuy: PropTypes.func,
  handleAdd: PropTypes.func,
  handleReduce: PropTypes.func,
  handleDelete: PropTypes.func
};

export default Card; 


