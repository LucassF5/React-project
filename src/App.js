import "./App.css";
import Note from "./components/Note"
import { useState, useEffect } from 'react'
import axios from 'axios'

const App = (props) => {
  const [notes, setNotes] = useState([]) 
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const hook = () => {
    // Hook vai ser a constante que ativa o efeito
    console.log('effect (efeito)') // imprime quando o componente é renderizado
    axios.get('http://localhost:3001/notes').then((response) => {
    // Tendo sucesso, a função de retorno de chamada 
    //é chamada com a resposta do servidor como seu argumento.
      console.log('promise fulfilled (promessa resolvida)')
      setNotes(response.data)
      // A função setNotes atualiza o estado de notes com a resposta do servidor
    })
  }
  
  useEffect(hook, [])

  console.log('render (renderiza)', notes.length, 'notes (notas)')

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: notes.length + 1,
    }

    axios
      .post('http://localhost:3001/notes', noteObject)
      .then(response=>{   
        setNotes(notes.concat(response.data ))
        setNewNote("")
          // console.log(response)
      })

    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  const handleNoteChange = (event) => { 
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}> 
        //alterna o valor de showAll de verdadeiro para falso
          show {showAll ? 'important' : 'all' }
            
        </button>
      </div>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
      <input
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form>   
    </div>
  )
}

export default App