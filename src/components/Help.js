import React from 'react'

const Help = (props) => {
  return (
    <div>
      <h3>help desk</h3>
      <h4>{props.admin}</h4>
      <p>123-123-1234</p>
      <p>{props.address}, {props.location}</p>
      <button
        onClick={props.onLocationChange}
      >a new address</button>
    </div>
  )
}

export default Help



