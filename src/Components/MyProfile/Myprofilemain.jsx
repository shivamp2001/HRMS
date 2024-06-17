import React, { useState } from 'react'
import Personalinfo from './Personalinfo';
import Qualification from './Qualification';
import BankingDetails from './BankingDetails';

const Myprofilemain = () => {
  const[selectTab,setSelectTab]=useState("personalinformation");
  return (
    <div>
      <div className=" hidden sm:block">
       <div className='flex w-full h-14 bg-[#F4F4F4] items-center 
       justify-between pr-[10px] pl-[10px] lg:pl-[40px] lg:pr-[40px] border-b border-gray-400'>

        <div className='flex text-sm items-center gap-2'>
          <p className={`${selectTab==="personalinformation"?"bg-[#1A457C] text-white":"bg-white"} p-[5px]
           rounded-md cursor-pointer`} onClick={()=>setSelectTab("personalinformation")}>
            Personal Information</p>

          <p className={`${selectTab==="Qualification"?"bg-[#1A457C] text-white":"bg-white"} p-[5px]
           rounded-md cursor-pointer`} onClick={()=>setSelectTab("Qualification")}>Qualification</p>

          <p className={`${selectTab==="BankingDetails"?"bg-[#1A457C] text-white":"bg-white"} p-[5px]
           rounded-md cursor-pointer`} onClick={()=>setSelectTab("BankingDetails")}>Banking Details</p>
        </div>
      </div>
      </div>

      <div>
        {selectTab ==="personalinformation" && <Personalinfo/>}
        {selectTab ==="Qualification" && <Qualification/>}
        {selectTab ==="BankingDetails" && <BankingDetails/>}
      </div>
    </div>
  )
}

export default Myprofilemain
