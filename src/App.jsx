import Navbar from "./components/Navbar"
import Header from './components/Header'
import './App.css'
import HomePage from "./pages/HomePage"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from "./pages/About"
import Projects from "./pages/Projects"


function App() {


  return (
    <div className='main-wrapper'>
    <div className='parent-container'>
        <div className='child-container'>
            <Header/>
            <Router>
              <Navbar/>
              <Routes>
                <Route path="/" element={<HomePage/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/projects" element={<Projects/>}></Route>
              </Routes>
            </Router>
        </div>
    </div>
    </div>
  )
}

export default App
