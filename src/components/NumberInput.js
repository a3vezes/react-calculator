import React from 'react'

const NumberInput = ({ input }) => {
  return (
    <div className='NumberInput'>
      <input
        type='text'
        name='numberInput'
        id='numberInput'
        value={input}
        max='8'
      />
    </div>
  )
}

export default NumberInput
