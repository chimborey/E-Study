import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineCloseFullscreen } from "react-icons/md";

const Navbar = () => {

  // scrolled
  const [isScrolled, setIsScrolled] = React.useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  // click menu

  const [isOpenMenu, setIsOpenMenu] = React.useState("home")


  // click menunav
  const [isOpenMenuNav, setIsOpenMenuNav] = React.useState(false)





  return (
    <section className={`w-full top-0 left-0 z-50 backdrop-blur-md shadow-md fixed border-slate-700 ${isScrolled ? '' : 'bg-white'}`}>
      <nav className='container flex justify-between items-center h-14' data-aos='zoom-in' data-aos-delay='100'>
        {/* logo */}
        <Link to={'/'} className='font-title'>E-Study</Link>

        {/* menu */}

        <div className='py-14 hidden md:block'>
          <div className='flex justify-between items-center gap-7'>
            <Link to={'/'} onClick={()=> setIsOpenMenu("home")} className='font-text relative'>{isOpenMenu === "home" ? <hr /> : <></>} home </Link>
            <Link to={'/about'} onClick={()=> setIsOpenMenu("about")} className='font-text relative'>{isOpenMenu === "about" ? <hr /> : <></>} about </Link>
            <Link to={'/courses'} onClick={()=> setIsOpenMenu("courses")} className='font-text relative'>{isOpenMenu === "courses" ? <hr /> : <></>} courses </Link>
            <Link to={'/reviews'} onClick={()=> setIsOpenMenu("reviews")} className='font-text relative'>{isOpenMenu === "reviews" ? <hr /> : <></>} reviews </Link>
            <Link to={'/contact'} onClick={()=> setIsOpenMenu("conatct")} className='font-text relative'>{isOpenMenu === "contact" ? <hr /> : <></>} conatct </Link>
          </div>
        </div>

        {/* click menunav */}
        <div>
          <button className='py-4 md:hidden'>
            {
              isOpenMenuNav ? 
              <MdOutlineCloseFullscreen size={25} className='text-black' onClick={()=> setIsOpenMenuNav (!isOpenMenuNav)}/>
              :
              <GiHamburgerMenu size={25} className='text-black' onClick={()=> setIsOpenMenuNav (!isOpenMenuNav)}/>
            }
          </button>
        </div>
      </nav>

      {/* menu mobile */}

      <div className={`w-full py-14 duration-300 transition-all md:hidden absolute -left-[550px] bg-green-500 text-black ${isOpenMenuNav ? 'left-[0px]' : 'left-[550px]'}`}>
          <div className='flex flex-col justify-center items-center space-y-4'>
            <Link to={'/'} onClick={()=> setIsOpenMenu("home")} className='font-text relative'>{isOpenMenu === "home" ? <hr /> : <></>} home </Link>
            <Link to={'/about'} onClick={()=> setIsOpenMenu("about")} className='font-text relative'>{isOpenMenu === "about" ? <hr /> : <></>} about </Link>
            <Link to={'/courses'} onClick={()=> setIsOpenMenu("courses")} className='font-text relative'>{isOpenMenu === "courses" ? <hr /> : <></>} courses </Link>
            <Link to={'/reviews'} onClick={()=> setIsOpenMenu("reviews")} className='font-text relative'>{isOpenMenu === "reviews" ? <hr /> : <></>} reviews </Link>
            <Link to={'/conatct'} onClick={()=> setIsOpenMenu("conatct")} className='font-text relative'>{isOpenMenu === "conatct" ? <hr /> : <></>} conatct </Link>
          </div>
        </div>
    </section>
  )
}

export default Navbar