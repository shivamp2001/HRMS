import React, { useState } from 'react'
import userimg from "../../assets/userimg.png";
import SalaryCalculation from './SalaryCalculation';
const PayrollMain = () => {
  const[selectTab,setSelectTab]=useState("viewleave");
  return (
    <div className='w-full h-screen bg-[#F4F4F4]'>
      {/* seb nav bar */}
       <div className='flex w-full h-14 bg-[#F4F4F4] items-center
       justify-between pr-[10px] pl-[10px] lg:pl-[40px] lg:pr-[40px] border-b border-gray-400'>

        <div className='flex text-sm items-center gap-2'>
          <p className={`${selectTab==="salarycalculation"?"bg-[#1A457C] text-white":"bg-white"} p-[5px]
           rounded-md cursor-pointer`} onClick={()=>setSelectTab("salarycalculation")}>Salary Calculation</p>

          <p className={`${selectTab==="taxdeduction"?"bg-[#1A457C] text-white":"bg-white"} p-[5px]
           rounded-md cursor-pointer`} onClick={()=>setSelectTab("taxdeduction")}>Tax Deduction</p>

          <p className={`${selectTab==="Payslips"?"bg-[#1A457C] text-white":"bg-white"} p-[5px]
           rounded-md cursor-pointer`} onClick={()=>setSelectTab("Payslips")}>Payslips</p>
        </div>

        <div className="flex text-sm items-center gap-3">
          <img className=' w-10 h-10' src={userimg} alt=""/>
          <p>kiran jadhav</p>
        </div>
      </div>

       <div className="">

         <SalaryCalculation selectTab={selectTab} setSelectTab={setSelectTab}/>
       </div>
    </div>
  )
}

export default PayrollMain
