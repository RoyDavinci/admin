import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import {BsThreeDotsVertical,BsFillArrowUpCircleFill} from 'react-icons/bs';
import DashboardCard04 from '../../partials/dashboard/DashboardCard04';
import DashboardCard06 from '../../partials/dashboard/DashboardCard06';
import Banner from '../../partials/Banner';
import UsersInfo from '../../partials/UserDB/UsersInfo';
import { ApiDataContext } from '../../Contexts/DataContext';

function Dashboard() {
  const {count} = useContext(ApiDataContext);
  const [level, setLevel] = useState('Safe');
  const modeCount = count.data;
  
  const DbInfo =[
    {
      name:'Total Report',
      value:3500,
      // value: modeCount.dangerCount + modeCount.panicCount + modeCount.safeCount,
      color:'#6C5DD3',
      repValues:[3500],
    },
    {
      name:'Safe',
      value:2550,
      color:['#51D323','#E4E8EF'],
      repValues:[2550,3500],
    },
    {
      name:'Panic',
      value:938,
      color:['#FF7B00', '#E4E8EF'],
      repValues:[938,3500],
    },
    {
      name:'Danger',
      value:12,
      color:['#E22A26', '#E4E8EF'],
      repValues:[12,3500],
    },
  
  ]
  
    const datasets= [
      {
        label: 'Direct',
        data: [
          800, 1600, 900, 1300, 1950, 1700,
        ],
        backgroundColor:'#51D323',
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
      {
        label: 'Indirect',
        data: [
          4900, 2600, 5350, 4800, 5200, 4800,
        ],
        backgroundColor: '#51D323',
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
    ]
   
  




  return (
    <div className="flex h-screen overflow-hidden ">

      {/* Sidebar */}
      <Sidebar  />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header page={"Dashboard"}/>

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto space-y-10 bg-white">


            <div className="db-info-top">
              <div className='flex justify-between  '>
                {DbInfo.map((info,index)=>(
                  <div className="info-box flex justify-between items-center bg-[#FCFCFC] p-4 w-[23%] rounded-md" key={index}>
                    <div className="info space-y-1">
                      <h5 className='text-sm font-normal text-[#808191]'>{info.name}</h5>
                      <p className='text-2xl font-semibold text-[#11142D]'>{info.value}</p>
                    </div>
                    {/* Pie Chart */}
                    <div className="info-pie h-full">
                      <DashboardCard06 color={info.color} repValues={info.repValues} label={info.name} height={70}/>
                    </div>
                  </div>
                ))}
              </div>
            </div>


            <div className="db-status flex items-start justify-between py-7">
              <div className="status-bar-info space-y-3 w-[73%] gap-x-7">
                <div className="status-bar-header flex justify-between items-center">
                  <h3 className='text-lg text-black font-semibold'>Status Update</h3>

                  <div className="options flex text-[#808191] text-sm font-normal border-b-[#80819152] border-b cursor-pointer">
                    <h5 className={`px-4 pb-2 safe-animate ${level === 'Safe'? 'border-b-[#51D323]':''} border-b-2 rounded-sm`} onClick={()=>setLevel('Safe')}>Safe</h5>
                    <h5 className={`px-4 pb-2 safe-animate ${level === 'Panic'? 'border-b-[#FF7B00]':''} border-b-2 rounded-sm`} onClick={()=>setLevel('Panic')}>Panic</h5>
                    <h5 className={`px-4 pb-2 safe-animate ${level === 'Danger'? 'border-b-[#E22A26]':''} border-b-2 rounded-sm`} onClick={()=>setLevel('Danger')}>Danger</h5>
                  </div>
                </div>

                <div className='flex items-center gap-x-5'>
                  <h3 className='text-2xl font-bold text-[#11142D] '>236,535</h3>
                  <div className={`${level === 'Safe'? 'text-[#51D323]': level === 'Panic'? 'text-[#FF7B00]':'text-[#E22A26]' } flex items-center gap-x-3 safe-animate`}>
                    <BsFillArrowUpCircleFill size={20}/>
                    <div>
                      <h6 className='percent text-base font-medium'>
                        0.8%
                      </h6>
                      <p className='text-xs text-[#808191] font-normal'>Than last day</p>
                    </div>
                  </div>
                </div>

                <div className="bar-chart py-7">
                  <DashboardCard04 datasets={datasets}/>
                </div>
              </div>


              <div className=" px-10 space-y-7 w-[27%]">
                <div className="signUp-top flex w-full justify-between items-center">
                    <h3 className='text-lg text-black font-semibold'>Status Updated </h3>
                    <BsThreeDotsVertical/>
                </div>

                <div className=" space-y-5 h-72 max-h-72 overflow-y-auto no-scrollbar">
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
            <UsersInfo Info={'Reports'}/>



          </div>
        </main>

        <Banner />

      </div>
    </div>
  );
}

export default Dashboard;