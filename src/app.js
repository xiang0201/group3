import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import SavedDisplay from "./pages/SavedDisplay"
import NotFound from "./pages/NotFound"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


export default function App() {
  return (
    <Router>
        <div className='flex flex-col justify-between h-screen'>
            <Navbar />
            <main className='container mx-auto px-3 pb-12'>
                <Routes>
                    <Route path='/' element={<About />} />
                    <Route path='/jobHunt' element={<Home />} />
                    <Route path='/SavedDisplay' element={<SavedDisplay />} />
                    <Route path='/*' element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
        </div>
    </Router>
  )
}