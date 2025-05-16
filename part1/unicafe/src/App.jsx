import { useState } from 'react'

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <p>{text}: {value}</p>
  )
}

// Definición de componente
const Statistics = (props) => {

  if (props.all === 0){
    return (
      <div>
        <h1>Statistics</h1>
        <h2>No feedback given</h2>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Statistics</h1>
        <StatisticLine text = 'Good' value = { props.good } />
        <StatisticLine text = 'Neutral' value = { props.neutral } />
        <StatisticLine text= 'Bad' value = { props.bad} />
        <StatisticLine text = 'All' value = { props.all } />
        <StatisticLine text = 'Positive' value = { props.positive } />
      </div>
    )
  }
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
  // 0 Ya no es útil porque 1.9: unicaf paso 4
  const average = () => {
    if (all === 0){
      return 0
    } else {
      return (good - bad) / all
    }
  }
  console.log('Average: ', average())

  // Función positive + 0 en vez de NaN
  // 0 Ya no es útil porque 1.9: unicaf paso 4
  const positive = () => {
    if (all === 0){
      return 0
    } else {
      return (good / all) * 100 + ' %'
    }
  }
  console.log('Positive: ', positive())

  return (
    <div>
      <h1>Give feedback</h1>
      <Button text='Good' onClick = {handleGood} />
      <Button text='Neutral' onClick = {handleNeutral} />
      <Button text='Bad' onClick = {handleBad} />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average()} positive={positive()} />
    </div>
  )
}

export default App