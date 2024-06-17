import React from 'react'
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Link, useLocation } from 'react-router-dom';
import userimg from "../../assets/userimg.png";
const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
      title: "Big Meeting",
      allDay: true,
      start: new Date(2024, 5, 0),
      end: new Date(2024, 6, 0),
  },
  // {
  //     title: "Vacation",
  //     start: new Date(2024, 6, 7),
  //     end: new Date(2024, 6, 10),
  // },
  // {
  //     title: "Conference",
  //     start: new Date(2024, 6, 20),
  //     end: new Date(2024, 6, 23),
  // },
];
const RecordAttendance = () => {
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
           <p className=' text-[24px]'>Attendance Record</p>
      </div>
      
      <div className=' h-[740px] md:p-14 bg bg-[#F4F4F4]'>
      <Calendar localizer={localizer}  startAccessor={"start"} endAccessor={"end"} className='bg-white'/>
    </div>

    </div>
  )
}

export default RecordAttendance
