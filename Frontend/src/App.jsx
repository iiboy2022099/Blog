import { useRoutes } from 'react-router-dom'
import { routes } from './routes.jsx'
import { Toaster } from 'react-hot-toast'
import { Navbar } from './components/navbar/Navbar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './components/navbar/Navbar.css'
import '../src/Content.css'

function App() {
  const element = useRoutes(routes)

  return (
    <>
      <Navbar/>
      <div style={{ position: 'relative', top: '100px'}}> 
        {element}
      </div>
      <Toaster position='bottom-right' reverseOrder={false}/>
    </>
  )
}

export default App
