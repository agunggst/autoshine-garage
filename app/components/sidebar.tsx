"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { FaCar, FaChartLine, FaGear, FaGears, FaUsers } from "react-icons/fa6"
import { RxHamburgerMenu } from "react-icons/rx"
import { FaCalendarAlt, FaStar } from "react-icons/fa"

const Sidebar = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false)
  const [activeMenu, setActiveMenu] = useState<string>('')
  const sidebarRef = useRef<HTMLDivElement>(null)

  const sidebarMenu = [
    {
      menuText: 'Dashboard',
      icon: <FaChartLine className="mr-3 font-bold"/>,
      route: '/dashboard'
    },
    {
      menuText: 'Schedule',
      icon: <FaCalendarAlt className="mr-3 font-bold"/>,
      route: '/schedule'
    },
    {
      menuText: 'Services',
      icon: <FaGears className="mr-3 font-bold"/>,
      route: '/services'
    },
    {
      menuText: 'Customers',
      icon: <FaUsers className="mr-3 font-bold"/>,
      route: '/customers'
    },
    {
      menuText: 'Reviews',
      icon: <FaStar className="mr-3 font-bold"/>,
      route: '/reviews'
    },
    // {
    //   menuText: 'Settings',
    //   icon: <FaGear className="mr-3 font-bold"/>,
    //   route: '/settings'
    // },
  ]

  const toggleSidebar = (route: string = '') => {
    setTimeout(() => {
      setActiveMenu(route === '' ? window.location.pathname : route)
    }, 500)
    setIsSideBarOpen(!isSideBarOpen)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
      setIsSideBarOpen(false)
    }
  }

  useEffect(() => {
    setActiveMenu(window.location.pathname)
    if (isSideBarOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isSideBarOpen])

  return (
    <>
      <div className="fixed w-[100vw]">
        <button
          onClick={() => toggleSidebar('')}
          type="button" 
          className="inline-flex bg-white shadow-md items-center p-2 mt-2 ms-3 text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <RxHamburgerMenu className="w-6 h-6"/>
        </button>
      </div>
      <aside 
        id="default-sidebar" 
        ref={sidebarRef} 
        className={`fixed top-0 left-0 w-64 transition-transform bg-white shadow-lg border-r border-gray-200 h-full z-50 ${
          isSideBarOpen ? 'translate-x-0' : '-translate-x-full'
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center">
              <FaCar className="text-white text-lg"/>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">AutoShine</h1>
              <p className="text-sm font-bold text-gray-500">Admin Dashboard</p>
            </div>
          </div>
        </div>
        <nav className="mt-6">
          {
            sidebarMenu.map((item, id) => {
              return (
                <Link key={id} href={item.route}>
                  <div onClick={() => toggleSidebar(item.route)} className="px-4 space-y-2 font-semibold">
                    <span className={`flex items-center px-4 py-3 ${id !== 0 ? 'mt-2' : ''} rounded-lg cursor-pointer ${item.route === activeMenu ? 'text-blue-900 bg-blue-50' : 'text-gray-600 hover:bg-gray-50'}`}>
                      {item.icon}
                      <span>{item.menuText}</span>
                    </span>
                  </div>
                </Link>
              )
            })
          }
        </nav>
      </aside>
    </>
  )
}

export default Sidebar