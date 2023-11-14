// tehtävä 1.13 anekdootit step2
// antaa taulukosta random anekdootin
// lisätty nappula generoimaan satunnaisen anekdootin
// lisätään anekdootin äänestysmahdollisuus

import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const getRandom = () => {
    const index = Math.floor(Math.random() * anecdotes.length)
    setSelected(index)
    console.log("indeksi: ", index)
  }

  const givePoint = () => {
    const copyTablet = [...votes]
    copyTablet[selected] += 1
    setVotes(copyTablet)
    console.log("äänestetty anekdoottia indeksissä ", selected)
  }

  return (
    <div>
      {anecdotes[selected]} <br />
      <Button handleClick={givePoint} text="vote" />
      <Button handleClick={getRandom} text="next anecdote" />
    </div>
  )
}

export default App