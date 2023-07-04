import { useState, useEffect } from 'react'
import './App.css'
import { PostItem } from './PostItem'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => {
        setData(data)
      })
  }, [])
  return (
    <div>
      <h1>Список дел</h1>
      <ul>
        {data.length > 0 ? (
          <div>
            {data.map((post, id) => (
              <PostItem key={id} {...post} />
            ))}
          </div>
        ) : (
          'Постов нет'
        )}
      </ul>
    </div>
  )
}

export default App
