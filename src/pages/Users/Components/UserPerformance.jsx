import React from 'react'
import {BsThreeDotsVertical} from 'react-icons/bs'
import Graph1 from '../Images/card-chart.svg'

const UserPerformance = () => {
  return (
    <div className='user-top-outer'>
        <div className="user-top flex justify-between gap-x-10">

            <div className="user-top-chart w-4/6">
                <img src={Graph1} className='w-full' alt='users-graph'/>
            </div>


            <div className="user-top-signUp w-2/6 px-10 py-5 space-y-7">
                <div className="signUp-top flex w-full justify-between items-center">
                    <h3 className='text-lg text-black font-semibold'>User Sign Ups</h3>
                    <BsThreeDotsVertical/>
                </div>

                <div className="signUp-bottm space-y-5 h-60 max-h-60 overflow-y-auto">
                    {
                        ["Barry Chagur", "MooHub", "Technologies", "MooHub Tech","Barry Chagur", "MooHub", "Technologies", "MooHub Tech"].map((users, index)=>(
                            <div className="users-outer flex gap-x-3 items-center" key={index}>
                                <div className="users-image h-12 w-12 rounded-lg bg-black flex justify-center items-center text-white text-lg">DP</div>
                                <div className="users-info space-y-1">
                                    <h4 className='text-sm font-medium text-[#11142D]'>{users}</h4>
                                    <p className='text-xs text-[#808191] font-normal'>Users, location</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserPerformance
