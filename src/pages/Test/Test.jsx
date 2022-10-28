import { useParams } from 'react-router'

export function Test() {
  let test = useParams()
  console.log(test)
  return (
    <>
      <h1>Page test</h1>
    </>
  )
}
