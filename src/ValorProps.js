import {useState} from 'react'

const Exibir = props => <h1>Valor: {props.valor}</h1>

const Botao = (props) => (
  <button onClick={props.handleClique}>
    {props.texto}
  </button>
)

const App = () => {
  const [valor, setValor] = useState(10)

  const setNoValor = (novoValor) => () => {
    console.log('setValor atual', novoValor)  // Imprime o novo valor no console
    setValor(novoValor)
  }
  
  return (
    <div>
      <Exibir valor={valor} />  
      <Botao handleClique={setNoValor(valor + 1000)} texto="mil" />
      <Botao handleClique={setNoValor(0)} texto="zerar" />  
      <Botao handleClique={setNoValor(valor + 1)} texto="incrementar" />
    </div>
  )
}

export default App