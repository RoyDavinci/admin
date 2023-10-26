import React, { useState } from 'react';
import Header from '../../partials/Header';
import Sidebar from '../../partials/Sidebar';
import UserPerformance from './Components/UserPerformance';
import UserReadings from './Components/UserReadings';





const Users = ({ sidebarOpen,setSidebarOpen}) => {

    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                <Header/>
                <div className="w-full space-y-10">    
                    <UserPerformance/>
                    <UserReadings/>
                </div>
                
            </div>
        </div>
  )
}

export default Users