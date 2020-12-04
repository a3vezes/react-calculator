import React from 'react'

const Number = ({ children, setNumberInput, numberInput }) => {
  const onClickHandler = () => {
    if (numberInput === 0) {
      setNumberInput(children)
    } else {
      setNumberInput(numberInput + children)
    }
  }

  return (
    <div className='Number'>
      <button className='btn btn-number' onClick={onClickHandler}>
        {children}
      </button>
    </div>
  )
}

export default Number
