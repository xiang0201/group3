import { MdScreenSearchDesktop } from "react-icons/md";

function Footer() {
    const footerYear = new Date().getFullYear()
  
    return (
      <footer className='footer p-5 bg-primary text-neutral-content footer-center'>
        <div>
        <MdScreenSearchDesktop className='inline pr-0.1 text-3xl' />
          <p>Copyright &copy; {footerYear} All rights reserved</p>
        </div>
      </footer>
    )
  }
  
  export default Footer