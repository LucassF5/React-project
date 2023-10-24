import { useState } from 'react'

  const ButtonAcrescentar = () => {

    const [ contador, setContador ] = useState(0)

    return(
      <div>
        <h1>{contador}</h1>
        <button onClick={() => setContador(contador + 1)}>
          ACRESCENTAR
        </button>
        <button onClick={() => setContador(0)}> 
          zerar
        </button>
      </div>

      
    )
  }

//   function CounterFactorial() {
//   const [count, setCount] = useState(0);

//   const calculateFactorial = (n) => {
//     if (n === 0 || n === 1) return 1;
//     return n * calculateFactorial(n - 1);
//   };

//   return (
//     <div>
//       <h2>Contador: {count}</h2>
//       <button onClick={() => setCount(count + 1)}>Incrementar</button>
//       <p>Fatorial: {calculateFactorial(count)}</p>
//     </div>
//   );
// }

  const FactorialButton = () => {

    const [ contador2, setContador2 ] = useState(0)
    // let conta = 0
    const factorial = (conta) => {
      // setContador2(conta+1)
      if (conta === 0 || conta === 1) 
        return 1;

      else 
        return conta * factorial(conta - 1);
      }
  

    // function aumentar(){
    //   setContador2(contador2+1)
    //   factorial(contador2)
    //   return contador2
    // }
  
    return(  
      <div>
        <h1>Factorial: {factorial(contador2)}</h1>
        <button onClick={() => setContador2(contador2+1)}>
          ACRESCENTAR Factorial
        </button>
        <p>Valor contador: {contador2}</p>
      </div>
    )
  }

  // const ButtonZerar = () => {

  //   const [ contador, setContador ] = useState(0)
    
  //   return(
  //     <div>
  //       <button onClick={() => setContador(0)}> 
  //         zerar
  //       </button>
  //     </div>
  //   )
  // }

const App = () => {
  // const [ contador, setContador ] = useState(0)

//   console.log('renderizando com o valor do contador em', contador)

//   const aumentarEmUm = () => {

//     console.log('aumentando, valor anterior', contador)
//     setContador(contador + 1)
//   }

//   const diminuirEmUm = () => { 

//     console.log('diminuindo, valor anterior', contador)
//     setContador(contador - 1)
//   }

  // const zerarContador = () => {

  //   console.log('zerando, valor anterior', contador)
  //   setContador(0)
  // }

  return (
    <div>
      <ButtonAcrescentar />
      <FactorialButton />
      {/* <Exibir contador={contador} />
      <Botao onClick={aumentarEmUm} texto="mais+" />
      <Botao onClick={zerarContador} texto="zerar" />
      <Botao onClick={diminuirEmUm} texto="menos-" /> */}
    </div>
  )
} 

const Exibir = ({ contador }) => <div><h1>{contador}</h1></div>

const Botao = ({ onClick, texto }) => <button onClick={onClick}>{texto}</button>

export default App