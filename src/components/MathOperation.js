import React from 'react'

const MathOperation = ({ children, mathOperation }) => {
  return (
    <div className='Operation'>
      <button
        className='btn btn-operation'
        onClick={() => {
          mathOperation(children)
        }}
      >
        {children}
      </button>
    </div>
  )
}

export default MathOperation
