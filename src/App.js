import {useState} from 'react'

const App = () => {
  const [cliques, setCliques] = useState({ 
    esquerda: 0, direita: 0
  })

  const handleCliqueEsquerda = () => {
    const novosCliques = { 
      esquerda: cliques.esquerda + 1, 
      direita: cliques.direita 
    }
    setCliques(novosCliques)
  }

  const handleCliqueDireita = () => {
    const novosCliques = { 
      esquerda: cliques.esquerda, 
      direita: cliques.direita + 1 
    }
    setCliques(novosCliques)
  }

  return (
    <div>
      {cliques.esquerda}
      <button onClick={handleCliqueEsquerda}>Esquerda</button>
      <button onClick={handleCliqueDireita}>Direita</button>
      {cliques.direita}
    </div>
  )
}

export default App