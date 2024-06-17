import React, { useEffect, useState } from 'react';
import img from "../../assets/myprogileimg.png";
import userimg from "../../assets/userimg.png"
import { FiEdit } from "react-icons/fi";
import { Link, useLocation } from 'react-router-dom';
import { IoIosCloseCircleOutline as Closeicon } from "react-icons/io";

const Qualification = () => {
  
  const {pathname} = useLocation();
  const[EditInfo,setEditInfo]=useState(false);
  const[DataFeilds,setDataFeilds]=useState("");

   useEffect(()=>{
       window.scrollTo(0,0)
  },[DataFeilds]);
  return (
    <div className=' relative w-full h-screen'>

     <div className="w-full h-full">
       {EditInfo && <div className="w-full h-full bg-[#000000ab] absolute z-10 flex justify-center pl-2 pr-2">
          <div className={`w-full sm:w-[80%] xl:w-[50%] ${DataFeilds==="backgroundedit" || 
          DataFeilds==="EmploymentHistory"?"h-[420px]":"h-[530px]"}  bg-white mt-[25%] sm:mt-[5%] rounded-md 
          `}>
             
              <div className=" flex justify-center items-center w-full border-b-[1px] border-gray-400">
                <div className="w-[45%]"></div>

                 <div className="flex items-center justify-between w-[70%] p-2">
                    <p className='text-md sm:text-xl '>Update Info</p>
                    <p><Closeicon className='text-[25px] text-red-400 mr-5 cursor-pointer'
                     onClick={()=>[setEditInfo(false)]}/></p>
                 </div>
                </div>

                  {/* backgronud textfields part */}
                  {DataFeilds === "backgroundedit" &&
                  <div className="pl-4 pr-4 sm:pl-20 sm:pr-20 flex flex-col gap-5 mt-[15%]">

                      <div className="flex flex-col">
                        <label htmlFor="">Background image</label>
                        <input type="file" name="" value="" className='border border-gray-900 rounded-lg 
                        p-[2px] sm:p-[6px]'/>
                      </div>

                      <div className="flex flex-col">
                        <label htmlFor="">Profile image</label>
                        <input type="file" name="" value="" className='border border-gray-900 rounded-lg 
                        p-[2px] sm:p-[6px]'/>
                      </div>

                      <div className="flex justify-center mt-10">
                          <button className='bg-[#1A457C] text-white w-[200px] p-1 rounded-md'>Submit</button>
                      </div>
                  </div>}


                 {/*Education Details textfields part */}
                 {DataFeilds === "EducationDetails" &&
                  <div className="pl-4 pr-4 sm:pl-20 sm:pr-20 flex flex-col gap-10 mt-[15%]">

                      <div className="flex flex-col">
                        <label htmlFor="">Graduation</label>
                        <input type="text" name=""  placeholder='Graduation'
                         className='border border-gray-900 rounded-lg p-[2px] sm:p-[6px] outline-none'/>
                      </div>

                      <div className="flex flex-col">
                        <label htmlFor="">Post Graduation</label>
                        <input type="text" name="" placeholder='Post Graduation'
                        className='border border-gray-900 rounded-lg p-[2px] sm:p-[6px] outline-none'/>
                      </div>

                      <div className="flex flex-col">
                        <label htmlFor="">Specialization</label>
                        <input type="text" name="" placeholder='Specialization'
                        className='border border-gray-900 rounded-lg p-[2px] sm:p-[6px] outline-none'/>
                      </div>

                      <div className="flex justify-center sm:mt-5">
                          <button className='bg-[#1A457C] text-white w-[200px] mt-5 sm:mt-0 p-1 
                          rounded-md'>Submit</button>
                      </div>
                  </div>}


                   {/*Employment History textfields part */}
                 {DataFeilds === "EmploymentHistory" &&
                  <div className="pl-4 pr-4 sm:pl-20 sm:pr-20 flex flex-col gap-10 mt-[15%]">

                      <div className="flex flex-col">
                        <label htmlFor="">Previous Company</label>
                        <input type="text" name=""  placeholder='Previous Company'
                         className='border border-gray-900 rounded-lg p-[2px] sm:p-[6px] outline-none'/>
                      </div>

                      <div className="flex flex-col">
                        <label htmlFor="">Position in Previous Company</label>
                        <input type="text" name="" placeholder='Position in Previous Company'
                        className='border border-gray-900 rounded-lg p-[2px] sm:p-[6px] outline-none'/>
                      </div>

                      
                      <div className="flex justify-center sm:mt-5">
                          <button className='bg-[#1A457C] text-white w-[200px] mt-5 sm:mt-0 p-1 
                          rounded-md'>Submit</button>
                      </div>
                  </div>}
          
          </div>
        </div>}
           


  {/*============================================================================================  */}
          <div className=" hidden sm:block">
       <div className='flex w-full h-14 bg-[#F4F4F4] items-center 
       justify-between pr-[10px] pl-[10px] lg:pl-[40px] lg:pr-[40px] border-b border-gray-400'>

        <div className='flex text-sm items-center gap-2'>
          <Link to={"/MyProfile/Personalinfo"}><p 
          className={`${pathname==="/MyProfile/Personalinfo"?"bg-[#1A457C] text-white":"bg-white"}
           p-[5px] rounded-md cursor-pointer`} >
            Personal Information</p></Link>

            <Link to={"/MyProfile/Qualification"}>
              <p className={`${pathname==="/MyProfile/Qualification"?"bg-[#1A457C] text-white":"bg-white"} p-[5px]
              rounded-md cursor-pointer`} >Qualification</p></Link>

            <Link to={"/MyProfile/BankingDetails"}><p 
            className={`${pathname==="/MyProfile/BankingDetails"?"bg-[#1A457C] text-white":"bg-white"} p-[5px]
           rounded-md cursor-pointer`} >Banking Details</p></Link>
        </div>
      </div>
      </div> 

      <div className="w-full h-[100px] flex">
        <img src={img} alt="" className='w-full h-full relative' />
        <FiEdit className=' absolute right-0 mt-2 mr-2 text-white sm:mt-3 sm:mr-3 cursor-pointer' 
        onClick={()=>[setEditInfo(true),setDataFeilds("backgroundedit")]}/>
      </div>

      <div className="w-full h-[100px] flex justify-center">
        <img src={userimg} alt="" className='h-[100px] relative bottom-[50%]'  />
      </div>

      <div className="w-full flex flex-col items-center relative bottom-[30px] text-justify gap-1 pl-1 pr-1">
        <p className=' text-[16px] md:text-[20px] font-normal'>Kiran Jadhav</p>

        <p className=' text-[12px] sm:text-[15px] md:text-[19px] flex gap-1 md:gap-3'>
          <span>Pune</span><span>|</span> <span>kiran123@gmail.com</span> <span>|</span><span>29 Feb 1990</span> 
          <span>|</span> <span>9876543210</span></p>

        <p className=' text-[12px] sm:text-[15px] md:text-[19px]'>Senior Software Engineer / Senior Software Developer</p>
      </div>

      {/* Ditalis table */}
      <div className="w-full bg-[#EAEAEA] p-2 md:p-9 flex flex-col gap-5">

           {/* tables 1 */}
        <div className="w-full bg-white ">

          <div className="w-full flex items-center justify-between">
           <div className="flex items-center gap-2">
            <div className="w-3 md:w-4 h-[5px] bg-[#1A457C] "></div>
            <p className='text-[18px] md:text-[20px] text-[#1A457C] '>Education Details</p>
           </div>
           <FiEdit className='mr-6 text-[#1A457C] cursor-pointer'
            onClick={()=>[setEditInfo(true),setDataFeilds("EducationDetails")]}/>
           </div> 
           
           <div className="w-full p-3 pl-6 md:pl-9">
               {/* <table className='w-full text-[17px]'>
                   <tr className='border-b border-gray-300'>
                     <td className='p-2 pt-5 pb-5'>Graduation:</td>
                     <td>B.tech</td>
                   </tr>
                   
                   <tr className='border-b border-gray-300'>
                     <td className='p-2'>Post Graduation:</td>
                     <td>M.tech</td>
                   </tr>

                   <tr className='border-b border-gray-300'>
                     <td className='p-2'>Specialization:</td>
                     <td>--</td>
                   </tr>

               </table> */}
                <table className='w-full text-[15px] sm:text-[17px]  flex flex-col'>

                   <tr className='border-b border-gray-300 flex w-full'>
                     <td className='p-2 pt-3 pb-3 w-1/2 md:w-[35%] lg:w-[25%]'>Graduation:</td>
                     <td className=' p-2 pt-3 pb-3 w-1/2 md:w-[40%] lg:w-[30%]'>B.tech</td>
                   </tr>

                   <tr className='border-b border-gray-300 flex w-full '>
                     <td className='p-2 pt-3 pb-3 w-1/2 md:w-[35%] lg:w-[25%]'>Post Graduation:</td>
                     <td className=' p-2 pt-3 pb-3 w-1/2 md:w-[40%] lg:w-[30%]'>M.tech</td>
                   </tr>
                   
                  

                   <tr className='border-b border-gray-300 flex w-full'>
                     <td className='p-2 pt-3 pb-3 w-1/2 md:w-[35%] lg:w-[25%]'>Specialization:</td>
                     <td className='p-2 pt-3 pb-3 w-1/2 md:w-[40%] lg:w-[30%]'>--</td>
                   </tr>
                   
               </table>
           </div>
        </div>

{/* =========================================================================================================================== */}
          {/* tables 2 */}
        <div className="w-full bg-white ">

          <div className="w-full flex items-center justify-between">
           <div className="flex items-center gap-2">
            <div className="w-3 md:w-4 h-[5px] bg-[#1A457C] "></div>
            <p className='text-[18px] md:text-[20px] text-[#1A457C] '>Employment History</p>
           </div>
           <FiEdit className='mr-6 text-[#1A457C] cursor-pointer'
            onClick={()=>[setEditInfo(true),setDataFeilds("EmploymentHistory")]}/>
           </div> 
           
           <div className="w-full p-3 pl-6 md:pl-9">
                <table className='w-full text-[15px] sm:text-[17px]  flex flex-col'>

                   <tr className='border-b border-gray-300 flex w-full'>
                     <td className='p-2 pt-3 pb-3 w-1/2 md:w-[35%] lg:w-[25%]'>Previous Company:</td>
                     <td className=' p-2 pt-3 pb-3 w-1/2 md:w-[40%] lg:w-[30%]'>Infosys Pvt Ltd.</td>
                   </tr>

                   <tr className='border-b border-gray-300 flex w-full '>
                     <td className='p-2 pt-3 pb-3 w-1/2 md:w-[35%] lg:w-[25%]'>Position in Previous Company: </td>
                     <td className=' p-2 pt-3 pb-3 w-1/2 md:w-[40%] lg:w-[30%]'>Software Engineer</td>
                   </tr>
                   
               </table>
           </div>
        </div>       

      </div>
      </div> 
    </div>
  )
}

export default Qualification
