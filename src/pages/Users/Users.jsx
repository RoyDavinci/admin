import React, { useState } from 'react';
import Header from '../../partials/Header';
import Sidebar from '../../partials/Sidebar';
import UsersInfo from '../../partials/UserDB/UsersInfo';
import UserPerformance from './Components/UserPerformance';
import UserReadings from './Components/UserReadings';





const Users = ({ sidebarOpen,setSidebarOpen}) => {

    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-[#FCFCFC]">
                <Header page={"Users"}/>
                <div className="w-full space-y-10">    
                    <UserPerformance/>
                    <UserReadings/>
                    <UsersInfo Info={'Logged Users'}/>
                </div>
                
            </div>
        </div>
  )
}

export default Users