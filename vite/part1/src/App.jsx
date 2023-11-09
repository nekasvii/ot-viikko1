// kolme komponenttia Header nimi
// Content osat ja teht määrät
// ja Total teht yhteismäärä
// kaikki data komponentissa App, joka välittää propseilla

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header title={course}/>

      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />

      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
        <h1>{props.title}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <p> 
      {props.topic} {props.number}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part topic={props.part1} number={props.exercises1} />
      <Part topic={props.part2} number={props.exercises2} />
      <Part topic={props.part3} number={props.exercises3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
      Number of exercises {props.total}
      </p>
    </div>
  )
}

export default App