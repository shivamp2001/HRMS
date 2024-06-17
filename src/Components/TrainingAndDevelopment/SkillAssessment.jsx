import React from 'react';
import courseimg1 from "../../assets/couresimg1.png";
import { RiArrowRightWideFill } from "react-icons/ri";
import { Link, useLocation } from 'react-router-dom';
import userimg from "../../assets/userimg.png";
const SkillAssessment = () => {
  const {pathname} = useLocation();
  return (
    <div className="">
           
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
         
    <div className='w-full h-full bg-[#F4F4F4] p-2 md:p-0 md:pl-10 md:pr-10'>

       <h1 className='p-5 font-bold text-xl'>Complete Your Assessments</h1>

     {/* course-1 */}
       <div className="md:p-6 md:pb-1 pb-2">

         <div className="w-full h-[100px] bg-white flex rounded-md ">
           {/* sec-1 */}
           <div className="w-[10%] bg-[#F3BCC9] h-full flex justify-center rounded-tl-md rounded-bl-md">
             <img src={courseimg1} alt="" className='h-full w-[80px] ' />
           </div>

           {/* sec-2 */}
           <div className="w-[20%] md:w-[50%]  flex items-center pl-4">
              <p>Machine Learning</p>
           </div>
           
            {/* sec-3 */}
           <div className=" flex items-center w-[40%] md:w-[25%] h-full gap-1 ">

              <div className="w-[50%] h-full  flex items-center justify-end">
                  <div className="w-1/2 h-[80%] bg-green-400 rounded-[50%]"></div>
              </div>

              <div className="w-[50%]  h-full flex items-center 
              justify-start border-r-[1px] border-[#00000030]">
                <p className='text-[15px]'>Completed</p>
              </div>

           </div>

           {/* sec-4 */}
           <div className="md:w-[15%] h-full  flex items-center gap-2 pl-2 justify-end md:justify-start">
            <p className='text-[#1A457C] text-[14px] md:text-[18px] flex items-center'>
              <p>Start Now</p>  <p><RiArrowRightWideFill className='text-xl'/></p></p>
            
           </div>
         </div>
       </div>

       {/*======================================================  */}
         {/* course-2 */}
         <div className="md:p-6 md:pb-1 pb-2">

         <div className="w-full h-[100px] bg-white flex rounded-md ">
           {/* sec-1 */}
           <div className="w-[10%] bg-[#FBF6A2] h-full flex justify-center rounded-tl-md rounded-bl-md">
             <img src={courseimg1} alt="" className='h-full w-[80px] ' />
           </div>

           {/* sec-2 */}
           <div className="w-[20%] md:w-[50%]  flex items-center pl-4">
              <p>Machine Learning</p>
           </div>
           
            {/* sec-3 */}
           <div className=" flex items-center w-[40%] md:w-[25%] h-full gap-1 ">

              <div className="w-[50%] h-full  flex items-center justify-end">
                  <div className="w-1/2 h-[80%] bg-green-400 rounded-[50%]"></div>
              </div>

              <div className="w-[50%]  h-full flex items-center 
              justify-start border-r-[1px] border-[#00000030]">
                <p className='text-[15px]'>Completed</p>
              </div>

           </div>

           {/* sec-4 */}
           <div className="md:w-[15%] h-full  flex items-center gap-2 pl-2 justify-end md:justify-start">
            <p className='text-[#1A457C] text-[14px] md:text-[18px] flex items-center'>
              <p>Start Now</p>  <p><RiArrowRightWideFill className='text-xl'/></p></p>
            
           </div>
         </div>
       </div>

        {/*======================================================  */}
         {/* course-3 */}
        <div className="md:p-6 md:pb-1 pb-2">

         <div className="w-full h-[100px] bg-white flex rounded-md ">
           {/* sec-1 */}
           <div className="w-[10%] bg-[#BCE6F3] h-full flex justify-center rounded-tl-md rounded-bl-md">
             <img src={courseimg1} alt="" className='h-full w-[80px] ' />
           </div>

           {/* sec-2 */}
           <div className="w-[20%] md:w-[50%]  flex items-center pl-4">
              <p>Machine Learning</p>
           </div>
           
            {/* sec-3 */}
           <div className=" flex items-center w-[40%] md:w-[25%] h-full gap-1 ">

              <div className="w-[50%] h-full  flex items-center justify-end">
                  <div className="w-1/2 h-[80%] bg-green-400 rounded-[50%]"></div>
              </div>

              <div className="w-[50%]  h-full flex items-center 
              justify-start border-r-[1px] border-[#00000030]">
                <p className='text-[15px]'>Completed</p>
              </div>

           </div>

           {/* sec-4 */}
           <div className="md:w-[15%] h-full  flex items-center gap-2 pl-2 justify-end md:justify-start">
            <p className='text-[#1A457C] text-[14px] md:text-[18px] flex items-center'>
              <p>Start Now</p>  <p><RiArrowRightWideFill className='text-xl'/></p></p>
            
           </div>
         </div>
       </div>

       {/* ============================================================= */}
        {/* course-4 */}
        <div className="md:p-6 md:pb-1 pb-2">

         <div className="w-full h-[100px] bg-white flex rounded-md ">
           {/* sec-1 */}
           <div className="w-[10%] bg-[#FBF6A2] h-full flex justify-center rounded-tl-md rounded-bl-md">
             <img src={courseimg1} alt="" className='h-full w-[80px] ' />
           </div>

           {/* sec-2 */}
           <div className="w-[20%] md:w-[50%]  flex items-center pl-4">
              <p>Machine Learning</p>
           </div>
           
            {/* sec-3 */}
           <div className=" flex items-center w-[40%] md:w-[25%] h-full gap-1 ">

              <div className="w-[50%] h-full  flex items-center justify-end">
                  <div className="w-1/2 h-[80%] bg-green-400 rounded-[50%]"></div>
              </div>

              <div className="w-[50%]  h-full flex items-center 
              justify-start border-r-[1px] border-[#00000030]">
                <p className='text-[15px]'>Completed</p>
              </div>

           </div>

           {/* sec-4 */}
           <div className="md:w-[15%] h-full  flex items-center gap-2 pl-2 justify-end md:justify-start">
            <p className='text-[#1A457C] text-[14px] md:text-[18px] flex items-center'>
              <p>Start Now</p>  <p><RiArrowRightWideFill className='text-xl'/></p></p>
            
           </div>
         </div>
       </div>

         {/*======================================================  */}
         {/* course-2 */}
        <div className="md:p-6 md:pb-1 pb-2">

         <div className="w-full h-[100px] bg-white flex rounded-md ">
           {/* sec-1 */}
           <div className="w-[10%] bg-[#BCE6F3] h-full flex justify-center rounded-tl-md rounded-bl-md">
             <img src={courseimg1} alt="" className='h-full w-[80px] ' />
           </div>

           {/* sec-2 */}
           <div className="w-[20%] md:w-[50%]  flex items-center pl-4">
              <p>Machine Learning</p>
           </div>
           
            {/* sec-3 */}
           <div className=" flex items-center w-[40%] md:w-[25%] h-full gap-1 ">

              <div className="w-[50%] h-full  flex items-center justify-end">
                  <div className="w-1/2 h-[80%] bg-green-400 rounded-[50%]"></div>
              </div>

              <div className="w-[50%]  h-full flex items-center 
              justify-start border-r-[1px] border-[#00000030]">
                <p className='text-[15px]'>Completed</p>
              </div>

           </div>

           {/* sec-4 */}
           <div className="md:w-[15%] h-full  flex items-center gap-2 pl-2 justify-end md:justify-start">
            <p className='text-[#1A457C] text-[14px] md:text-[18px] flex items-center'>
              <p>Start Now</p>  <p><RiArrowRightWideFill className='text-xl'/></p></p>
            
           </div>
         </div>
       </div>
    </div>
    </div>  
  )
}

export default SkillAssessment
