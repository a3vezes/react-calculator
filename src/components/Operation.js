import React from 'react'

const Operation = ({ children, onClick }) => {
  return (
    <div className='Operation'>
      <button className='btn btn-operation' onClick={onClick}>
        {children}
      </button>
    </div>
  )
}

export default Operation
