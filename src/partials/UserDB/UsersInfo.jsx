import React from 'react'
import {BsFillCaretDownFill,BsSearch} from 'react-icons/bs'
import {PiCaretUpDownFill} from 'react-icons/pi'

const UsersInfo = ({Info}) => {
  return (
    <div className='users-info-outer pb-10'>
        <div className="users-info-filter flex  items-center px-7">
            <h3 className='w-2/6 text-base font-medium text-black'>{Info}</h3>

            <div className='flex justify-evenly gap-x-5 items-center w-full text-black'>
                <div className='w-[35%] filter-outer px-0'>
                    <BsSearch className='absolute top-[50%] translate-y-[-50%] left-2'/>
                    <input type="text" className='w-full border-none outline-none relative h-full bg-transparent pl-7 ' placeholder='Search'/>
                </div>
                
                <div className='filter-outer px-0 border'>
                    <select name="" id="" className='w-full outline-none border-none relative h-full bg-transparent'>
                        <option value="" disabled selected> Category</option>
                        <option value="fire">Fire</option>
                        <option value="traffic">Traffic</option>
                        <option value="fighting">Fighting</option>
                    </select>
                </div>
                
                
                <div className='filter-outer'>
                    <h3>Date</h3>
                    <BsFillCaretDownFill/>
                </div>
            </div>
            
        </div>

        <hr className='bg-[#C1C1C1] my-5 px-3'/>


        <div className="user-info-details">
            <div className="  max-w-full overflow-x-auto no-scrollbar text-lg font-medium text-black">
                
                <div className='min-w-[85rem] bg-[#F4F4F4] user-details-header'>
                    <div className=' flex justify-start pl-[10%]  w-full gap-x-10  h-12'>
                        {
                            ["User ID", "Report ID", "Name", "Location", "Category"].map((title, index)=>(
                            <h3 className={`flex items-center justify-between min-w-[12rem]  ${index=== 2? '!min-w-[17rem] max-w-[17rem] ' : ' max-w-[12rem] '}`} key={index}>
                                    <h4> {title}</h4>
                                    <PiCaretUpDownFill/>
                                </h3>
                            ))
                        }
                    </div>
                </div>
                

                <div className="details-inner min-w-[85rem] text-[#333] text-base font-normal">
                    <div className=' h-12 flex items-center justify-between gap-x-5 w-full'>

                        <div className='flex justify-center items-center w-[10%]'>
                            <input type="checkbox" name="" id="" className='accent-black border-black outline-none'/>
                        </div>

                        <div className='flex justify-start w-full items-center gap-x-10'>
                            <h4 className='user-dt-style'>QRS33TY</h4>
                            <h4 className='user-dt-style'>EA517DF</h4>
                            <h4 className='min-w-[17rem] max-w-[17rem] '> Ghost Guest</h4>
                            <h4 className='user-dt-style'>Ikeja town h...</h4>
                            <h4 className='user-dt-style'>Fighting</h4>
                        </div>
                    </div>

                    <div className=' h-12 flex items-center justify-between gap-x-5 w-full'>

                        <div className='flex justify-center items-center w-[10%]'>
                            <input type="checkbox" name="" id="" className='accent-black border-black outline-none'/>
                        </div>

                        <div className='flex justify-start w-full items-center gap-x-10'>
                                <h4 className='user-dt-style'>QRS33TY</h4>
                                <h4 className='user-dt-style'>EA517DF</h4>
                                <h4 className='min-w-[17rem] max-w-[17rem] '> Moo-Hub Ghost Guest</h4>
                                <h4 className='user-dt-style'>Ikeja town h...</h4>
                                <h4 className='user-dt-style'>Fire</h4>
                        </div>
                    </div>

                    <div className=' h-12 flex items-center justify-between gap-x-5 w-full'>

                        <div className='flex justify-center items-center w-[10%]'>
                            <input type="checkbox" name="" id="" className='accent-black border-black outline-none'/>
                        </div>

                        <div className='flex justify-start w-full items-center gap-x-10'>
                                <h4 className='user-dt-style'>QRS33TY</h4>
                                <h4 className='user-dt-style'>EA517DF</h4>
                                <h4 className='min-w-[17rem] max-w-[17rem] '> Moo-Hubghost Guest</h4>
                                <h4 className='user-dt-style'>Ikeja town h...</h4>
                                <h4 className='user-dt-style'>Traffic</h4>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

    </div>
  )
}

export default UsersInfo