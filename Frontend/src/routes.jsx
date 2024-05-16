import { Home } from "./components/home/Home.jsx"
import { Taller } from './components/taller/Taller.jsx'
import { Tecnología } from './components/tecnologia/Tecnología.jsx'
import { PracticaSupervisada } from './components/practica-supervisada/PracticaSupervisada.jsx'

export const routes = [
    {path: '/', element: <Home/>},
    {path: '/home', element: <Home/>},
    {path: '/taller', element: <Taller/>},
    {path: '/tecnologia', element: <Tecnología/>},
    {path: '/practica-supervisada', element: <PracticaSupervisada/>}
]