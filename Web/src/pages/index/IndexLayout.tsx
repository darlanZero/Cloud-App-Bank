import {  Outlet } from 'react-router-dom'
import Navbar from '../../components/shared/Navbar'
import Footer from '../../components/shared/Footer'


export const IndexLayout = () => {
  return (
    <>
      <Navbar />
      
      <div className='flex flex-col w-full items-center h-full max-h-full from-black to-slate-950 via-dark-theme-background text-dark-theme-text_pr bg-gradient-to-br'>
          <Outlet />
      </div>

      <Footer />
    </>
    
  )
}

