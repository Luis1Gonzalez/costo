import React from 'react'
import CardSup from './CardSup'
import CardMed from './CardMed'

const Wrapwhite = () => {
  return (
    <div className='bg-white p-[6px] rounded-md shadow-2xl'>
              <CardSup /> 
              <CardMed />
    </div>
  )
}

export default Wrapwhite
