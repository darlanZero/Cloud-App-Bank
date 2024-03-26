import { CopyrightCircleFilled } from "@ant-design/icons"
import { Cloudy } from "lucide-react"
import { Link } from "react-router-dom"


const Footer = () => {
  return (
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
  )
}

export default Footer