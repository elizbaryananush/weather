import axios from 'axios'
import React, { useState } from 'react'
import './App.css'

function App() {
  const [location, setLocation] = useState('')
  const [data, setData] = useState({})

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=55e3ecc17e62952f5242fb2dc248cb36`

  const getWeather = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
      })
      setLocation('')
    }
  }

  return (
    <div className="App">
      <input
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={getWeather}
        type="text"
        id='input'
        placeholder='search'
      />
      {
        data.main ? <div>
          <h1>{data.name}</h1>
          <h2>temperature  {Math.floor(data.main.temp) - 273}C°</h2>
          <h2>wind-speed {data.wind.speed}m/s</h2>
          <h2>{data.weather[0].main}</h2>
        </div> : null
      }
    </div>
  )
}

export default App
