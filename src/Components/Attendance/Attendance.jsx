import React, { useState } from 'react'
import userimg from "../../assets/userimg.png";
import InOutTime from './InOutTime';
import RecordAttendance from './RecordAttendance';
const Attendance = () => {
  const[selectTab,setSelectTab]=useState("inouttime");
  return (
    <div>
    <div className='flex w-full h-14 bg-[#F4F4F4] items-center
     justify-between pr-[10px] pl-[10px] lg:pl-[40px] lg:pr-[40px] border-b border-gray-400'>

      <div className='flex text-sm items-center gap-2'>
        <p className={`${selectTab==="inouttime"?"bg-[#1A457C] text-white":"bg-white"} p-[5px]
         rounded-md cursor-pointer`} onClick={()=>setSelectTab("inouttime")}>In/Out Time</p>

        <p className={`${selectTab==="attendancerecord"?"bg-[#1A457C] text-white":"bg-white"} p-[5px]
         rounded-md cursor-pointer`} onClick={()=>setSelectTab("attendancerecord")}>Attendance Record</p>
      </div>

      <div className="flex text-sm items-center gap-3">
        <img className=' w-10 h-10' src={userimg} alt=""/>
        <p>kiran jadhav</p>
      </div>
    </div>

    {selectTab==="inouttime" && <InOutTime/>}
    {selectTab==="attendancerecord" && <RecordAttendance/>}
  </div>
  )
}

export default Attendance
