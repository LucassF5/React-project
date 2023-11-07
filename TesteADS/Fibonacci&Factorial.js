// Criar uma aplicação em React com dois componentes botões.

// O primeiro componente deve se chamar "FibonacciButton" e deve guardar uma variável de estado chamada "contador":
// O botão deve ser capaz de responder a um clique e, a cada clique, deve incrementar o estado "contador" em 1;
// O botão deve exibir um texto no formato: "O 1º número de Fibonacci é 1" e atualizar os valores para o respectivo número de Fibonacci sempre que for clicado.
// O segundo componente deve se chamar "FatorialButton" e também deve guardar uma variável de estado chamada "contador":
// O botão deve ser capaz de responder a um clique e, a cada clique, deve incrementar o estado "contador" em 1;
// O botão deve exibir um texto no formato: "O Fatorial de 2 é 2" e atualizar os valores para o fatorial do contador sempre que for clicado.
// Anexos:
// Link com passo-a-passo de como declarar um componente botão em React;
// Arquivo `App.js` exemplificando como criar um botão "ExemploButton". 
// Atenção: Entregar apenas um arquivo chamado `App.js`.


import { useState } from 'react'


const FibonacciButton = () => {
const [ contador, setContador ] = useState(0)

function fibonacci(conta2) {
if (conta2 <= 1) return conta2;
return fibonacci(conta2-1) + fibonacci(conta2-2);
}

return(
<div>
    {/* <h1>Fibonacci: </h1> */}
    <h1>O {contador}º número de Fibonacci é {fibonacci(contador)} </h1>
    <button onClick={() => setContador(contador+1)}>
    ACRESCENTAR Fibonacci
    </button>
</div>
)

  
}
const FatorialButton = () => {

const [ contador, setContador ] = useState(0)
const factorial = (conta) => {
    if (conta === 0 || conta === 1) 
    return 1;

    else 
    return conta * factorial(conta - 1);
    }

return(  
    <div>
    <h1>O Fatorial de {contador} é {factorial(contador)}</h1>
    <button onClick={() => setContador(contador+1)}>
        ACRESCENTAR Factorial
    </button>
    </div>
)
}


const App = () => {

  return (
    <div>
      <FibonacciButton />
      <FatorialButton />
    </div>
  )
} 

export default App