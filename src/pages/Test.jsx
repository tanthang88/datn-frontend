import { increment, decrement } from '../redux/couterSlice.jsx'
import { useSelector, useDispatch } from 'react-redux'

export default function Test() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Page Test</h1>
      <div className='inline-flex items-center gap-3 bg-amber-500 rounded px-2 py-2'>
        <button
          className='text-2xl'
          aria-label='Increment Value'
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <p>{count}</p>
        <button aria-label='Decrement' onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </div>
  )
}
