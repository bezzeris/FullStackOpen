import { useState } from 'react'

// Definición de componente
const Statistics = (props) => {
  return (
    <div>
      <h1>Statistics</h1>
      <p>Good: {props.good}</p>
      <p>Neutral: {props.neutral}</p>
      <p>Bad: {props.bad}</p>
      <p>All: {props.all}</p>
      <p>Average: {props.average}</p>
      <p>Positive: {props.positive} %</p>
    </div>
  )
}

const App = () => {
  // Clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  console.log(good)
  const [neutral, setNeutral] = useState(0)
  console.log(neutral)
  const [bad, setBad] = useState (0)
  console.log(bad)
  const [all, setAll] = useState(0)
  console.log(all)

  const handleGood = () => {
    setGood(good + 1)
    setAll(all + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }

  // Función average + 0 en vez de NaN
  const average = () => {
    if (all === 0){
      return 0
    } else {
      return (good - bad) / all
    }
  }
  console.log("Average: ", average())

  // Función positive + 0 en vez de NaN
  const positive = () => {
    if (all === 0){
      return 0
    } else {
      return (good / all) * 100
    }
  }
  console.log("Positive: ", positive())
  
  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={handleGood}>Good</button>
      <button onClick={handleNeutral}>Neutral</button>
      <button onClick={handleBad}>Bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average()} positive={positive()} />
    </div>
  )
}

export default App