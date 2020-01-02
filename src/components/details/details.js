import React from 'react'

const Details = props => {
  const plant = props.location.state

  return (
    <div>
      <h2>{plant.name}</h2>
      <p>quality: {plant.quality}</p>
    </div>
  )
}

export default Details
