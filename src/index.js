import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

import axios from 'axios'

const promise = axios.get('http://localhost:3001/notes')
console.log(promise)

const promise2 = axios.get('http://localhost:3001/foobar')
console.log(promise2)



const notes = [


  {
    id: 1,
    content: 'Codar é bom demaizi',
    important: true
  },
  {
    id: 2,
    content: 'Focado e persistente',
    important: false
  },
  {
    id: 3,
    content: 'Treinando com React',
    
    important: true
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <App notes={notes} />
)