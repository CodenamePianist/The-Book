import { RouterProvider } from 'react-router-dom'
import router from './components/router'
import './App.css'
import Home from './components/Home'

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
