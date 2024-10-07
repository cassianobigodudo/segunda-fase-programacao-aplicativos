import Navbar from "../components/Navbar"
import { useContext, useState } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
function Home() {
    const {usuarioLogado, bairro, setBairro} = useContext(GlobalContext)

  return (
    <div>
        <Navbar />
      <h1>Olá, seja bem vindo a página inicial</h1>
      <p>Para criar uma conta, cadastre-se no botão na barra de navegação</p>
      <p>ou entre na sua conta no botão de login na barra de navegação</p>

    </div>
  )
}

export default Home
