import './Titulo.css'

function Titulo(props) {
  return (
    <div className='titulo-container'>
      <h1 className='h1-titulo'> {props.texto} {props.emoji} </h1>
    </div>
  )
}

export default Titulo
