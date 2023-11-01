import React from 'react'
import Header from '../partials/Header'
import Sidebar from '../partials/Sidebar'
import UsersInfo from '../partials/UserDB/UsersInfo'

const Reports = () => {
  return (
    <div className="flex h-screen overflow-hidden">
            <Sidebar  />

            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-[#FCFCFC]">
                <Header page={"Reports"}/>
                <div className="w-full space-y-10 py-10">
                    <UsersInfo Info={'Reports'}/>
                </div>
            </div>
    </div>
  )
}

export default Reports