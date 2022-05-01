import { BiCube } from 'react-icons/bi'
import { MdOutlineScreenshot } from 'react-icons/md'
import { AiOutlineGift } from 'react-icons/ai'
import { BsBook, BsFillStarFill } from 'react-icons/bs'

function Header() {
  return (
    <div className="sticky top-0 z-50">
      <div className="flex items-center justify-center space-x-5 border-b p-5">
        <a href="/" className="decoration-none">
          <div className="flex items-center justify-center space-x-1">
            <BsBook className="h-4 w-4" />
            <p>Overview</p>
          </div>
        </a>
        <a href="/" className="decoration-none">
          <div className="flex items-center justify-center space-x-1">
            <MdOutlineScreenshot className="h-4 w-4" />
            <p>Repositories</p>
          </div>
        </a>
        <a href="/">
          <div className="flex items-center justify-center space-x-1">
            <AiOutlineGift className="h-4 w-4" />
            <p>Projects</p>
          </div>
        </a>
        <a href="/" className="decoration-none">
          <div className="flex items-center justify-center space-x-1">
            <BiCube className="h-4 w-4" />
            <p>Packages</p>
          </div>
        </a>
        <a href="/" className="decoration-none">
          <div className="flex items-center justify-center space-x-1">
            <BsFillStarFill className="h-4 w-4" />
            <p>Stars</p>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Header
