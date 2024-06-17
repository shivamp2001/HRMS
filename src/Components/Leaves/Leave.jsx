import React, { useState } from 'react'
import userimg from "../../assets/userimg.png";
import { PiCalendarBlankDuotone as Calender } from "react-icons/pi";
import { IoIosCloseCircleOutline as Closeicon } from "react-icons/io";
import { ImSpinner8 as Spinner } from "react-icons/im";
import { BiSolidLike as Likeicon } from "react-icons/bi";
import { BiSolidDislike as Dislikeicon } from "react-icons/bi";
import { Link, useLocation } from 'react-router-dom';


const Leave = () => {
  const[subselectTab,setSubselectTab]=useState("");
  const[showapplyleave,setShowapplyleave] =useState(false);
  const[showStatus,setShowStatus] =useState(false);
  const {pathname} = useLocation();
  return (
    <div className=' relative w-full h-full bg-[#F4F4F4]'>
        
        <div className="hidden sm:block">
        <div className='flex w-full h-14 items-center
       justify-between pr-[10px] pl-[10px] lg:pl-[40px] lg:pr-[40px] border-b border-gray-400'>

        <div className='flex text-sm items-center gap-2'>
          <Link to={"/Leaves/Leave"}><p 
          className={`${pathname==="/Leaves/Leave"?"bg-[#1A457C] text-white":"bg-white"} p-[5px]
           rounded-md cursor-pointer`} >View Leave</p></Link>

          <Link to={"/Leaves/HolidayCalender"}><p 
          className={`${pathname==="/Leaves/HolidayCalender"?"bg-[#1A457C] text-white":"bg-white"} p-[5px]
           rounded-md cursor-pointer`} >Holiday Calender</p></Link>
        </div>

        <div className="flex text-sm items-center gap-3">
          <img className=' w-10 h-10' src={userimg} alt=""/>
          <p>kiran jadhav</p>
        </div>
        </div>

      </div>

      {/* Approvel status box */}
     { showStatus &&
     <div className="flex items-center justify-center w-full h-screen absolute bg-[#0000007d] pl-2 pr-2">
         <div className=" w-full sm:w-[600px] lg:w-[800px] md:w-[700px] 
 bg-white p-0 m-0 min-h-[50%] max-h-[50%] overflow-scroll">
          
           {/* section-1 */}
            <div className="flex items-center w-full h-12 border-b border-gray-400" >
              <p className='text-black text-xl text-center w-[90%]'>Approval Status</p>
               <Closeicon className='w-[10%] text-xl md:text-2xl cursor-pointer text-red-700 '
                onClick={()=>[setShowStatus(false),setSubselectTab("")]}/>
            </div>

            {/* section-2 table data */}
            <div className="flex flex-col justify-center sm:pr-[30px] sm:pl-[30px] md:pr-[50px] md:pl-[50px] 
             ">
            <table className='w-full'>
              <thead>
              <tr className='border-b border-gray-400'>
                <td className='p-3'>Date</td>
                <td className='p-3'>Leave Type</td>
                <td className='p-3'>Status</td>
              </tr>
              </thead>

              <tr className='border-b border-gray-400'>
                <td className='p-3'>06/3/2024</td>
                <td className='p-3'>Sick Leave</td>
                <td className='flex items-center gap-3 p-3 w-full'>
                   <p className='w-[90%] sm:w-[50%] md:w-[50%]'>Pending</p>
                 <Spinner className='text-[#1A457C]'/></td>
              </tr>

              <tr className='border-b border-gray-400'>
                <td className='p-3'>25/03/2024 To 27/03/2024</td>
                <td className='p-3'>Personal leave</td>
                <td className='flex items-center gap-3 p-3'>
                  <p className='w-[90%] sm:w-[50%] '>Approved</p>
                 <Likeicon className='text-[#13D226]'/></td>
              </tr>

              <tr className='border-b border-gray-400'>
                <td className='p-3'>01/01/2024</td>
                <td className='p-3'>Sick Leave</td>
                <td className='flex items-center gap-3 p-3'>
                  <p className='w-[90%] sm:w-[50%] '>Declined</p>
                 <Dislikeicon className='text-[red]'/></td>
              </tr>
              <tr className='border-b border-gray-400'>
                <td className='p-3'>25/03/2024 To 27/03/2024</td>
                <td className='p-3'>Personal leave</td>
                <td className='flex items-center gap-3 p-3'>
                  <p className='w-[90%] sm:w-[50%] '>Approved</p>
                 <Likeicon className='text-[#13D226]'/></td>
              </tr>
              <tr className='border-b border-gray-400'>
                <td className='p-3'>01/01/2024</td>
                <td className='p-3'>Sick Leave</td>
                <td className='flex items-center gap-3 p-3'>
                  <p className='w-[90%] sm:w-[50%] '>Declined</p>
                 <Dislikeicon className='text-[red]'/></td>
              </tr>
              <tr className='border-b border-gray-400'>
                <td className='p-3'>06/3/2024</td>
                <td className='p-3'>Sick Leave</td>
                <td className='flex items-center gap-3 p-3 w-full'>
                   <p className='w-[90%] sm:w-[50%] md:w-[50%]'>Pending</p>
                 <Spinner className='text-[#1A457C]'/></td>
              </tr>
             

            </table>
            </div>

         </div>
      </div>}

      {/* apply for leave box */}
     { showapplyleave && 
     <div className="flex items-center justify-center w-full h-screen  absolute bg-[#0000007d] pl-2 pr-2">
         <div className=" w-full sm:w-[600px] lg:w-[800px] md:w-[700px] h-auto bg-white pb-7 rounded-md ">
          {/* section-1 */}
            <div className="flex items-center w-full h-12 border-b border-gray-400" >
              <p className='text-black text-xl text-center w-[90%]'>Apply for Leave!</p>
               <Closeicon className='w-[10%] text-xl md:text-2xl cursor-pointer text-red-700 '
                onClick={()=>[setShowapplyleave(false),setSubselectTab("")]}/>
            </div>

            {/*section-2*/}
            <div className="flex flex-col gap-6 p-[10px] sm:pl-[20px] sm:pr-[20px] md:pl-[50px] md:pr-[50px]">

                <div className="flex flex-col gap-1">
                    <span className='pl-1'>Employee Name</span>
                    <p className='w-full p-[6px] border border-gray-900 rounded-lg'>Kiran Jadhav</p>
                </div>

                <div className="flex w-full gap-3">
                  {/* 1 */}
                <div className="flex flex-col w-1/2 gap-1">
                  <span>Leave Type</span>
                  <select name="" id="" className='w-full border border-gray-900 rounded-lg p-[6px]'>
                    <option value="">Personal Leave</option>
                    <option value="">Privilege leave</option>
                  </select>
                </div>
                  {/* 2 */}
                <div className="flex flex-col w-1/2 mt-1">
                  <span className=' opacity-0'>l</span>
                  <select name="" id="" className='w-full border border-gray-900 rounded-lg text-black p-[6px]'>
                    <option value="" className='bg-white'>Half Day</option>
                    <option value="" className='bg-white'>Full Day</option>
                  </select>
                </div>
               
                </div>
                {/* date section */}
                <div className="flex w-full gap-3">
                  {/* 1 */}
                <div className="flex flex-col w-1/2 gap-1">
                  <span>Date</span>
                  <input type="date" className='border border-gray-900 rounded-lg text-black p-[6px]' />
                </div>
                  {/* 2 */}
                <div className="flex flex-col w-1/2">
                  <span className=' opacity-0'>l</span>
                  <input type="date" className='border border-gray-900 rounded-lg text-black p-[6px] mt-1' />
                </div>
                </div>
               {/* 3 */}
                <div className="w-full">
                  <textarea name="" id="" cols="10" rows="4"
                   className='w-full border border-gray-900 rounded-lg p-2'></textarea>
                 </div>

                 <button className='w-1/2 border border-gray-900
                  rounded-lg self-center p-1 bg-[#1A457C] text-white'>Submit</button>
            </div>
         </div>
      </div>}
      {/* Leave Apply box End */}

      {/* section-1 */}
      {/* <div className='flex w-full h-14 bg-[#F4F4F4] items-center justify-between pr-[10px] pl-[10px] lg:pl-[40px] lg:pr-[40px]'>

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
      </div> */}

      {/* section-2 */}
      <div className="flex w-full h-14 p-[10px]  justify-end lg:pr-8 bg-[#F4F4F4]" >

          <div className='flex items-center gap-5'>
            <p className={`${subselectTab==="approvestatus"?"bg-[#1A457C] text-white":""} 
               text-sm p-[5px] border border-[#1A457C] rounded-md cursor-pointer`}
               onClick={()=>[setSubselectTab("approvestatus"),setShowStatus(true)]}>Approval status</p>
               
            <p className={`${subselectTab==="applyleave"?"bg-[#1A457C] text-white":""} 
               text-sm p-[5px] border border-[#1A457C] rounded-md cursor-pointer`}
               onClick={()=>[setSubselectTab("applyleave"),setShowapplyleave(true)]}>Apply Leave</p>
          </div>
      </div>
    
     {/* section-3 */}
     <div className="flex flex-col  w-full  p-3 pt-5 lg:pl-[50px] lg:pr-[50px]">

       {/* leave Type main div */}
      <div className="flex flex-row gap-2 h-[170px] bg-[#F4F4F4] overflow-x-auto justify-around">

       {/* leave cart */}
       <div className="flex flex-col gap-3 items-center min-w-32 h-40 bg-white p-[6px] justify-center
        rounded-md lg: w-36 ">
        <p className=' text-sm'>Privilege leave</p>
        <Calender className=' text-xl text-[#00DD16]'/>
        <p className=' text-sm'>0/10</p>
       </div>
       
       <div className="flex flex-col gap-3 items-center min-w-32 h-40 bg-white p-[6px] justify-center
        rounded-md lg: w-36">
        <p className=' text-sm'>Privilege leave</p>
        <Calender className=' text-xl text-[#00DD16]'/>
        <p className=' text-sm'>0/10</p>
       </div>
       
       <div className="flex flex-col gap-3 items-center min-w-32 h-40 bg-white p-[6px] justify-center
        rounded-md lg: w-36">
        <p className=' text-sm'>Privilege leave</p>
        <Calender className=' text-xl text-[#00DD16]'/>
        <p className=' text-sm'>0/10</p>
       </div>
       
       <div className="flex flex-col gap-3 items-center min-w-32 h-40 bg-white p-[6px] justify-center
        rounded-md lg: w-36">
        <p className=' text-sm'>Privilege leave</p>
        <Calender className=' text-xl text-[#00DD16]'/>
        <p className=' text-sm'>0/10</p>
       </div>
       
       <div className="flex flex-col gap-3 items-center min-w-32 h-40 bg-white p-[6px] justify-center
       
       rounded-md lg: w-36">
        <p className=' text-sm'>Privilege leave</p>
        <Calender className=' text-xl text-[#00DD16]'/>
        <p className=' text-sm'>0/10</p>
       </div>
       
       <div className="flex flex-col gap-3 items-center min-w-32 h-40 bg-white p-[6px] justify-center
        rounded-md lg: w-36">
        <p className=' text-sm'>Privilege leave</p>
        <Calender className=' text-xl text-[#00DD16]'/>
        <p className=' text-sm'>0/10</p>
       </div>
       
       <div className="flex flex-col gap-3 items-center min-w-32 h-40 bg-white p-[6px] justify-center
       
       rounded-md lg: w-36">
        <p className=' text-sm'>Privilege leave</p>
        <Calender className=' text-xl text-[#00DD16]'/>
        <p className=' text-sm'>0/10</p>
       </div>
      
    </div>

    {/* section-3 Leave History */}
    <div className="w-full pt-5 pb-4 h-auto mt-5">
        <div className="flex items-center gap-2 w-full h-[50px] border-b border-gray-400 bg-white">
          <div className=' w-3 h-[5px] bg-[#1A457C]'></div>
          <p className=''>Leave History</p>
        </div>

        <div className="">
              <table className='w-full text-[17px]  flex flex-col bg-white'>

                   <tr className='border-b border-gray-300 flex w-full'>
                     <td className='p-2 pt-3 pb-3 w-1/2 md:w-[35%] lg:w-[25%] font-bold text-center'>Date</td>
                     <td className=' p-2 pt-3 pb-3 w-1/2 md:w-[40%] lg:w-[30%] font-bold text-center'>
                      Leave Type</td>
                   </tr>

                   <tr className='border-b border-gray-300 flex w-full '>
                     <td className='p-2 pt-3 pb-3 w-1/2 md:w-[35%] lg:w-[25%] text-center'>06/3/2024</td>
                     <td className=' p-2 pt-3 pb-3 w-1/2 md:w-[40%] lg:w-[30%] text-center'>Sick Leave</td>
                   </tr>

                   <tr className='border-b border-gray-300 flex w-full'>
                     <td className='p-2 pt-3 pb-3 w-1/2 md:w-[35%] lg:w-[25%] text-center'>
                      25/03/2024 To 27/03/2024</td>
                     <td className=' p-2 pt-3 pb-3 w-1/2 md:w-[40%] lg:w-[30%] text-center'>Privilege Leave</td>
                   </tr>

                   <tr className='border-b border-gray-300 flex w-full'>
                     <td className='p-2 pt-3 pb-3 w-1/2 md:w-[35%] lg:w-[25%] text-center'>01/01/2024</td>
                     <td className=' p-2 pt-3 pb-3 w-1/2 md:w-[40%] lg:w-[30%] text-center'>Sick Leave</td>
                   </tr>

                   <tr className='border-b border-gray-300 flex w-full'>
                     <td className='p-2 pt-3 pb-3 w-1/2 md:w-[35%] lg:w-[25%] text-center'>
                      21/12/2023 To 31/12/2023</td>
                     <td className=' p-2 pt-3 pb-3 w-1/2 md:w-[40%] lg:w-[30%] text-center'>Privilege Leave</td>
                   </tr>

                   <tr className='border-b border-gray-300 flex w-full'>
                     <td className='p-2 pt-3 pb-3 w-1/2 md:w-[35%] lg:w-[25%] text-center'>
                      14/11/2023 To 16/11/2023</td>
                     <td className=' p-2 pt-3 pb-3 w-1/2 md:w-[40%] lg:w-[30%] text-center'>Privilege Leave</td>
                   </tr>
 
               </table>
        </div>
    </div>

  </div>


</div>
  )
}

export default Leave
