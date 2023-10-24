import {useState} from 'react'

const App = () => {
  const [esquerda, setEsquerda] = useState(0)
  const [direita, setDireita] = useState(0)

  const [todosOsCliques, setTodos] = useState([])


  const handleCliqueEsquerda = () => {
    setTodos(todosOsCliques.concat('E')) //Vai adicionar o valor E no array quando for clicado 
    setEsquerda(esquerda + 1)
  } 


  const handleCliqueDireita = () => {
    setTodos(todosOsCliques.concat('D')) //Vai adicionar o valor D no array quando for clicado
    setDireita(direita + 1)
  }

  return (
    <div>
      {esquerda}
      <button onClick={handleCliqueEsquerda}>Esquerda</button>
      <button onClick={handleCliqueDireita}>Direita</button>
      {direita}

      <p>{todosOsCliques.join(' ')}</p> 
      {/* Vai juntar os valores do array e colocar um espaço entre eles
      Vai mostrar todos os cliques que foram feitos/mostrar os valores do array */}
    </div>
  )
}

export default App