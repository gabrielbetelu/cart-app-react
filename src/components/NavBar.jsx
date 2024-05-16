import { CardGiftcardTwoTone , ShoppingCart} from "@mui/icons-material"
import Badge from '@mui/material/Badge';
import { NavLink } from "react-router-dom";
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import '../styles/navbar.css'

export const NavBar = () => {

  const { buyList } = useContext(CartContext)

  return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <h2><NavLink to='/' className="navbar-brand title">App Carrito   ||  </NavLink></h2>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to='/' className="nav-link active" aria-current="page">Compras</NavLink>
              </li>
            </ul>
             <NavLink to='/cart' className="nav-link active">
              <Badge badgeContent={buyList.reduce((total, item) => total + item.quantity , 0).toFixed(0)} color="secondary">
                <ShoppingCart color="action" />
              </Badge>
              < > -  - </>
              <Badge badgeContent={(buyList.length ==0) ? "0" : buyList.length} color="secondary">
                <CardGiftcardTwoTone color="action" />
              </Badge>
            </NavLink>
          </div>
        </div>
      </nav>
  )
}
