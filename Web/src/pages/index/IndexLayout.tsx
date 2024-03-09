import { Link, Outlet } from 'react-router-dom'
import Navbar from '../../components/shared/Navbar'
import { CopyrightCircleFilled } from '@ant-design/icons'
import { Cloudy } from 'lucide-react'


export const IndexLayout = () => {
  return (
    <>
      <Navbar />
      
      <div className='flex flex-col w-full items-center h-full max-h-full from-black to-slate-950 via-dark-theme-background text-dark-theme-text_pr bg-gradient-to-br'>
          <Outlet />
      </div>

      <footer
          className="flex flex-row w-full justify-between bg-dark-theme-secondary py-4 px-8 gap-4"
        >
          <p
            className='text-xs text-slate-200'
          >
            <CopyrightCircleFilled />
            2024 StarsFord. All rights reserved
          </p>

          <Cloudy color="purple" width={50} height={20} />

          <p
              className="text-sm ml-2"
            >
              <Link
                to='/Rules'
                className="underline underline-offset-2 text-slate-200 hover:text-cyan-400"
              >
                Terms & Conditions.
              </Link> 
          </p>
      </footer>
    </>
    
  )
}

