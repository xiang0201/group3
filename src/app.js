// Importing necessary components and libraries
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import SavedDisplay from "./pages/SavedDisplay"
import NotFound from "./pages/NotFound"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Functional component App
export default function App() {
  return (
    // Using React Router for navigation
    <Router>
        {/* Flex container with vertical layout */}
        <div className='flex flex-col justify-between h-screen'>
            {/* Navbar component */}
            <Navbar />
            {/* Main content container */}
            <main className='container mx-auto px-3 pb-12'>
                {/* React Router Routes for different pages */}
                <Routes>
                    <Route path='/' element={<About />} />
                    <Route path='/jobHunt' element={<Home />} />
                    <Route path='/SavedDisplay' element={<SavedDisplay />} />
                    <Route path='/*' element={<NotFound />} />
                </Routes>
            </main>
            {/* Footer component */}
            <Footer />
        </div>
    </Router>
  )
}
