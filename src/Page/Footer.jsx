import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <section className='w-full overflow-hidden bg-white'>
      <main>
        {/* footer-header */}
        <div className='border-b-2 border-t-2 border-black py-4 w-full bg-slate-100'>
          <div className='flex justify-between items-center container'>
            <div className='grid sm:grid-cols-1 md:grid-cols-5 text-center gap-7'data-aos='zoom-in' data-aos-delay='200'>
              {/* footer-menu */}
              <Link to={'/'} className='font-text'>home</Link>
              <Link to={'/about'} className='font-text'>about</Link>
              <Link to={'/courses'} className='font-text'>courses</Link>
              <Link to={'/reviewsa'} className='font-text'>reviews</Link>
              <Link to={'/contact'} className='font-text'>contact</Link>
            </div>
            {/* footer-logo */}
            <Link to={'/'} className='font-title' data-aos='zoom-in' data-aos-delay='200'>E-Study</Link>
          </div>
        </div>

        {/* footer-footer */}
        <div data-aos='zoom-in' data-aos-delay='200'>
          <div className='text-black flex justify-center items-center mt-4 mb-12 py-5'>
            @copyright developed by <span className='text-green-300'>champion proramers</span> All rights reserved
          </div>
        </div>
      </main>
    </section>
  )
}

export default Footer