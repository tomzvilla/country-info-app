import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CountryList from './components/CountryList'
import CountryInfo from './components/CountryInfo'

function App() {
  return (
    <div className="App min-h-screen bg-[#f4f4f4]">
      <Routes>
        <Route exact path="/" element={<CountryList />} />
        <Route path="/country/:countryCode" element={<CountryInfo />} />
      </Routes>
    </div>
  )
}

export default App
