import { Outlet } from 'react-router-dom'
import Navbar from '../../components/shared/Navbar'


export const IndexLayout = () => {
  return (
    <>
      <Navbar />
      
      <div className='flex flex-col w-full items-center min-h-screen from-black to-slate-950 via-dark-theme-background text-dark-theme-text_pr bg-gradient-to-br'>
          <Outlet />
      </div>
    </>
    
  )
}
