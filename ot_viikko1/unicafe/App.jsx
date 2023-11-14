// tehtävä 1.7 unicafe step2
// Unicafe-ruokalan asiakaspalauteappi
// kerää asiakastyytyväisyydestä: good/neutral/bad 
// kertoo kyselyn tuloksen
// lisätty arvot total, avarage, positive

import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const giveGood = () => {
    console.log('feedback: good')
    setGood(good + 1)  
  }

  const giveNeutral = () => {
    console.log('feedback: neutral')
    setNeutral(neutral + 1)  
  }

  const giveBad = () => {
    console.log('feedback: bad')
    setBad(bad + 1)  
  }

  const total = good + neutral + bad
  const avarage = (good - bad) / total
  const positive = good / total * 100

  return (
    <div>
      <h1>UNICAFE</h1>
      <h1>Give Your Feedback</h1>
      <Button handleClick={giveGood} text="good" />
      <Button handleClick={giveNeutral} text="neutral" />
      <Button handleClick={giveBad} text="bad" />
      <h1>statistics</h1>
      good {good}<br />
      neutral {neutral}<br />
      bad {bad}<br />
      total {total}<br />
      avarage {avarage}<br />
      positive {positive} %<br />
    </div>
  )
}

export default App