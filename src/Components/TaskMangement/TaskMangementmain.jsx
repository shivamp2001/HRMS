import React, { useState } from 'react';
import userimg from "../../assets/userimg.png";
import AssignTask from './AssignTask';

const TaskMangementmain = () => {
  const[selectTab,setSelectTab]=useState("AssignTask");
  return (
    <div className='w-full '>
         <div className='flex w-full h-14 bg-[#F4F4F4] items-center
       justify-between pr-[10px] pl-[10px] lg:pl-[40px] lg:pr-[40px] border-b border-gray-400'>

        <div className='flex text-sm items-center gap-2'>
          <p className={`${selectTab==="AssignTask"?"bg-[#1A457C] text-white":"bg-white"} p-[5px]
           rounded-md cursor-pointer`} onClick={()=>setSelectTab("AssignTask")}>Assign Taskt</p>

          <p className={`${selectTab==="Trackprogress"?"bg-[#1A457C] text-white":"bg-white"} p-[5px]
           rounded-md cursor-pointer`} onClick={()=>setSelectTab("Trackprogress")}>Track progress</p>
        </div>

        <div className="flex text-sm items-center gap-3">
          <img className=' w-10 h-10' src={userimg} alt=""/>
          <p>kiran jadhav</p>
        </div>
      </div>

      <div className="w-full h-full">
        {selectTab==="AssignTask" && <AssignTask/>}
      </div>
    </div>
  )
}

export default TaskMangementmain
