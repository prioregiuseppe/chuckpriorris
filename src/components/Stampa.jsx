import React from 'react'
import '../styles/Stampa.css'

const Stampa = ({joke}) => {
  return (
    <div className='Stampa'>
      <p id='joke'>{joke}</p>
    </div>
  )
}

export default Stampa
