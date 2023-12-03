import { MdScreenSearchDesktop } from "react-icons/md";
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Navbar({ title }) {
    return (
      <nav className='navbar mb-12 shadow-lg bg-primary text-neutral-content'>
        <div className='container mx-auto'>
          <div className='flex-none px-5 mx-2'>
            <MdScreenSearchDesktop className='inline pr-0.1 text-3xl' />
            <Link to='/' className='px-2 text-lg font-bold align-middle'>
              {title}
            </Link>
          </div>
  
          <div className='flex-1 px-2 mx-2'>
            <div className='flex justify-end'>
              <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>
                Home
              </Link>
              <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
  
  Navbar.defaultProps = {
    title: 'Magic Job Hunting',
  }
  
  Navbar.propTypes = {
    title: PropTypes.string,
  }
  
  export default Navbar