import React, { useEffect, useState } from 'react'

const List = () => {
  const [plants, setPlants] = useState([])
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:3004/plants')
      response
        .json()
        .then(response => setPlants(response))
        .catch(error => setHasError(error))
    }
    fetchData()
  }, [])

  return (
    <div>
      <h2>Sensor Plants</h2>
      {hasError ? (
        <div>
          <p>Something went wrong. Please try again later.</p>
        </div>
      ) : (
        <div>
          <ul>
            {plants.map((plant, index) => (
              <li key={index}>{plant.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default List
