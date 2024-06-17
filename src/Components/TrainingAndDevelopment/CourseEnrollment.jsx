import React from 'react';
import img from "../../assets/Vector.png";
import { MdKeyboardDoubleArrowRight as RightArrow } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom';
import userimg from "../../assets/userimg.png";
const CourseEnrollment = () => {
  const {pathname} = useLocation();
  return (
    <div className='w-full h-full bg-[#F4F4F4] p-2 md:p-0'>

      <div className="hidden sm:block">
       <div className='flex w-full h-14 bg-[#F4F4F4] items-center
        justify-between pr-[10px] pl-[10px] lg:pl-[40px] lg:pr-[40px] border-b border-gray-400'>

        <div className='flex text-sm items-center gap-2'>
         <Link to={"/TrainingAndDevelopment/TrainingCalendar"}>
          <p className={`${pathname==="/TrainingAndDevelopment/TrainingCalendar"?"bg-[#1A457C] text-white":
          "bg-white"} p-[5px] rounded-md cursor-pointer`} >Training Calendar</p></Link>

         <Link to={"/TrainingAndDevelopment/CourseEnrollment"}>
          <p className={`${pathname==="/TrainingAndDevelopment/CourseEnrollment"?
          "bg-[#1A457C] text-white":"bg-white"} p-[5px]
            rounded-md cursor-pointer`} >Course Enrollment</p></Link>

         <Link to={"/TrainingAndDevelopment/SkillAssessment"}>
          <p className={`${pathname==="/TrainingAndDevelopment/SkillAssessment"?
         "bg-[#1A457C] text-white":"bg-white"} p-[5px]
        rounded-md cursor-pointer`} >Skill Assessment</p></Link>
        </div>

        <div className="flex text-sm items-center gap-3">
         <img className=' w-10 h-10' src={userimg} alt=""/>
         <p>kiran jadhav</p>
        </div>
       </div>

      </div>

      <h1 className='p-5 font-bold text-xl'>Take Your Course</h1>
      
      <div className="w-full auto p-1 flex flex-col md:flex-row
       gap-5 md:justify-between md:pl-10 md:pr-10 items-center box-border">
        {/* 1 */}
         <div className="w-full md:w-[35%] h-[270px] bg-white shadow-xl rounded-xl">
            <div className="w-full h-[90%] flex flex-col justify-center items-center gap-5 ">
              <img src={img} alt="" className='w-[100px] h-[100px]' />
              <p>Orientation Training</p>
            </div>

            <div className="w-full h-[10%] flex items-center justify-center bg-[#1A457C]
             text-white rounded-br-xl rounded-bl-xl cursor-pointer">
            <p className=''>Get Course</p> <p><RightArrow className='text-xl relative top-[2px]'/></p>
            </div>
         </div>

        {/* 2 */}
        <div className="w-full md:w-[35%] h-[270px] bg-white shadow-xl rounded-xl">
            <div className="w-full h-[90%] flex flex-col justify-center items-center gap-5">
              <img src={img} alt="" className='w-[100px] h-[100px]' />
              <p>Onboarding Training</p>
            </div>

            <div className="w-full h-[10%] flex items-center justify-center bg-[#1A457C]
             text-white rounded-br-xl rounded-bl-xl cursor-pointer">
            <p className=''>Get Course</p> <p><RightArrow className='text-xl relative top-[2px]'/></p>
            </div>
         </div>

        {/* 3 */}
        <div className="w-full md:w-[35%] h-[270px] bg-white shadow-xl rounded-xl">
            <div className="w-full h-[90%] flex flex-col justify-center items-center gap-5">
              <img src={img} alt="" className='w-[100px] h-[100px]' />
              <p>Product Training</p>
            </div>

            <div className="w-full h-[10%] flex items-center justify-center bg-[#1A457C]
             text-white rounded-br-xl rounded-bl-xl cursor-pointer">
              <p className=''>Get Course</p> <p><RightArrow className='text-xl relative top-[2px]'/></p>
            </div>
         </div>
         
      </div>
      
{/* =======================second row============================================================ */}
      <div className="w-full h-auto p-1 flex flex-col md:flex-row
       gap-5 md:justify-between md:pl-10 md:pr-10 items-center mt-5  pb-4 ">
        {/* 1 */}
         <div className="w-full md:w-[35%] h-[270px] bg-white  shadow-xl rounded-xl">
            <div className="w-full h-[90%] flex flex-col justify-center items-center gap-5">
              <img src={img} alt="" className='w-[100px] h-[100px]' />
              <p>Soft-Skills Training</p>
            </div>

            <div className="w-full h-[10%] flex items-center justify-center bg-[#1A457C]
             text-white rounded-br-xl rounded-bl-xl cursor-pointer">
            <p className=''>Get Course</p> <p><RightArrow className='text-xl relative top-[2px]'/></p>
            </div>
         </div>

        {/* 2 */}
        <div className="w-full md:w-[35%] h-[270px] bg-white shadow-xl rounded-xl">
            <div className="w-full h-[90%] flex flex-col justify-center items-center gap-5">
              <img src={img} alt="" className='w-[100px] h-[100px]' />
              <p>Technical Training</p>
            </div>

            <div className="w-full h-[10%] flex items-center justify-center bg-[#1A457C]
             text-white rounded-br-xl rounded-bl-xl cursor-pointer">
            <p className=''>Get Course</p> <p><RightArrow className='text-xl relative top-[2px]'/></p>
            </div>
         </div>

        {/* 3 */}
        <div className="w-full md:w-[35%] h-[270px] bg-white shadow-xl rounded-xl">
            <div className="w-full h-[90%] flex flex-col justify-center items-center gap-5">
              <img src={img} alt="" className='w-[100px] h-[100px]' />
              <p>Diversity Training</p>
            </div>

            <div className="w-full h-[10%] flex items-center justify-center bg-[#1A457C] text-white 
            rounded-br-xl rounded-bl-xl cursor-pointer">
              <p className=''>Get Course</p> <p><RightArrow className='text-xl relative top-[2px]'/></p>
            </div>
         </div>
         
      </div>
    </div>
  )
}

export default CourseEnrollment
