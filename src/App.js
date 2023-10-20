
const Hello = (props) => { // props = propriedades
  console.log(props)
  return(
    <div>
      <p>Olá {props.name}, você tem {props.age} anos</p>
    </div>
  )
}

const App = () => {
  const name = "Nome"
  const age = "10"
  return(
    // <div>
    <>  // Um exemplo de como empacotar vários elementos sem precisar de uma div
      <style>
        {`
          body {
            background-color: blue;
            font-size: 30px;
          }
        `}
      </style>
      <h1>Olá a todos"</h1>
      <Hello name="Lucas" age={20 + 2}/>
      <Hello name={name} age={age}/>
    {/* </div> */}
    </> //Tag de fechamento do empacotamento
  )
}

// const App = () => {
//   const hoje = new Date()
//   const a = 10
//   const b = 20
//   console.log(hoje, a+b)

//   return (
//     <div>
//       <p>Olá, mundo! <br />Hoje é {hoje.toString()}</p>
//       <p>
//         {a} mais {b} é {a + b}
//       </p>
//     </div>
//   )
// }

// const Friends = () => {
//   const amigos = [ 
//       { nome: 'Peter', idade: 4 },
//       { nome: 'Maya', idade: 10 },
//     ]

//   return (
//     <div>
//       <p>{amigos[0].nome} {amigos[0].idade}</p> //React não aceita tipo Object,
//      apenas no caso de utilizar o .map() para percorrer o vetor
//       <p>{amigos[1].nome} {amigos[1].idade}</p>
//     </div>
//   )
// }

// const FreindsVetor = () => {
//   const amigos = [ 'Peter', 'Maya']

//   return (
//     <div>
//       <p>{amigos}</p>
//     </div>
//   )
// }

export default App