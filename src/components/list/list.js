import React from 'react'
import { useAsync } from 'react-async-hook'
import { Link } from '@reach/router'

const List = () => {
  const fetchData = async () =>
    (await fetch('http://localhost:3004/plants')).json()

  const asyncPlant = useAsync(fetchData, [])

  return (
    <div>
      <h2>Plants</h2>
      {asyncPlant.loading && <div>Loading...</div>}
      {asyncPlant.error && <div>Error: {asyncPlant.error.message}</div>}
      {asyncPlant.result && (
        <ul>
          {asyncPlant.result.map((plant, index) => (
            <li key={index}>
              <Link state={plant.id} to={`/details/${plant.id}`}>
                {plant.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default List
