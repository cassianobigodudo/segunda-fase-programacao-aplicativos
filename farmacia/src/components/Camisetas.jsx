import './Camisetas.css'

function Camisetas() {
  return (
    <div className='camisetas-container'>
      <p className='label-quemSomos'>Conheça nossos produtos!!</p>

      <label className='label-quemSomos'>Quem somos? <p>Somos a Farmárcia, criada para acolher você da melhor forma possível! Administrada pela sobrinha do falecido Tio Mário, Márcia, determinada como que só ela, decidiu entrar no munda farmaceutico e dar uma cara nova para esse mundo, do jeitinho dela! Conheça nossa linha de produtos abaixo, veja mais em:</p></label>

      <img className='image-camisetas' src="./images/farmarcia-camiseta-removebg-preview.png" alt="" />
      <img className='image-camisetas' src='./images/farmarcia-camisetas.png'/>

      <label className='label-quemSomos'>PROMOÇÃO DOIS EM UM: COMPRE DUAS CAMISETAS E RECEBA UMA! na compra de 5 camisetas para toda sua família, você recebe um kit drogaria com drogas legais* para uso medicinal</label>

      <label className='label-drogas'>*legal em um sentido divertido, e não dentro da lei</label>
    </div>
  )
}

export default Camisetas
