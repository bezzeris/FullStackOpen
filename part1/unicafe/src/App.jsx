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
    <p style={{ margin: '0px'}}>{text} {value}</p>
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
        <table>
          <tbody>
            <tr>
              <td><StatisticLine text = 'Good: '/></td>
              <td><StatisticLine value = { props.good } /></td>
            </tr>
            <tr>
              <td><StatisticLine text = 'Neutral: '/></td>
              <td><StatisticLine value = { props.neutral } /></td>
            </tr>
            <tr>
              <td><StatisticLine text='Bad: ' /></td>
              <td><StatisticLine value = { props.bad } /></td>
            </tr>
            <tr>
              <td><StatisticLine text = 'All: '/></td>
              <td><StatisticLine value = { props.all } /></td>
            </tr>
            <tr>
              <td><StatisticLine text = 'Average: '/></td>
              <td><StatisticLine value = { props.average } /></td>
            </tr>
            <tr>
              <td><StatisticLine text = 'Positive: '/></td>
              <td><StatisticLine value = { props.positive } /></td>
            </tr>
          </tbody>
        </table>
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