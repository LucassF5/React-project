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
    <>  
    {/* Um exemplo de como empacotar vários elementos sem precisar de uma div */}
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

export default App