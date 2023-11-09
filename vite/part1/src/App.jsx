// version 1.5
// oliot koodiin: kaikki kurssin tiedot yhteen taulukkoon

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header title={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Header = ({title}) => {
  console.log(title)
  return (
    <h1>{title}</h1>
  )
}

const Part = ({name, exercises}) => {
  console.log(name, exercises)
  return (
    <p> 
      {name} {exercises}
    </p>
  )
}

const Content = ({parts}) => {
  console.log(parts)
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.name} name={part.name} exercises={part.exercises} />
      ))}
    </div>
  )
}

const Total = ({parts}) => {
  console.log({parts})
  return (
    <div>
      <p>
      Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}
      </p>
    </div>
  )
}

export default App