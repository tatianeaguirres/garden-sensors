import React from 'react'
import { useAsync } from 'react-async-hook'

const Details = props => {
  const id = props.id

  const fetchData = async id =>
    (await fetch(`http://localhost:3004/plants/${id}/`)).json()

  const asyncPlant = useAsync(fetchData, [id])

  return (
    <div>
      {asyncPlant.loading && <div>Loading...</div>}
      {asyncPlant.error && <div>Error: {asyncPlant.error.message}</div>}
      {asyncPlant.result && (
        <div>
          <h2>{asyncPlant.result.name}</h2>
          <p>quality: {asyncPlant.result.quality}</p>
        </div>
      )}
    </div>
  )
}

export default Details
