
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Home from './pages/Home'
import History from './pages/History'
import Header from './components/Header'
import Footer from './components/Footer'

Routes

function App() {

  return (
    <>
    {/* path for landing page(http://localhost:5173/), home(http://localhost:5173/home), history(http://localhost:5173/history) */}
    {/* header */}
    <Header />
     <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/history' element={<History/>} />
     </Routes>

    {/* footer */}
    <Footer/>

    </>
  )
}

export default App
