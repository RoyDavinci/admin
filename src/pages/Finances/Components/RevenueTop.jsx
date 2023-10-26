import React from 'react'
import Graph4 from '../Images/revenue-graph.svg'
import {BsDot} from 'react-icons/bs'


const RevenueTop = () => {
  return (
    <div className='flex justify-between items-center px-14 pt-5'>
        {
            ["Gross Revenue", "Net Revenue", "Total Revenue"].map((maps, index)=>(
                <div key={index}>
                    <h3 className='font-medium text-lg text-[#2A2A2A]'>{maps}</h3>

                    <div className='flex justify-evenly items-center'>
                        <img src={Graph4} alt='revenue-placeholder'/>

                        <ul>
                            <li className='flex justify-between items-center w-full'>
                                <BsDot size={40} color={'#51D32'}/>
                                <span className='text-[#808191]'>20%</span>
                            </li>

                            <li className='flex justify-between items-center w-full'>
                                <BsDot size={40} color={'#FF7B00'}/>
                                <span className='text-[#808191]'>15%</span>
                            </li>

                            <li className='flex justify-between items-center w-full'>
                                <BsDot size={40} color={'#E22A26'}/>
                                <span className='text-[#808191]'>5%</span>
                            </li>
                        </ul>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default RevenueTop