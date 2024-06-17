import React, { useState } from 'react';
import userimg from "../../assets/userimg.png";
import { FaAngleLeft ,FaAngleRight} from "react-icons/fa6";
import { FiCalendar } from "react-icons/fi";
import { IoIosCloseCircleOutline as Closeicon } from "react-icons/io";
import { TbCloudUp } from "react-icons/tb";
import { Link, useLocation } from 'react-router-dom';


const AssignTask = () => {
  const[selectTab,setSelectTab]=useState("ExpenseReport");
  const[subselectTab,setsubselectTab]=useState(false);
  const {pathname} = useLocation();
  return (
    <div className="w-full h-full relative">

        <div className='w-full hidden sm:block'>
         <div className='flex w-full h-14 bg-[#F4F4F4] items-center
       justify-between pr-[10px] pl-[10px] lg:pl-[40px] lg:pr-[40px] border-b border-gray-400'>

        <div className='flex text-sm items-center gap-2'>
          <Link to={"/TaskMangement/AssignTask"}>
            <p className={`${pathname==="/TaskMangement/AssignTask"?"bg-[#1A457C] text-white":"bg-white"} p-[5px]
           rounded-md cursor-pointer`} >Assign Taskt</p></Link>

          <Link to={""}><p className={`${pathname===""?"bg-[#1A457C] text-white":"bg-white"} p-[5px]
           rounded-md cursor-pointer`} >Track progress</p></Link>
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

    <div className='bg-[#F4F4F4] h-h w-full '>

       {/* <div className='flex w-full h-14 bg-[#F4F4F4] items-center
     justify-between pr-[10px] pl-[10px] lg:pl-[40px] lg:pr-[40px] border-b border-gray-400'>

      <div className='flex text-sm items-center gap-2'>

        <p className={`${selectTab==="ExpenseReport"?"bg-[#1A457C] text-white":"bg-white"} p-[5px]
         rounded-md cursor-pointer`} onClick={()=>setSelectTab("ExpenseReport")}>Expense Report</p>

      </div>

      <div className="flex text-sm items-center gap-3">
        <img className=' w-10 h-10' src={userimg} alt=""/>
        <p>kiran jadhav</p>
      </div>
    </div> */}

      <div className="flex w-full h-14 p-[10px]  justify-end md:pr-12">

          <div className='flex items-center gap-5'>

            <p className={`${subselectTab===""?"bg-[#1A457C] text-white":""} 
               text-sm p-[5px] border border-[#1A457C] rounded-md cursor-pointer `}
                onClick={()=>setsubselectTab("")}
               >Assigned Task</p>
               
            <p className={`${subselectTab===true?"bg-[#1A457C] text-white":""} 
               text-sm p-[5px] border border-[#1A457C] rounded-md cursor-pointer `}
                onClick={()=>setsubselectTab(true)}
               >Create Task</p>

          </div>
      </div>

{/* ===================================================================================== */}
{/* table part */}
      <div className="w-full h-full md:pl-12 md:pr-12">
         {/* <div className="w-full h-8 flex items-center bg-white shadow-2xl border-b-[1px] border-[#00000055]">

          <div className="w-[90%] flex items-center justify-center">
             <p><FaAngleLeft/></p> <p>Expense History</p> <p><FaAngleRight/></p>
          </div>

          <div className="w-[10%]">
            <FiCalendar className='pl-2 text-2xl text-[#2073DD] cursor-pointer'/>
          </div>
         </div> */}

         <div className="w-full bg-white">
         <table className='w-full'>
                <tr className='w-full flex justify-between text-[13px] sm:text-[15px] md:text-[18px]
                 border-b border-gray-300 shadow-sm text-center'>
                  <td className='w-[20%] p-1 md:p-2 font-bold text-center'>ATicket No</td>
                  <td className='w-[20%] p-1 md:p-2 font-bold text-center'>Tittle</td>
                  <td className='w-[20%] p-1 md:p-2 font-bold text-center'>Created on</td>
                  <td className='w-[20%] p-1 md:p-2 font-bold'>Priority</td>
                  <td className='w-[20%] p-1 md:p-2 font-bold'>Status</td>
                </tr>
 
                <tr className='w-full flex justify-between text-[13px] sm:text-[15px] md:text-[18px]
                 border-b border-gray-300 items-center'>
                  <td className='w-[20%] p-1 md:p-2'>000</td>
                  <td className='w-[20%] p-1 md:p-2'>Lorem ipsum dolor sit amet.</td>
                  <td className='w-[20%] p-1 md:p-2'>21/02/2024</td>
                  <td className='w-[20%] p-1 md:p-2'>Critical</td>
                  <td className='w-[20%] p-1 md:p-2'>On Going</td>
                </tr>
               
                <tr className='w-full flex justify-between text-[13px] sm:text-[15px] md:text-[18px]
                 border-b border-gray-300 items-center'>
                  <td className='w-[20%] p-1 md:p-2'>000</td>
                  <td className='w-[20%] p-1 md:p-2'>Lorem ipsum dolor sit amet.</td>
                  <td className='w-[20%] p-1 md:p-2'>21/02/2024</td>
                  <td className='w-[20%] p-1 md:p-2'>Critical</td>
                  <td className='w-[20%] p-1 md:p-2'>On Going</td>
                </tr>
               
                <tr className='w-full flex justify-between text-[13px] sm:text-[15px] md:text-[18px]
                 border-b border-gray-300 items-center'>
                  <td className='w-[20%] p-1 md:p-2'>000</td>
                  <td className='w-[20%] p-1 md:p-2'>Lorem ipsum dolor sit amet.</td>
                  <td className='w-[20%] p-1 md:p-2'>21/02/2024</td>
                  <td className='w-[20%] p-1 md:p-2'>Critical</td>
                  <td className='w-[20%] p-1 md:p-2'>On Going</td>
                </tr>
               
                <tr className='w-full flex justify-between text-[13px] sm:text-[15px] md:text-[18px]
                 border-b border-gray-300 items-center'>
                  <td className='w-[20%] p-1 md:p-2'>000</td>
                  <td className='w-[20%] p-1 md:p-2'>Lorem ipsum dolor sit amet.</td>
                  <td className='w-[20%] p-1 md:p-2'>21/02/2024</td>
                  <td className='w-[20%] p-1 md:p-2'>Critical</td>
                  <td className='w-[20%] p-1 md:p-2'>On Going</td>
                </tr>
               
                <tr className='w-full flex justify-between text-[13px] sm:text-[15px] md:text-[18px]
                 border-b border-gray-300 items-center'>
                  <td className='w-[20%] p-1 md:p-2'>000</td>
                  <td className='w-[20%] p-1 md:p-2'>Lorem ipsum dolor sit amet.</td>
                  <td className='w-[20%] p-1 md:p-2'>21/02/2024</td>
                  <td className='w-[20%] p-1 md:p-2'>Critical</td>
                  <td className='w-[20%] p-1 md:p-2'>On Going</td>
                </tr>
               
                <tr className='w-full flex justify-between text-[13px] sm:text-[15px] md:text-[18px]
                 border-b border-gray-300 items-center'>
                  <td className='w-[20%] p-1 md:p-2'>000</td>
                  <td className='w-[20%] p-1 md:p-2'>Lorem ipsum dolor sit amet.</td>
                  <td className='w-[20%] p-1 md:p-2'>21/02/2024</td>
                  <td className='w-[20%] p-1 md:p-2'>Critical</td>
                  <td className='w-[20%] p-1 md:p-2'>On Going</td>
                </tr>
               
                <tr className='w-full flex justify-between text-[13px] sm:text-[15px] md:text-[18px]
                 border-b border-gray-300 items-center'>
                  <td className='w-[20%] p-1 md:p-2'>000</td>
                  <td className='w-[20%] p-1 md:p-2'>Lorem ipsum dolor sit amet.</td>
                  <td className='w-[20%] p-1 md:p-2'>21/02/2024</td>
                  <td className='w-[20%] p-1 md:p-2'>Critical</td>
                  <td className='w-[20%] p-1 md:p-2'>On Going</td>
                </tr>
               
              

               </table>
         </div>

      </div>
    </div>

    {/* ================================================================================ */}
    {/* Create Task */}

   {subselectTab && <div className="w-full h-screen  absolute top-0 flex justify-center">
          <div className="w-full h-screen bg-black opacity-40 relative" ></div>
          {/* Box */}
           <div className="absolute top-0 w-[95%] h-auto sm:w-[80%]  xl:w-[70%] bg-white mt-20 
           rounded-md pl-1 pr-1">

               <div className="flex items-center p-2 justify-center border-b-[1px] border-[#00000037] pt-5 pb-5">
                  <h1 className='text-xl'>Create Ticket</h1>
                  <Closeicon className=' text-red-400 text-2xl absolute right-0  mr-5 cursor-pointer' 
                  onClick={()=>setsubselectTab(false)}/>
               </div>

               <div className="flex flex-col gap-6 mt-5 pl-1 pr-1 md:pl-10 md:pr-10 lg:pl-20 lg:pr-14">

                  <div className="flex flex-col">
                      <label htmlFor="">Ticket Title</label>
                      <input type="text" 
                       className='border-[1px] border-gray-700 outline-none rounded-md p-2' />
                  </div>

                  <div className="w-full">
                    <label htmlFor="">Summary</label>
                     <textarea rows="4" cols="10" className='w-full border-[1px]
                      border-gray-700 outline-none p-1 rounded-md resize-none'></textarea>
                  </div>

                  <div className="w-full flex flex-col">
                    <label htmlFor="">Attachment</label>
                    <input type="file" className='border-[1px] border-gray-700
                     rounded-md p-1 outline-none w-full hidden' id='choosefile' />
                     {/* <p className=' inline-block' >select file</p> */}
                     <label htmlFor="choosefile" className='border-[1px] border-gray-700
                     rounded-md p-1 outline-none w-full flex items-center gap-1'>
                      <TbCloudUp/> Drop files to attach or <p className=' text-[#2073DD]'> browse</p></label>
                  </div>

                  <div className="flex flex-col  w-1/2 lg:w-[30%]">
                     <label htmlFor="">Priority</label>
                      <select className='border-[1px] border-gray-700 rounded-md p-1 outline-none w-full'>
                        <option value="">High</option>
                        <option value="">Low</option>
                      </select>
                  </div>

                  <div className="flex gap-2 md:gap-32">

                      <div className="flex flex-col w-1/2">
                         <label for="">Start Date</label>
                         <input type="date" name="" id=""
                         className='border-[1px] border-gray-700 rounded-md p-1 outline-none' />
                      </div>

                      <div className="flex flex-col w-1/2">
                         <label for="">End Date</label>
                         <input type="date" name="" id="" 
                         className='border-[1px] border-gray-700 rounded-md p-1 outline-none' />
                      </div>
                  </div>

                   <div className="w-full flex justify-center mt-5 pb-5">
                     <button className='w-[20%] p-1 rounded-[8px] bg-[#1A457C]
                      text-white text-center'>Submit</button>
                   </div>

               </div>

           </div>
    </div>}

  </div>  
  )
}

export default AssignTask;