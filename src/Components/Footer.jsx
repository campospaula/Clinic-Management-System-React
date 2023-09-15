import React from 'react'
import { useContext } from 'react'
import { ContextGlobal } from './utils/global.context'


  const Footer = () => {
    const {state} = useContext(ContextGlobal);

    return (
    <footer className="footer"style={{ background: state.theme.backgroundFooter,  color:state.theme.color }}>
        <p className='footer.p'> Front End III - Proyecto Final - Sofia Sastre - Paula Campos</p>
        <img className= "footer.img" src='./images/DH.png'  alt='DH-logo'/>
        <div className='footer-div.img'>
        <img src='../../images/ico-facebook.png' alt='facebook-logo' />
        <img src='../../images/ico-instagram.png' alt='instagram-logo' />
        <img src='../../images/ico-whatsapp.png' alt='whatsapp-logo' />
        <img src='../../images/ico-tiktok.png' alt='tiktok-logo' />
        </div>
    </footer>
  )
}

export default Footer