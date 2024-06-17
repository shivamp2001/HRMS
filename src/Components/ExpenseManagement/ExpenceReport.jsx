import React, { useState } from 'react';
import userimg from "../../assets/userimg.png";
import { FaAngleLeft ,FaAngleRight} from "react-icons/fa6";
import { FiCalendar } from "react-icons/fi";
import { IoIosCloseCircleOutline as Closeicon } from "react-icons/io";
// import {  } from "react-icons/fa6";

const ExpenceReport = () => {
  const[selectTab,setSelectTab]=useState("ExpenseReport");
  const[subselectTab,setsubselectTab]=useState(false);
  return (
    <div className="w-full h-screen relative bg-[#F4F4F4]">

    <div className='bg-[#F4F4F4] h-h w-full '>
       <div className='flex w-full h-14 bg-[#F4F4F4] items-center
     justify-between pr-[10px] pl-[10px] lg:pl-[40px] lg:pr-[40px] border-b border-gray-400'>

      <div className='flex text-sm items-center gap-2'>

        <p className={`${selectTab==="ExpenseReport"?"bg-[#1A457C] text-white":"bg-white"} p-[5px]
         rounded-md cursor-pointer`} onClick={()=>setSelectTab("ExpenseReport")}>Expense Report</p>

      </div>

      <div className="flex text-sm items-center gap-3">
        <img className=' w-10 h-10' src={userimg} alt=""/>
        <p>kiran jadhav</p>
      </div>
    </div>

      <div className="flex w-full h-14 p-[10px]  justify-end lg:pr-8">

          <div className='flex items-center gap-5'>
            <p className={`${subselectTab===true?"bg-[#1A457C] text-white":""} 
               text-sm p-[5px] border border-[#1A457C] rounded-md cursor-pointer`} onClick={()=>setsubselectTab(true)}
               >Apply for Expense</p>
          </div>
      </div>

{/* ===================================================================================== */}
{/* table part */}
      <div className="w-full h-full md:pl-12 md:pr-12">
         <div className="w-full h-8 flex items-center bg-white shadow-2xl border-b-[1px] border-[#00000055]">

          <div className="w-[90%] flex items-center justify-center">
             <p><FaAngleLeft/></p> <p>Expense History</p> <p><FaAngleRight/></p>
          </div>

          <div className="w-[10%]">
            <FiCalendar className='pl-2 text-2xl text-[#2073DD] cursor-pointer'/>
          </div>
         </div>

         <div className="w-full bg-white">
              {/* <table className='w-full'>
                <tr className=' border-b-[1px] border-[#00000037]'>
                  <td className=' border-r-[1px] border-[#0000002a] p-1'>Applied Date</td>
                  <td className='pl-2 border-r-[1px] border-[#0000002a] p-1'>Expense Date</td>
                  <td className='border-r-[1px] border-[#0000002a] p-1'>Category</td>
                  <td className='pl-1 border-r-[1px] border-[#0000002a] p-1'>Amount</td>
                  <td className='pl-1'>Status</td>
                </tr>

                <tr className=' border-b-[1px] border-[#00000037]'>
                  <td className='p-3 '>06/03/2024</td>
                  <td>08/03/2024</td>
                  <td>Business Expense</td>
                  <td>Rs. ******</td>
                  <td>Approved</td>
                </tr>

                <tr className=' border-b-[1px] border-[#00000037]'>
                  <td className='p-3 '>06/03/2024</td>
                  <td>08/03/2024</td>
                  <td>Business Expense</td>
                  <td>Rs. ******</td>
                  <td>Approved</td>
                </tr>
                
                <tr className=' border-b-[1px] border-[#00000037]'>
                  <td className='p-3 '>06/03/2024</td>
                  <td>08/03/2024</td>
                  <td>Business Expense</td>
                  <td>Rs. ******</td>
                  <td>Approved</td>
                </tr>
                <tr className=' border-b-[1px] border-[#00000037]'>
                  <td className='p-3 '>06/03/2024</td>
                  <td>08/03/2024</td>
                  <td>Business Expense</td>
                  <td>Rs. ******</td>
                  <td>Approved</td>
                </tr>
                <tr className=' border-b-[1px] border-[#00000037]'>
                  <td className='p-3 '>06/03/2024</td>
                  <td>08/03/2024</td>
                  <td>Business Expense</td>
                  <td>Rs. ******</td>
                  <td>Approved</td>
                </tr>
                <tr className=' border-b-[1px] border-[#00000037]'>
                  <td className='p-3 '>06/03/2024</td>
                  <td>08/03/2024</td>
                  <td>Business Expense</td>
                  <td>Rs. ******</td>
                  <td>Approved</td>
                </tr>
                <tr className=' border-b-[1px] border-[#00000037]'>
                  <td className='p-3 '>06/03/2024</td>
                  <td>08/03/2024</td>
                  <td>Business Expense</td>
                  <td>Rs. ******</td>
                  <td>Approved</td>
                </tr>
                <tr className=' border-b-[1px] border-[#00000037]'>
                  <td className='p-3 '>06/03/2024</td>
                  <td>08/03/2024</td>
                  <td>Business Expense</td>
                  <td>Rs. ******</td>
                  <td>Approved</td>
                </tr>
                <tr className=' border-b-[1px] border-[#00000037]'>
                  <td className='p-3 '>06/03/2024</td>
                  <td>08/03/2024</td>
                  <td>Business Expense</td>
                  <td>Rs. ******</td>
                  <td>Approved</td>
                </tr>
                <tr className=' border-b-[1px] border-[#00000037]'>
                  <td className='p-3 '>06/03/2024</td>
                  <td>08/03/2024</td>
                  <td>Business Expense</td>
                  <td>Rs. ******</td>
                  <td>Approved</td>
                </tr>
                <tr className=' border-b-[1px] border-[#00000037]'>
                  <td className='p-3 '>06/03/2024</td>
                  <td>08/03/2024</td>
                  <td>Business Expense</td>
                  <td>Rs. ******</td>
                  <td>Approved</td>
                </tr>

              </table> */}
               <table className='w-full'>
                <tr className='w-full flex justify-between text-[13px] sm:text-[15px] md:text-[18px]
                 border-b border-gray-300 shadow-sm'>
                  <td className='w-[20%] p-1 md:p-2 font-bold'>Applied Date</td>
                  <td className='w-[20%] p-1 md:p-2 font-bold'>Expense Date</td>
                  <td className='w-[20%] p-1 md:p-2 font-bold'>Category</td>
                  <td className='w-[20%] p-1 md:p-2 font-bold'>Amount</td>
                  <td className='w-[20%] p-1 md:p-2 font-bold'>Status</td>
                </tr>
 
                <tr className='w-full flex justify-between text-[13px] sm:text-[15px] md:text-[18px]
                 border-b border-gray-300 items-center'>
                  <td className='w-[20%] p-1 md:p-2'>06/03/2024</td>
                  <td className='w-[20%] p-1 md:p-2'>08/03/2024</td>
                  <td className='w-[20%] p-1 md:p-2'>Business Expense</td>
                  <td className='w-[20%] p-1 md:p-2'>Rs. ******</td>
                  <td className='w-[20%] p-1 md:p-2'>Approved</td>
                </tr>
                <tr className='w-full flex justify-between text-[13px] sm:text-[15px] md:text-[18px]
                 border-b border-gray-300 items-center'>
                  <td className='w-[20%] p-1 md:p-2'>06/03/2024</td>
                  <td className='w-[20%] p-1 md:p-2'>08/03/2024</td>
                  <td className='w-[20%] p-1 md:p-2'>Business Expense</td>
                  <td className='w-[20%] p-1 md:p-2'>Rs. ******</td>
                  <td className='w-[20%] p-1 md:p-2'>Approved</td>
                </tr>
                <tr className='w-full flex justify-between text-[13px] sm:text-[15px] md:text-[18px]
                 border-b border-gray-300 items-center'>
                  <td className='w-[20%] p-1 md:p-2'>06/03/2024</td>
                  <td className='w-[20%] p-1 md:p-2'>08/03/2024</td>
                  <td className='w-[20%] p-1 md:p-2'>Business Expense</td>
                  <td className='w-[20%] p-1 md:p-2'>Rs. ******</td>
                  <td className='w-[20%] p-1 md:p-2'>Approved</td>
                </tr>
                <tr className='w-full flex justify-between text-[13px] sm:text-[15px] md:text-[18px]
                 border-b border-gray-300 items-center'>
                  <td className='w-[20%] p-1 md:p-2'>06/03/2024</td>
                  <td className='w-[20%] p-1 md:p-2'>08/03/2024</td>
                  <td className='w-[20%] p-1 md:p-2'>Business Expense</td>
                  <td className='w-[20%] p-1 md:p-2'>Rs. ******</td>
                  <td className='w-[20%] p-1 md:p-2'>Approved</td>
                </tr>
                <tr className='w-full flex justify-between text-[13px] sm:text-[15px] md:text-[18px]
                 border-b border-gray-300 items-center'>
                  <td className='w-[20%] p-1 md:p-2'>06/03/2024</td>
                  <td className='w-[20%] p-1 md:p-2'>08/03/2024</td>
                  <td className='w-[20%] p-1 md:p-2'>Business Expense</td>
                  <td className='w-[20%] p-1 md:p-2'>Rs. ******</td>
                  <td className='w-[20%] p-1 md:p-2'>Approved</td>
                </tr>
                <tr className='w-full flex justify-between text-[13px] sm:text-[15px] md:text-[18px]
                 border-b border-gray-300 items-center'>
                  <td className='w-[20%] p-1 md:p-2'>06/03/2024</td>
                  <td className='w-[20%] p-1 md:p-2'>08/03/2024</td>
                  <td className='w-[20%] p-1 md:p-2'>Business Expense</td>
                  <td className='w-[20%] p-1 md:p-2'>Rs. ******</td>
                  <td className='w-[20%] p-1 md:p-2'>Approved</td>
                </tr>
                <tr className='w-full flex justify-between text-[13px] sm:text-[15px] md:text-[18px]
                 border-b border-gray-300 items-center'>
                  <td className='w-[20%] p-1 md:p-2'>06/03/2024</td>
                  <td className='w-[20%] p-1 md:p-2'>08/03/2024</td>
                  <td className='w-[20%] p-1 md:p-2'>Business Expense</td>
                  <td className='w-[20%] p-1 md:p-2'>Rs. ******</td>
                  <td className='w-[20%] p-1 md:p-2'>Approved</td>
                </tr>

                <tr className='w-full flex justify-between text-[13px] sm:text-[15px] md:text-[18px]
                 border-b border-gray-300 items-center'>
                  <td className='w-[20%] p-1 md:p-2'>06/03/2024</td>
                  <td className='w-[20%] p-1 md:p-2'>08/03/2024</td>
                  <td className='w-[20%] p-1 md:p-2'>Business Expense</td>
                  <td className='w-[20%] p-1 md:p-2'>Rs. ******</td>
                  <td className='w-[20%] p-1 md:p-2'>Approved</td>
                </tr>

              

               </table>
         </div>
         

      </div>
    </div>

    {/* ================================================================================ */}
    {/* Apply for expense */}

   {subselectTab && <div className="w-full h-full  absolute top-0 flex justify-center">
          <div className="w-full h-full bg-black opacity-40 relative" ></div>
          {/* Box */}
           <div className="absolute top-0 w-[95%] h-[600px] 
           sm:w-[80%] sm:h-[600px] xl:w-[70%] bg-white mt-28 pb-5 rounded-md">

               <div className="flex items-center p-2 justify-center border-b-[1px] border-[#00000037] pt-5 pb-5">
                  <h1 className='text-xl'>Apply for Expense!</h1>
                  <Closeicon className=' text-red-400 text-2xl absolute right-0  mr-5 cursor-pointer' 
                  onClick={()=>setsubselectTab(false)}/>
               </div>

               <div className="flex flex-col gap-6 mt-5 pl-10 pr-10 lg:pl-20 lg:pr-14">

                  <div className="flex flex-col gap-[3px]">
                      <label htmlFor="">Transaction Date</label>
                      <input type="date" placeholder='date'
                       className='border-[1px] border-gray-700 outline-none rounded-md p-1' />
                  </div>

                  <div className="flex flex-col w-full gap-[3px]">
                     <label htmlFor="">Expense Category</label>
                      <select className='border-[1px] border-gray-700 rounded-md p-1 outline-none w-full'>
                        <option value="">Business Expense</option>
                        <option value="">Business Expense</option>
                      </select>
                  </div>

                  <div className="flex gap-2 md:gap-32">

                      <div className="flex flex-col w-1/2 gap-[2px]">
                         <label for="">Currency</label>
                         <select name="" id="" className='w-full border-[1px]
                          border-gray-700 rounded-md p-1 outline-none'>
                          <option value="">indian</option>
                          <option value="">indian</option>
                         </select>
                      </div>

                      <div className="flex flex-col w-1/2 gap-[2px]">
                      <label for="">Amount</label>
                         <select name="" id="" className='w-full border-[1px]
                          border-gray-700 rounded-md p-1 outline-none'>
                          <option value="">Rs ****</option>
                          <option value="">Rs ****</option>
                         </select>
                      </div>
                  </div>

                  <div className="w-full flex flex-col gap-[2px]">
                    <label htmlFor="">Purpose</label>
                     <textarea rows="4" cols="10" className='w-full border-[1px]
                      border-gray-700 outline-none p-1 rounded-md resize-none'></textarea>
                  </div>


                   <div className="w-full flex justify-center 2xl:mt-5">
                     <button className='w-[200px] p-1 rounded-[8px] bg-[#1A457C]
                      text-white text-center'>Submit</button>
                   </div>

               </div>

           </div>
    </div>}

  </div>  
  )
}

export default ExpenceReport
