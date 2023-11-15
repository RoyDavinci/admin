

import React, { useContext } from 'react'
import { UsersDataContext } from '../Contexts/UsersContext'

const SideBarWidget = () => {
    const {state} = useContext(UsersDataContext)
    const users = state.users

    const distressedUsers = users.filter(user => user.safetyStatus !== "Safe");

    console.log("Distressed users: ", distressedUsers)
    console.log("Distressed list: ", users)
    
  return (
    <>

                {
                distressedUsers.map((user)=>
                (<div className="users-outer flex gap-x-3 items-center" key={users._id}>
                                <img className="users-image h-12 w-12 rounded-lg bg-black flex justify-center items-center" src={user.profilePhoto}/>
                                <div className="users-info space-y-1">
                                    <h4 className='text-sm font-medium text-[#11142D]'>{user.firstName} {user.lastName}</h4>
                                    <p className='text-xs text-[#808191] font-normal'>{user.safetyStatus}</p>
                                </div>
                            </div>))
                            }
                            </>
  )
}

export default SideBarWidget