import { useState } from 'react'

// const ButtonAcrescentar = () => {

//   const [ contador, setContador ] = useState(0)

//   return(
//     <div>
//       <div>{contador}</div>
//       <button onClick={() => setContador(contador + 1)}>
//         ACRESCENTAR
//       </button>
//     </div>
//   )
// }

// const ButtonZerar = () => {

//   const [ contador, setContador ] = useState(0)
  
//   return(
//     <div>
//       <button onClick={() => setContador(0)}> 
//         zerar
//       </button>
//     </div>
//   )
// }

const App = () => {
  const [ contador, setContador ] = useState(0)

  console.log('renderizando com o valor do contador em', contador)

  const aumentarEmUm = () => {

    console.log('aumentando, valor anterior', contador)
    setContador(contador + 1)
  }

  const diminuirEmUm = () => { 

    console.log('diminuindo, valor anterior', contador)
    setContador(contador - 1)
  }

  const zerarContador = () => {

    console.log('zerando, valor anterior', contador)
    setContador(0)
  }

  return (
    <div>
      <Exibir contador={contador} />
      <Botao onClick={aumentarEmUm} texto="mais+" />
      <Botao onClick={zerarContador} texto="zerar" />
      <Botao onClick={diminuirEmUm} texto="menos-" />
    </div>
  )
} 

const Exibir = ({ contador }) => <div><h1>{contador}</h1></div>

const Botao = ({ onClick, texto }) => <button onClick={onClick}>{texto}</button>

export default App