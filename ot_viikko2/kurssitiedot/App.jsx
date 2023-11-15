// teht 2.1 kurssitiedot step6
// pohjana teht 1.5 koodi, johon jatketaan 
// siirretään komponenttien käsiteltäväksi:
// Header, Content, Course ja Part
// importataan Course, jolle on ulkoistettu kaikki kurssitetojen käsittely

import Course from './components/Course'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App