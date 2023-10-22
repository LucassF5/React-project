// const Hello = (props) => { // props = propriedades
//   console.log(props)
//   return(
//     <div>
//       <p>Olá {props.name}, você tem {props.age} anos</p>
//     </div>
//   )
// }


const Hello = ({ nome, idade }) => {
    const anoDeNascimento = () => new Date().getFullYear() - idade
  
    return (
      <div>
        <p>
          Olá {nome}, você tem {idade} anos.
        </p>
        <p>Então, você provavelmente nasceu em {anoDeNascimento()}.</p>
      </div>
    )
  }
  
  const App = () => {
    const nome = "Nome"
    const idade = "10"
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
        <Hello nome="Lucas" idade={20 + 2}/>
        <Hello nome={nome} idade={idade}/>
      {/* </div> */}
      </> //Tag de fechamento do empacotamento
    )
  }
  
  
  export default App