import React from 'react'
import { useContext } from 'react'
import { ContextGlobal } from './utils/global.context'
import {Outlet, Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMoon} from '@fortawesome/free-solid-svg-icons'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {state,toggleTheme} = useContext(ContextGlobal);

  return (
    <div style={{ background: state.theme.backgroundNavbar, color:state.theme.color}}>
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <div>
      <Link to="/">Home</Link>
      <Link to="/contacto">Contact</Link>
      <Link to="/favs">Favs</Link>
      <button className='button-17' onClick={toggleTheme}><FontAwesomeIcon icon={faMoon} /></button>
      </div>
      <img src='../../DH.ico' alt='logo' />
    </nav>
    <Outlet/>
    </div>
  )
}

export default Navbar