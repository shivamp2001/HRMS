import React, { useState } from 'react'
import { IoIosCloseCircleOutline as Closeicon } from "react-icons/io";
import { MdKeyboardDoubleArrowRight as Rightside } from "react-icons/md";
import userimg from "../../assets/userimg.png";
import { Link, useLocation } from 'react-router-dom';

const SalaryCalculation = ({selectTab,setSelectTab}) => {
  const[showbox,setShowbox]=useState(false);
  const {pathname} = useLocation();
  return (
    <div className="w-full relative">

      <div className=" ">
        
        <div className="">
        <div className='flex w-full h-14 bg-[#F4F4F4] items-center
       justify-between pr-[10px] pl-[10px] lg:pl-[40px] lg:pr-[40px] border-b border-gray-400'>

        <div className='flex text-sm items-center gap-2'>
          <Link to={"/Payroll/SalaryCalculation"} className='hidden sm:block'><p className={`${pathname==="/Payroll/SalaryCalculation" && showbox === false?
          "bg-[#1A457C] text-white":"bg-white"} p-[5px]
           rounded-md cursor-pointer`} >Salary Calculation</p></Link>

          {/* <p className={`${pathname==="taxdeduction"?"bg-[#1A457C] text-white":"bg-white"} p-[5px]
           rounded-md cursor-pointer`} >Tax Deduction</p> */}

          <p className={`${showbox ===true ?"bg-[#1A457C] text-white":"bg-white"} p-[5px]
           rounded-md cursor-pointer`} onClick={()=>setShowbox(true)} >Payslips</p>
        </div>

        <div className="flex text-sm items-center gap-3">
          <img className=' w-10 h-10' src={userimg} alt=""/>
          <p>kiran jadhav</p>
        </div>
      </div>
        </div>
    {/* Payslipc box */}

        { showbox &&
        <div className="w-full h-full absolute flex justify-center pl-[10px] pr-[10px] bg-[#000000ae] z-10">
             <div className=" w-full md:w-1/2 h-[500px] bg-white border-2
              border-black rounded-sm z-10 flex flex-col gap-2 mt-[100px]">
                 <div className="flex items-center justify-between p-4 w-full" >
                    <p className=' text-lg'>Payslips</p>
                    <Closeicon className=' text-2xl text-red-500 
                    cursor-pointer' onClick={()=>setShowbox(false)}/>
                 </div>

                 <div className="w-full justify-center">
                  <ul className='flex w-full justify-center gap-5 text-xl border-b-[1px] border-[#00000037] p-1'>
                    <li className='cursor-pointer text-center text-[15px] sm:text-[17px]'>February 2024</li>
                    <li className='cursor-pointer text-center text-[15px] sm:text-[17px]'>January 2024</li>
                    <li className='cursor-pointer text-center text-[15px] sm:text-[17px]'>December 2023</li>
                    <li className='cursor-pointer text-center text-[15px] sm:text-[17px]'>November 2023</li>
                  </ul>
                 </div>

                 <div className="flex gap-5 mt-5">
                    <div className="w-[60%] flex justify-center items-center">
                       <div className="w-[190px] h-[190px] bg-purple-500 rounded-[50%] relative after:absolute 
                       after:w-[150px] after:h-[150px] after:rounded-[50%] after:bg-white flex items-center
                        justify-center" style={{background:"conic-gradient(#009FF8 0deg,#009FF8 250deg ,#03F51B 250deg , #03F51B 320deg ,#FF2222 90deg , #FF2222)"}}>
                          
                          <p className='text-black z-10'>February 2024</p>

                       </div>
                    </div>

                    <div className="w-[30%] flex flex-col gap-3">
                        <div className="">
                          <p className='text-[15px] sm:text-[17px]'>Take Home</p>
                          <p className='p-2 border-2 border-[#03F51B] text-center'>*****</p>
                        </div>

                        <div className="">
                          <p className='text-[15px] sm:text-[17px]'>Deduction</p>
                          <p className='p-2 border-2 border-[#FF2222] text-center'>*****</p>
                        </div>

                        <div className="w-full">
                          <p className='text-[15px] sm:text-[17px]'>Gross Pay</p>
                          <p className='p-2 border-2 border-[#009FF8] text-center'>*****</p>
                        </div>
                    </div>
                 </div>

                 <div className="w-full h-full  flex items-end">
                      <div className="w-full h-[30%] flex justify-center 
                      items-center border-t-[1px] border-[#00000037]">
                        <p className='flex items-center text-[#009FF8]'><p>View Payslips</p>
                        <Rightside className='text-xl'/></p>
                      </div>
                 </div>

              </div>
         </div>}

{/* =================================================================================================== */}
    <div className={`w-full h-auto bg-[#F4F4F4] md:p-4 ${selectTab==="Payslips"&& "opacity-[0.5]"} `}>
       
      <div className=" p-4 pl-2 pr-2 sm:p-8">
          {/* div-1 */}
          {/* for mobile viwe only */}
        <div className="flex flex-col gap-4 bg-white  md:hidden p-4">
          <div className=" flex flex-col gap-1">
             <h4>Monthly Salary: Rs. 50,000</h4>
             <h5>Yearly CTC: Rs. 600,000</h5>
          </div>
          
          <div className="flex ">

          <div className="flex gap-3 flex-col w-[30%] h-44 text-center">
            <p className=' p-3 pl-2 pr-2 border-2 border-[#009FF8] inline-block md:inline'>Rs. 4500</p>
            <p className=' p-3 pl-2 pr-2 border-2 border-[#03F51B] inline-block'>Rs. 3000</p>
            <p className=' p-3 pl-2 pr-2 border-2 border-[#FF2222] inline-block'>Rs. 1000</p>
          </div>

           <div className="flex items-center justify-center w-[70%] ">
             <div className=" w-44 h-44  rounded-full Salary-Calculation-responcive 
             flex justify-center items-center"
            style={{background:"conic-gradient(#009FF8 0deg,#009FF8 250deg ,#03F51B 250deg , #03F51B 320deg ,#FF2222 90deg , #FF2222)"}}>

                <p className={`text-black ${showbox===true?"":"z-10"}`}>Salary Calculation</p>
              
             </div>
          </div>

          </div>

        </div>

          {/* div-2 */}
          {/* for medium and large screens only */}
          <div className=" w-full hidden md:block bg-white p-8 ">
            <div className="flex gap-6 justify-around items-center">
            <div className="">
            <div className=" flex flex-col gap-1">
             <h4 className='text-xl font-bold'>Monthly Salary: Rs. 50,000</h4>
             <h5 className='text-lg'>Yearly CTC: Rs. 600,000</h5>
            </div>

            <div className=" flex gap-6 mt-5">
              <div className=' text-center flex flex-col gap-1'>
                <p className='p-4 border-2 border-[#009FF8] inline-block
                 md:w-[130px]  lg:w-[160px]'>Rs. 45000</p>
                <p>Earnings</p>
              </div>

              <div className='text-center flex flex-col gap-1'>
              <p className='p-4 border-2 border-[#03F51B] inline-block
               md:w-[130px] lg:w-[160px]'>Rs. 3000</p>
                <p>Reimbursements</p>
              </div>

              <div className='text-center flex flex-col gap-1'>
              <p className='p-4 border-2 border-[#FF2222] inline-block
               md:w-[130px]  lg:w-[160px]'>Rs. 1000</p>
                <p>Deduction</p>
              </div>
            
            </div>

           </div> 
            {/* calculation circle div */}
            <div className="w-[250px] h-[250px]  rounded-[50%] flex justify-center items-center 
             Salary-Calculation"
             style={{background:"conic-gradient(#009FF8 0deg,#009FF8 250deg ,#03F51B 250deg , #03F51B 320deg ,#FF2222 90deg , #FF2222)"}}>
                    
                     <p className={`text-black ${showbox===true?"":"z-10"}`}>Salary Calculation</p>
            </div>

           </div>
          </div>

      </div>
         {/* earning detals */}
              <div className="  md:p-8">
                <div className="bg-white pb-8">
                 <div className="">
                  <p className='text-xl p-3 border-b border-gray-400'>Earnings</p>
                 </div>

                  <table className='w-full md:pl-14 md:pr-14'>
                    <tr className='border-b border-gray-400'>
                      <td className='p-3 md:w-[50%]'>Basic</td>
                      <td>Rs.*******</td>
                    </tr>

                    <tr className='border-b border-gray-400'>
                      <td className='p-3'>House Rent Allowance</td>
                      <td>Rs.****</td>
                    </tr>

                    <tr className='border-b border-gray-400'>
                      <td className='p-3'>Special Allowance</td>
                      <td>Rs.****</td>
                    </tr>

                    <tr className='border-b border-gray-400'>
                      <td className='p-3'>Dearness Allowance</td>
                      <td>Rs.****</td>
                    </tr>

                    <tr className='border-b border-gray-400'>
                      <td className='p-3'>Travel Allowance</td>
                      <td>Rs.****</td>
                    </tr>

                    <tr className='border-b border-gray-400'>
                      <td className='p-3'>Medical Allowance</td>
                      <td>Rs.****</td>
                    </tr>

                    <tr className='border-b border-gray-400'>
                      <td className='p-3 font-bold pt-5 pb-5'>Deduction</td>
                    </tr>

                    <tr className='border-b border-gray-400'>
                      <td className='p-3'>Employer Contribution</td>
                      <td>Rs.****</td>
                    </tr>

                     <tr className='border-b border-gray-400'>
                      <td className='p-3 opacity-0'>NA</td>
                      <td className=' font-bold'>Monthly Salary: Rs. *******</td>
                      <td></td>
                     </tr>
                  </table>
                  </div>  
               </div>

    </div>
    </div>  
    </div>  
  )
}

export default SalaryCalculation
