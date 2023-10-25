import {useState, useEffect} from 'react'

const App = () => {
  const [esquerda, setEsquerda] = useState(0)
  const [direita, setDireita] = useState(0)

  const [todosOsCliques, setTodos] = useState([])

  const [total, setTotal] = useState(0)

  // useEffect(() => {
  //   alert('Qualquer coisa') //Vai aparecer no console do navegador
  // }, [esquerda, direita]) //usar [] está indicando que vai aparecer na mudança de estado do que está dentro do array
  // //Vai aparecer quando o valor de esquerda ou direita mudar


  const handleCliqueEsquerda = () => {
    setTodos(todosOsCliques.concat('E')) //Vai adicionar o valor E no array quando for clicado 
    const atualizaEsquerda = esquerda + 1
    setEsquerda(atualizaEsquerda)
    setTotal(atualizaEsquerda + direita)
  } 


  const handleCliqueDireita = () => {
    setTodos(todosOsCliques.concat('D')) //Vai adicionar o valor D no array quando for clicado
    const atualizaDireita = direita + 1
    setDireita(atualizaDireita)
    setTotal(atualizaDireita + esquerda)
  }

  return (
    <div>
      {esquerda}
      <button onClick={handleCliqueEsquerda}>Esquerda</button>
      <button onClick={handleCliqueDireita}>Direita</button>
      {direita}

      <p>{todosOsCliques.join(' ')}</p> 

      <p>Total {total}</p>
      {/* Vai juntar os valores do array e colocar um espaço entre eles
      Vai mostrar todos os cliques que foram feitos/mostrar os valores do array */}
    </div>
  )
}

export default App