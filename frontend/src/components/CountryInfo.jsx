import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import Spinner from './Spinner'

function CountryInfo() {
  const { countryCode } = useParams()
  const [countryInfo, setCountryInfo] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetch(`${process.env.REACT_APP_API_URL}/v1/countries/${countryCode}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`)
        }
        return response.json()
      })
      .then((data) => {
        setCountryInfo(data)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching countries:', error)
        setError(true)
        setIsLoading(false)
      })
  }, [countryCode])

  if (isLoading) return <Spinner />

  if (error)
    return (
      <div className="py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center mb-4 text-blue-500 hover:text-blue-600 transition-colors duration-200"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Go back to country list
          </Link>
          <h1 className="text-3xl font-bold mb-6 text-gray-800">
            Something went wrong! Please try again later.
          </h1>
        </div>
      </div>
    )

  return (
    <div className="min-h-screen bg-[#f4f4f4] py-8 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6">
          <Link
            to="/"
            className="inline-flex items-center mb-4 text-blue-500 hover:text-blue-600 transition-colors duration-200"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Go back to country list
          </Link>
          <div className="flex items-center mb-6">
            <img
              src={countryInfo.flagUrl}
              alt={`Flag of ${countryInfo.name}`}
              width={64}
              height={64}
              className="rounded-md mr-4"
            />
            <h1 className="text-3xl font-bold text-gray-800">
              {countryInfo.name}
            </h1>
          </div>

          <h2 className="text-xl font-semibold mb-3 text-gray-700">
            🗺 Border Countries:{' '}
          </h2>
          <ul className="mb-6">
            {countryInfo.borderCountries.map((country) => (
              <li
                key={country.countryCode}
                className="border-b border-gray-200 last:border-b-0"
              >
                <Link
                  to={`/country/${country.countryCode}`}
                  className="block py-3 hover:bg-gray-50 transition-colors duration-150 ease-in-out"
                >
                  <div className="flex items-center">
                    <span className="text-lg text-gray-800">
                      {country.commonName}
                    </span>
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

          <h2 className="text-xl font-semibold mb-3 text-gray-700">
            👥 Population Over Time
          </h2>
          <div className="h-64 w-full mb-6">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={countryInfo.populationData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis
                  dataKey="year"
                  tick={{ fill: '#4a5568' }}
                  tickLine={{ stroke: '#4a5568' }}
                />
                <YAxis
                  tick={{ fill: '#4a5568' }}
                  tickLine={{ stroke: '#4a5568' }}
                  tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#f7fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '4px',
                  }}
                  formatter={(value) => [
                    `${(value / 1000000).toFixed(2)}M`,
                    'Population',
                  ]}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#4299e1"
                  strokeWidth={2}
                  dot={{ fill: '#4299e1', strokeWidth: 2 }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountryInfo
