import { Route, Routes } from 'react-router-dom'
import '../src/styles/app.scss'
import { Home } from './components/Home/Home'
import { Info } from './components/Info/Info'

export const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/info' element={<Info />} />
        </Routes>
    )
}
