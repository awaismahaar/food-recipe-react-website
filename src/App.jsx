import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import TrendingSlider from './components/TrendingSlider'

function App() {
  return (
    <>
    <div className='main'>
     <Header/>
     <Outlet/>
     <TrendingSlider/>
     </div>
    </>
  )
}

export default App
