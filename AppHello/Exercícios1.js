const Header = (props) => {
    return(
      <>
      <h1>{props.course}</h1>
      </>
     )
    }
  
    const Content = (props) => {
      return(
        <div>
        <Part parte={props.parte} exercise={props.exercise}/>
        <Part parte={props.parte1} exercise={props.exercise1}/>
        <Part parte={props.parte2} exercise={props.exercise2}/>
        </div>
      )
    }
  
    const Part = (props) => {
      return(
        <div>
        <p>Parte "{props.parte}", exercise {props.exercise}</p>
        </div>
      )
    }
  
  const Total =(props) =>{
    return(
      <>
      <p>O número total de exercícios é {props.total1 + props.total2 + props.total3}</p>
      </>
    )
  }
  
  
  const App = () => {
    const course = 'Desenvolvimento de aplicação Half Stack'
    const part1 = 'Fundamentos da biblioteca React'
    const exercises1 = 10
    const part2 = 'Usando props para passar dados'
    const exercises2 = 7
    const part3 = 'Estado de um componente'
    const exercises3 = 14
  
    return (
      // <div>
      //   <Header course={course} />
      //   <Content ... />
      //   <Total ... />
      // </div>
      <div>
        <Header course={course} />
        {/* <h1>{course}</h1> */}
        {/* <p>
          {part1} {exercises1}
        </p> */}
        {/* <Content parte={part1} exercise={exercises1} />
        <Content parte={part2} exercise={exercises2} />
        <Content parte={part3} exercise={exercises3} /> */}
        <Content 
        parte={part1} exercise={exercises1}
        parte1={part2} exercise1={exercises2}
        parte2={part3} exercise2={exercises3}
         />
        {/* <p>
          {part2} {exercises2}
        </p>
        <p>
          {part3} {exercises3}
        </p> */}
        {/* <p>Number of exercises {exercises1 + exercises2 + exercises3}</p> */}
        <Total total1={exercises1} total2={exercises2} total3={exercises3}/>
      </div>
    )
  }