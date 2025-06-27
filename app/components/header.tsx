import { FaBell } from "react-icons/fa"

const Header = () => {
  return (
    <>
      <div id="header" className="bg-white shadow-sm border-b border-gray-200 px-6 py-4 pt-14 sm:pt-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
              Dashboard Overview
            </h2>
            <p className="text-sm text-gray-500 font-semibold sm:text-base">
              Welcome back! Here's what's happening today.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header