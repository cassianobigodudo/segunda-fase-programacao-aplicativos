import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header-container'>
        <img className='imagem-header' src="./images/farmarcia-logo-pq.png" alt="" />
        <label className='label-header'>FARMÁRCIA</label>
        <label className='label-header'>Gerenciamento de Senhas</label>
    </div>
  )
}

export default Header
