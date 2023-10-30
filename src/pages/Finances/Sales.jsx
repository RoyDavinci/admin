import React from 'react'
import Header from '../../partials/Header'
import Sidebar from '../../partials/Sidebar'

const Sales = ({sidebarOpen,setSidebarOpen}) => {
  return (
    <div>
        <div className="flex h-screen overflow-hidden">
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-[#FCFCFC]">
                <Header/>
                <div className="w-full space-y-10">
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sales