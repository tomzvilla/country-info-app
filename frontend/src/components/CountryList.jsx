import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Spinner from './Spinner'

const CountryList = () => {
  const [countries, setCountries] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    fetch(`${process.env.REACT_APP_API_URL}/v1/countries`)
      .then((response) => response.json())
      .then((data) => {
        setCountries(data)
        setIsLoading(false)
      })
      .catch((error) => console.error('Error fetching countries:', error))
  }, [])

  if (isLoading) return <Spinner />

  return (
    <div className="py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Country List 🌎
        </h1>
        <ul className="bg-white rounded-lg shadow overflow-hidden">
          {countries.map((country) => (
            <li
              key={country.countryCode}
              className="border-b border-gray-200 last:border-b-0"
            >
              <Link
                to={`/country/${country.countryCode}`}
                className="block px-4 py-4 hover:bg-gray-50 transition-colors duration-150 ease-in-out"
              >
                <div className="flex items-center">
                  <span className="text-lg text-gray-800">{country.name}</span>
                  <svg
                    className="ml-auto h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CountryList
