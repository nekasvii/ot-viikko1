// tehtävä 1.9 unicafe step2
// Unicafe-ruokalan asiakaspalauteappi
// kerää asiakastyytyväisyydestä: good/neutral/bad 
// kertoo kyselyn tuloksen
// lisätty arvot total, avarage, positive
// siirretty statistiikka omaksi funktiokseen
// lisätty: statistiikka näytetään vasta feedbackin jälkeen

import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const Statistics = ({ good, neutral, bad}) => {
  const total = good + neutral + bad
  const avarage = (good - bad) / total
  const positive = good / total * 100

  if (total == 0) {
    return (
      <div> <br /> No feedback given</div>
    )
  }
  return (
    <div>
    <h2>statistics</h2>
      good {good}<br />
      neutral {neutral}<br />
      bad {bad}<br />
      total {total}<br />
      avarage {avarage}<br />
      positive {positive} %<br />
    </div>
  )
}

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

  return (
    <div>
      <h1>UNICAFE</h1>
      <h2>Give Your Feedback</h2>
      <Button handleClick={giveGood} text="good" />
      <Button handleClick={giveNeutral} text="neutral" />
      <Button handleClick={giveBad} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App