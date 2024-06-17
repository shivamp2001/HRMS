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
      start: new Date(2021, 6, 0),
      end: new Date(2021, 6, 0),
  },
  {
      title: "Vacation",
      start: new Date(2021, 6, 7),
      end: new Date(2021, 6, 10),
  },
  {
      title: "Conference",
      start: new Date(2021, 6, 20),
      end: new Date(2021, 6, 23),
  },
];
const HolidayCalender = () => {
  const {pathname} = useLocation();
  return (
    <div className="">

       <div className="hidden sm:block">
       <div className='flex w-full h-14 bg-[#F4F4F4] items-center
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

    <div className=' h-[750px] md:p-14 bg bg-[#F4F4F4]'>
      <Calendar localizer={localizer}  startAccessor={"start"} endAccessor={"end"} className='bg-white'/>
    </div>
    </div> 
  )
}

export default HolidayCalender
