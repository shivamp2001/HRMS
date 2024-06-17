import React, { useState } from 'react';
import userimg from "../../assets/userimg.png";
import Leave from './Leave';
import HolidayCalender from './HolidayCalender';
const Leaves = () => {
  const[selectTab,setSelectTab]=useState("viewleave");
  return (
    <div className='w-full h-auto'>
      <div className='flex w-full h-14 bg-[#F4F4F4] items-center
       justify-between pr-[10px] pl-[10px] lg:pl-[40px] lg:pr-[40px] border-b border-gray-400'>

        <div className='flex text-sm items-center gap-2'>
          <p className={`${selectTab==="viewleave"?"bg-[#1A457C] text-white":"bg-white"} p-[5px]
           rounded-md cursor-pointer`} onClick={()=>setSelectTab("viewleave")}>View Leave</p>

          <p className={`${selectTab==="holidaycalender"?"bg-[#1A457C] text-white":"bg-white"} p-[5px]
           rounded-md cursor-pointer`} onClick={()=>setSelectTab("holidaycalender")}>Holiday Calender</p>
        </div>

        <div className="flex text-sm items-center gap-3">
          <img className=' w-10 h-10' src={userimg} alt=""/>
          <p>kiran jadhav</p>
        </div>
      </div>

      {selectTab==="viewleave" && <Leave/>}
      {selectTab==="holidaycalender" && <HolidayCalender/>}
    </div>
  )
}

export default Leaves
