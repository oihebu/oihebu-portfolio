import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { Contact } from './pages/Contact'
import { Layout } from './Layout'

function App(){

    return (
        <Router>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<Home/>}/> 
                    <Route path="/contact" element={<Contact/>}/> 
                </Route>

            </Routes>
        </Router>

    )

}

export default App