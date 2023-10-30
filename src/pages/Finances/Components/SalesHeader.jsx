import React from 'react'

const SalesHeader = () => {
  return (
    <div>
        <div>
            <h3></h3>
            <p></p>
        </div>
        <div className='filter-outer px-0 border'>
            <select name="" id="" className='w-full outline-none border-none relative h-full bg-transparent'>
                <option value="" disabled selected> Category</option>
                {
                    ["January", "February", "March", "April", "May", "June", "July", "August", "September","October", "November","December"].map((month, index)=>(
                        <option value={month} key={index}>{month}</option>
                    ))
                }
                
            </select>
        </div>
    </div>
  )
}

export default SalesHeader