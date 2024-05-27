import './App.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Calculator from './components/Calculator.jsx'
import Formula from './components/Formula.jsx'
import Project from './components/Project.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {


    return (
        <>
            <BrowserRouter>
                <Navbar />
                <div className="content">               
                    <Routes >
                        <Route exact path="/calories/" element={<Calculator/>} />
                        <Route path="/calories/funcionamiento" element={<Formula />} />
                        <Route path="/calories/proyecto" element={<Project />} />
                    </Routes>                              
                </div>
                <Footer/>
            </BrowserRouter>
        </>
    )
}

export default App

