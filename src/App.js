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

const Hello = (props) => {
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
    <div>
      <h1>Olá a todos"</h1>
      <Hello name="Lucas" age={20 + 2}/>
      <Hello name={name} age={age}/>
    </div>
  )
}

export default App