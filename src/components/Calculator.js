import { useState } from 'react'
import NumberInput from './NumberInput'
import Number from './Number'
import Operation from './Operation'
import MathOperation from './MathOperation'

const Calculator = () => {
  const [numberInput, setNumberInput] = useState(0)
  const [secondInput, setSecondInput] = useState(0)
  const [operation, setOperation] = useState('')

  const clearAll = () => {
    setNumberInput(0)
    setSecondInput(0)
    setOperation('')
  }

  const clear = () => {
    setNumberInput(0)
  }

  const solveOperation = () => {
    if (operation === '+') {
      setNumberInput(parseInt(secondInput) + parseInt(numberInput))
      setSecondInput(0)
      setOperation('')
    } else if (operation === '-') {
      setNumberInput(parseInt(secondInput) - parseInt(numberInput))
      setSecondInput(0)
      setOperation('')
    } else if (operation === '/') {
      setNumberInput(parseInt(secondInput) / parseInt(numberInput))
      setSecondInput(0)
      setOperation('')
    } else if (operation === 'x') {
      setNumberInput(parseInt(secondInput) * parseInt(numberInput))
      setSecondInput(0)
      setOperation('')
    }
  }

  const mathOperation = o => {
    if (operation === '') {
      setSecondInput(numberInput)
      setNumberInput(0)
      setOperation(o)
    } else {
      solveOperation()
    }
  }

  return (
    <div className='Calculator'>
      <NumberInput input={numberInput} />
      <Operation onClick={clearAll}>AC</Operation>
      <Operation onClick={clear}>C</Operation>
      <Operation onClick={solveOperation}>=</Operation>
      <MathOperation mathOperation={mathOperation}>/</MathOperation>
      <Number setNumberInput={setNumberInput} numberInput={numberInput}>
        7
      </Number>
      <Number setNumberInput={setNumberInput} numberInput={numberInput}>
        8
      </Number>
      <Number setNumberInput={setNumberInput} numberInput={numberInput}>
        9
      </Number>
      <MathOperation mathOperation={mathOperation}>x</MathOperation>
      <Number setNumberInput={setNumberInput} numberInput={numberInput}>
        4
      </Number>
      <Number setNumberInput={setNumberInput} numberInput={numberInput}>
        5
      </Number>
      <Number setNumberInput={setNumberInput} numberInput={numberInput}>
        6
      </Number>
      <MathOperation mathOperation={mathOperation}>+</MathOperation>
      <Number setNumberInput={setNumberInput} numberInput={numberInput}>
        1
      </Number>
      <Number setNumberInput={setNumberInput} numberInput={numberInput}>
        2
      </Number>
      <Number setNumberInput={setNumberInput} numberInput={numberInput}>
        3
      </Number>
      <MathOperation mathOperation={mathOperation}>-</MathOperation>
      <Number setNumberInput={setNumberInput} numberInput={numberInput}>
        0
      </Number>
    </div>
  )
}

export default Calculator
