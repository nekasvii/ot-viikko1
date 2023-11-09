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

      <Content topic={part1} number={exercises1} />
      <Content topic={part2} number={exercises2} />
      <Content topic={part3} number={exercises3} />

      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <p>
        <h1>{props.title}</h1>
      </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>{props.topic} {props.number}</p>
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