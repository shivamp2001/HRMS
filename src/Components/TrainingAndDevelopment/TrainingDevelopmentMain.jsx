import React, { useState } from 'react'
import userimg from "../../assets/userimg.png";
import TrainingCalendar from './TrainingCalendar';
import CourseEnrollment from './CourseEnrollment';
import SkillAssessment from './SkillAssessment';


// const locales = {
//   "en-US": require("date-fns/locale/en-US"),
// };
// const localizer = dateFnsLocalizer({
//   format,
//   parse,
//   startOfWeek,
//   getDay,
//   locales,
// });

// const events = [
//   {
//       title: "Big Meeting",
//       allDay: true,
//       start: new Date(2021, 6, 0),
//       end: new Date(2021, 6, 0),
//   },
//   {
//       title: "Vacation",
//       start: new Date(2021, 6, 7),
//       end: new Date(2021, 6, 10),
//   },
//   {
//       title: "Conference",
//       start: new Date(2021, 6, 20),
//       end: new Date(2021, 6, 23),
//   },
// ];
const TrainingDevelopmentMain = () => {
  const[selectTab,setSelectTab]=useState("TrainingCalendar");
  return (
  <div className="">
    <div className='flex w-full h-14 bg-[#F4F4F4] items-center
    justify-between pr-[10px] pl-[10px] lg:pl-[40px] lg:pr-[40px] border-b border-gray-400'>

     <div className='flex text-sm items-center gap-2'>
       <p className={`${selectTab==="TrainingCalendar"?"bg-[#1A457C] text-white":"bg-white"} p-[5px]
        rounded-md cursor-pointer`} onClick={()=>setSelectTab("TrainingCalendar")}>Training Calendar</p>

       <p className={`${selectTab==="CourseEnrollment"?"bg-[#1A457C] text-white":"bg-white"} p-[5px]
        rounded-md cursor-pointer`} onClick={()=>setSelectTab("CourseEnrollment")}>Course Enrollment</p>

       <p className={`${selectTab==="SkillAssessment"?"bg-[#1A457C] text-white":"bg-white"} p-[5px]
        rounded-md cursor-pointer`} onClick={()=>setSelectTab("SkillAssessment")}>Skill Assessment</p>
     </div>

     <div className="flex text-sm items-center gap-3">
       <img className=' w-10 h-10' src={userimg} alt=""/>
       <p>kiran jadhav</p>
     </div>
   </div>

     <div>
      {selectTab==="TrainingCalendar" && <TrainingCalendar/>}
      {selectTab==="CourseEnrollment" && <CourseEnrollment/>}
      {selectTab==="SkillAssessment" && <SkillAssessment/>}
     </div>
  </div> 
  )
}

export default TrainingDevelopmentMain
