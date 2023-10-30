import {useState} from 'react'

const Historico = (props) => {
  if (props.todosOsCliques.length === 0) {
    return (
      <div>
        Clique em um dos botões para usar a aplicação!
      </div>
    )
  }

  return (
    <div>
      Histórico de cliques nos botões: {props.todosOsCliques.join(' ')}
    </div>
  )
}

const Botao = (props) => { 
  console.log(props)
  const { handleClique, texto } = props
  return (
    <button onClick={handleClique}>
      {texto}
    </button>
  )
}

// const Botao = ({ handleClique, texto }) => (
//   <button onClick={handleClique}>
//     {texto}
//   </button>
// )

const App = () => {
  const [esquerda, setEsquerda] = useState(0)
  const [direita, setDireita] = useState(0)
  const [todosOsCliques, setTodos] = useState([])

  const handleCliqueEsquerda = () => {
    console.log('Clique esquerda')
    setTodos(todosOsCliques.concat('E'))
    setEsquerda(esquerda + 1)
  }

  const handleCliqueDireita = () => {
    console.log('Clique direita')
    setTodos(todosOsCliques.concat('D'))
    setDireita(direita + 1)
  }

  return (
    <div>
      {esquerda}
      <Botao handleClique={handleCliqueEsquerda} texto='Esquerda' />
      <Botao handleClique={handleCliqueDireita} texto='Direita' />
      {direita}
      <Historico todosOsCliques={todosOsCliques} />
    </div>
  )
}

export default App