// Importing necessary components and libraries
import { HiAcademicCap } from "react-icons/hi2";
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

// Functional component Navbar with a title prop
function Navbar({ title }) {
    return (
      // Navigation bar with styling classes
      <nav className='navbar mb-12 shadow-lg bg-primary text-neutral-content'>
        <div className='container mx-auto'>
          {/* Logo and title section */}
          <div className='flex-none px-2 mx-2 h-30 flex items-center'>
            <HiAcademicCap className='inline pr-0.5 text-5xl text-white' />
            <Link to='/' className='px-6 text-2xl font-bold italic align-middle font-serif text-white'>
              {title}
            </Link>
          </div>
  
          {/* Navigation links section */}
          <div className='flex-1 px-2 mx-2'>
            <div className='flex justify-end text-white'>
              {/* Navigation links */}
              <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>
                About
              </Link>
              <Link to='/jobHunt' className='btn btn-ghost btn-sm rounded-btn'>
                Search
              </Link>
              <Link to='/SavedDisplay' className='btn btn-ghost btn-sm rounded-btn'>
                Saved Notes
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
  
// Default props for the Navbar component
Navbar.defaultProps = {
    title: 'CareerPilot: Personal Job Application Portal',
}

// Prop types for the Navbar component
Navbar.propTypes = {
    title: PropTypes.string,
}

// Export the Navbar component
export default Navbar;
