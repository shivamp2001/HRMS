import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import userimg from "../../assets/userimg.png";

const InOutTime = () => {
  const {pathname} = useLocation();
  return (
    <div>

     <div className="hidden sm:block">
     <div className='flex w-full h-14 bg-[#F4F4F4] items-center
     justify-between pr-[10px] pl-[10px] lg:pl-[40px] lg:pr-[40px] border-b border-gray-400'>

      <div className='flex text-sm items-center gap-2'>
        <Link to={"/Attendance/InOutTime"}><p className={`${pathname==="/Attendance/InOutTime"?
        "bg-[#1A457C] text-white":"bg-white"} p-[5px] rounded-md cursor-pointer`} >In/Out Time</p></Link>

        <Link to={"/Attendance/RecordAttendance"}><p className={`${pathname==="/Attendance/RecordAttendance"?
        "bg-[#1A457C] text-white":"bg-white"} p-[5px] rounded-md cursor-pointer`} >Attendance Record</p></Link>
      </div>

      <div className="flex text-sm items-center gap-3">
        <img className=' w-10 h-10' src={userimg} alt=""/>
        <p>kiran jadhav</p>
      </div>
    </div>
     </div>


     <div className=" flex items-center justify-center w-full h-[50px] bg-[#EAEAEA] p-8">
           <p className=' text-[24px]'>In/Out Time</p>
     </div>
     
     {/* for mobile and small device only */}
     <div className="flex flex-col gap-5 w-full md:hidden pl-[3px] pr-[3px] mt-2">
      <table className='flex  w-full border border-gray-500 pb-3 p-2'>
        <tr className='flex flex-col w-[30%]'>
          <td className='pt-1 pb-1'>Date</td>
          <td className='pt-1 pb-1'>Check-In</td>
          <td className=''>Time</td>
          <td className='pt-1 pb-1'>Check-Out</td>
          <td className='pt-1 pb-1'>Total Hrs</td>
        </tr>

        <tr className='flex flex-col w-[70%] text-center'>
          <td className='pt-1 pb-1'>Mon 12</td>
          <td className='pt-1 pb-1'>12:00 PM </td>

          <td className=' w-[100%]'>
             <div className="flex items-center">

              <div className=' h-3 w-3 bg-green-400 rounded-lg'></div>
              <div className='w-full h-1 bg-gray-400'>
                 <div className="w-[20%] bg-green-400 h-full flex items-center justify-end">
                     <div className="w-3 h-3 bg-green-400 rounded-lg"></div>
                 </div>
              </div>
              <div className=' h-3 w-3 bg-red-500 rounded-lg'></div>
             </div>
          </td>

          <td className='pt-1 pb-1'>06:00PM </td>
          <td className='pt-1 pb-1'>06:00hrs</td>
        </tr>
      </table>

      <table className='flex  w-full border border-gray-500 pb-3 p-2'>
        
        <tr className='flex flex-col w-[30%]'>
          <td className='pt-1 pb-1'>Date</td>
          <td className='pt-1 pb-1'>Check-In</td>
          <td className=''>tracker</td>
          <td className='pt-1 pb-1'>Check-Out</td>
          <td className='pt-1 pb-1'>Total Hrs</td>
        </tr>

        <tr className='flex flex-col w-[70%] text-center'>
          <td className='pt-1 pb-1'>Mon 12</td>
          <td className='pt-1 pb-1'>12:00 PM </td>

          <td className=' w-[100%]'>
             <div className="flex items-center">

              <div className=' h-3 w-3 bg-green-400 rounded-lg'></div>
              <div className='w-full h-1 bg-gray-400'>
                 <div className="w-[70%] bg-green-400 h-full flex items-center justify-end">
                     <div className="w-3 h-3 bg-green-400 rounded-lg"></div>
                 </div>
              </div>
              <div className=' h-3 w-3 bg-red-500 rounded-lg'></div>
             </div>

          </td>
          <td className='pt-1 pb-1'>06:00PM </td>
          <td className='pt-1 pb-1'>06:00hrs</td>
        </tr>
      </table>
      </div> 

{/* =================================================================================================== */}

      {/* for medium and large devices only */}
      <div className="w-full hidden md:block p-5">
      <table className='w-full'>
        <tr className='border-b border-gray-300 '>
          <td className='p-2 text-xl'>Date</td>
          <td className='text-xl'>Check-In</td>
          <td className=' w-[40%] text-center text-xl'>tracker</td>
          <td className='text-xl'>Check-Out</td>
          <td className='text-xl'>Total Hrs</td>
        </tr>

        <tr className='border-b border-gray-300'>
          <td className='p-3 pt-5 pb-5'>Mon 12</td>
          <td className=''>12:00 PM </td>
          <td className=' w-[40%] pr-4'>
             <div className="flex items-center">

              <div className=' h-3 w-3 bg-green-400 rounded-lg'></div>
              <div className='w-full h-1 bg-gray-400'>
                 <div className="w-[50%] bg-green-400 h-full flex items-center justify-end">
                     <div className="w-3 h-3 bg-green-400 rounded-lg"></div>
                 </div>
              </div>
              <div className=' h-3 w-3 bg-red-500 rounded-lg'></div>
             </div>
            </td>
            
          <td>06:00PM </td>
          <td>06:00hrs</td>
        </tr>

        <tr className='border-b border-gray-300'>
          <td className='p-3 pt-5 pb-5'>Mon 12</td>
          <td className=''>12:00 PM </td>
          <td className=' w-[40%] pr-4'>
             <div className="flex items-center">

              <div className=' h-3 w-3 bg-green-400 rounded-lg'></div>
              <div className='w-full h-1 bg-gray-400'>
                 <div className="w-[20%] bg-green-400 h-full flex items-center justify-end">
                     <div className="w-3 h-3 bg-green-400 rounded-lg"></div>
                 </div>
              </div>
              <div className=' h-3 w-3 bg-red-500 rounded-lg'></div>
             </div>
          </td>
          <td>06:00PM </td>
          <td>06:00hrs</td>
        </tr>

        <tr className='border-b border-gray-300'>
          <td className='p-3 pt-5 pb-5'>Mon 12</td>
          <td className=''>12:00 PM </td>
          <td className=' w-[40%] pr-4'>
             <div className="flex items-center">

              <div className=' h-3 w-3 bg-green-400 rounded-lg'></div>
              <div className='w-full h-1 bg-gray-400'>
                 <div className="w-[40%] bg-green-400 h-full flex items-center justify-end">
                     <div className="w-3 h-3 bg-green-400 rounded-lg"></div>
                 </div>
              </div>
              <div className=' h-3 w-3 bg-red-500 rounded-lg'></div>
             </div>
          </td>
          <td>06:00PM </td>
          <td>06:00hrs</td>
        </tr>
      </table>
      </div> 
     
    </div>
  )
}

export default InOutTime
