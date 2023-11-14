// tehtävä 1.11 unicafe step6
// Unicafe-ruokalan asiakaspalauteappi
// kerää asiakastyytyväisyydestä: good/neutral/bad 
// kertoo kyselyn tuloksen
// lisätty arvot total, avarage, positive
// siirretty statistiikka omaksi funktiokseen
// lisätty: statistiikka näytetään vasta feedbackin jälkeen
// Button ja StatisticLine omiksi komponenteiksiin
// tilastot HTML-taulukkoon

import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
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
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="total" value={total} />
          <StatisticLine text="avarage" value={avarage.toFixed(1)} />
          <StatisticLine text="positive" value={positive.toFixed(1) + ' %'} /> 
        </tbody>
      </table>
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