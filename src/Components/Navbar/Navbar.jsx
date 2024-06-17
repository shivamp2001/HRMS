import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../assets/logo.png"
import { FaAngleRight as RightArrow } from "react-icons/fa6";
import { Link, useLocation } from 'react-router-dom';
import { IoMdArrowDropup as Upicon } from "react-icons/io";
import { IoMdArrowDropdown as Down } from "react-icons/io";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const {pathname}=useLocation();
  let ActiveTab=pathname;
  const[showmenu,setshowmenu]=useState(true);
  const[MyProfilesub,setMyProfilesub]=useState(false);
  const[Leaves,setLeaves]=useState(false);
  const[Attendence,setAttendence]=useState(false);
  const[Payroll,setPayroll]=useState(false);
  const[TrainingDev,setTrainingDev]=useState(false);
  const[TaskMangement,setTaskMangement]=useState(false);
  // const[Border,setBorder]=useState(0);
  // const[ActiveTab,setActiveTab]=useState("myprofile")

  const CloseAllSubTab=()=>{
    setMyProfilesub(false)
    setLeaves(false)
    setAttendence(false)
    setPayroll(false)
    setTrainingDev(false)
    setTaskMangement(false)
  }
  return (
    <div className='flex flex-col w-full h-full'>
       <div className="sm:hidden w-full h-[40px] flex items-center justify-between pr-8
        bg-[#1A457C] border-b-[0.7px] border-[gray]">
              <img src={logo} alt=""  className=' h-[80%] pl-2'/>

              <div className="flex items-center">
              <GiHamburgerMenu className=' cursor-pointer text-white text-[20px]' 
              onClick={()=>[setshowmenu(!showmenu),CloseAllSubTab()]}/> 
              {showmenu===false ?<ImCross className='text-[15px] text-white'
               onClick={()=>[setshowmenu(!showmenu),CloseAllSubTab()]}/>:""}
              </div>
       </div>

    <div className="flex flex-col  w-full h-full sm:flex-row">
{/* =============================================================================================== */}
      {/* responsive navbar menu */}
      <div className={`${showmenu && "hidden"} sm:hidden w-full sm:w-[15%] 
      h-auto sm:h-screen bg-[#1A457C]`}>
          
          <ul className='text-white flex flex-col gap-1'>
          <Link to={"#"}>
            <li > <p className={` p-1 ${ActiveTab==="/MyProfile/Personalinfo" || 
            ActiveTab==="/MyProfile/Qualification"|| ActiveTab==="/MyProfile/BankingDetails" 
             ? "border-[1px] border-white":""} flex items-center gap-1`}
             onClick={()=>[setMyProfilesub(!MyProfilesub),setLeaves(false),setAttendence(false),
            setPayroll(false),setTrainingDev(false),setTaskMangement(false)]}>
              My Profile {MyProfilesub ? <p><Upicon className='text-xl'/></p>:<p className='text-xl'><Down/></p>}</p> 

            {MyProfilesub && <ul className='ml-3 text-[16px]'>
              <Link to={"/MyProfile/Personalinfo"}><li 
              className={`${ActiveTab=="/MyProfile/Personalinfo"?"bg-black border-b-[0.7px] border-white" :
               ""}`}>Personal Information</li></Link>
              
              <Link to={"/MyProfile/Qualification"}><li className={`${ActiveTab=="/MyProfile/Qualification"?
              "bg-black border-b-[0.7px] border-white" : ""}`}>Qualification</li></Link>

              <Link to={"/MyProfile/BankingDetails"}><li className={`${ActiveTab=="/MyProfile/BankingDetails"?
              "bg-black border-b-[0.7px] border-white" : ""}`}>Banking Details</li></Link>
             </ul>}
          </li></Link>


          <Link to={"#"}><li 
          ><p onClick={()=>[setLeaves(!Leaves),setMyProfilesub(false),setAttendence(false),
            setPayroll(false),setTrainingDev(false),setTaskMangement(false) ]} 
          className={`p-1 ${ActiveTab==="/Leaves/Leave" || 
           ActiveTab==="/Leaves/HolidayCalender" ? "border-[1px] border-white" :""} flex items-center gap-1`}>
            Leave {Leaves ?<p><Upicon className='text-xl'/></p>:<p className='text-xl'><Down/></p>}</p> 
             {Leaves && <ul className='ml-3 text-[16px]'>

                <Link to={"/Leaves/Leave"}><li className={`${ActiveTab=="/Leaves/Leave"?
              "bg-black border-b-[0.7px] border-white" : ""}`}>View Leave</li></Link>

                <Link to={"/Leaves/HolidayCalender"}><li className={`${ActiveTab=="/Leaves/HolidayCalender"?
              "bg-black border-b-[0.7px] border-white" : ""}`}>Attendance Record</li></Link>
             </ul>}

             </li></Link>


          <Link to={"/Attendance/InOutTime"}>
            <li 
          ><p onClick={()=>[setAttendence(!Attendence),setMyProfilesub(false),setLeaves(false),
            setPayroll(false),setTrainingDev(false),setTaskMangement(false)]}
           className={`p-1 ${ActiveTab==="/Attendance/InOutTime" || ActiveTab==="/Attendance/RecordAttendance" 
           ? "border-[1px] border-white":""}
            flex items-center gap-1`}>Attendance {Attendence ?<p><Upicon className='text-xl'/></p>:
            <p className='text-xl'><Down/></p>}</p> 
                {Attendence && <ul className='ml-3 text-[16px]'>

                <Link to={"/Attendance/InOutTime"}><li className={`${ActiveTab=="/Attendance/InOutTime"?
              "bg-black border-b-[0.7px] border-white" : ""}`}>In/Out Time</li></Link>

                <Link to={"/Attendance/RecordAttendance"}><li 
                className={`${ActiveTab=="/Attendance/RecordAttendance"?
              "bg-black border-b-[0.7px] border-white" : ""}`}>Holiday Calender</li></Link>
              </ul>}
          </li></Link>

          <Link to={"#"}><li 
          ><p className={`p-1 ${ActiveTab==="/Payroll/SalaryCalculation" && "border-[1px] border-white"}
           flex items-center gap-1`} 
           onClick={()=>[setPayroll(!Payroll),setMyProfilesub(false),setLeaves(false),
           setTrainingDev(false),setTaskMangement(false),setAttendence(false)]}>Payroll {Payroll ?
           <p><Upicon className='text-xl'/></p>:<p className='text-xl'><Down/></p>}</p>

                {Payroll && <ul className='ml-3 text-[16px]'>
                  <Link to={"/Payroll/SalaryCalculation"}><li 
                  className={`${ActiveTab=="/Payroll/SalaryCalculation"?
              "bg-black border-b-[0.7px] border-white" : ""}`}>Salary Calculation</li></Link>
                </ul>} 
          </li></Link>


          <Link to={"/performancemanagement"}><li className={`p-1
          ${ActiveTab==="/performancemanagement" && "border-[1px] border-white"}`}
          >Performance Management  
           </li></Link>

          <Link to={"#"}><li 
          ><p className={`p-1 ${ActiveTab==="/TrainingAndDevelopment/TrainingCalendar" ||
          ActiveTab==="/TrainingAndDevelopment/CourseEnrollment" || 
          ActiveTab==="/TrainingAndDevelopment/SkillAssessment" ? "border-[1px] border-white":""}
          flex items-center gap-1`} onClick={()=>
            [setTrainingDev(!TrainingDev),setMyProfilesub(false),setLeaves(false),
            setPayroll(false),setTaskMangement(false),setAttendence(false)]}
          >Training & Development {TrainingDev ?<p className='text-xl'><Down/></p>:
          <p><Upicon className='text-xl'/></p>}</p>

               {TrainingDev && <ul className='ml-3 text-[16px]'>
                 <Link to={"/TrainingAndDevelopment/TrainingCalendar"}><li 
                 className={`${ActiveTab=="/TrainingAndDevelopment/TrainingCalendar"?
              "bg-black border-b-[0.7px] border-white" : ""}`}>Training Calendar</li></Link>

                  <Link to={"/TrainingAndDevelopment/CourseEnrollment"}><li 
                  className={`${ActiveTab=="/TrainingAndDevelopment/CourseEnrollment"?
              "bg-black border-b-[0.7px] border-white" : ""}`}>Course Enrollment</li></Link>

                  <Link to={"/TrainingAndDevelopment/SkillAssessment"}><li 
                  className={`${ActiveTab=="/TrainingAndDevelopment/SkillAssessment"?
              "bg-black border-b-[0.7px] border-white" : ""}`}>Skill Assessment</li></Link>
                </ul>}
          </li></Link>

          <Link to={"/ExpenseManagement/ExpenceReport"}><li className={`p-1
          ${ActiveTab==="/ExpenseManagement/ExpenceReport" && "border-[1px] border-white"}`}
          >Expense Management</li></Link>

          <Link to={"#"}><li 
          ><p onClick={()=>[setTaskMangement(!TaskMangement),setMyProfilesub(false),setLeaves(false),
            setPayroll(false),setAttendence(false),setTrainingDev(false)]} className={`p-1
          ${ActiveTab==="/TaskMangement/AssignTask" && "border-[1px] border-white"} flex items-center gap-1`}
          >Task Mangement {TaskMangement ?<p>
            <Upicon className='text-xl'/></p>:<p className='text-xl'><Down/></p>}</p>

              {TaskMangement && <ul className='ml-3 text-[16px]'>
                <Link to={"/TaskMangement/AssignTask"}><li 
                className={`${ActiveTab=="/TaskMangement/AssignTask"?
              "bg-black border-b-[0.7px] border-white" : ""}`}>Assign Taskt</li></Link>
                <Link><li>Track progress</li></Link>
              </ul>}
          </li></Link>

          </ul>
      </div>



{/* =============================================================================================== */}
      {/*for desktop navbar menu */}
      <div className={`hidden sm:block w-full h-[200px] sm:h-screen bg-[#1A457C]`}>

        <div className="w-full flex justify-center items-center">
           <img src={logo} alt="" className='w-[90%] h-[80px] mt-4 ' />
        </div>
      <ul className='text-white w-full lg:pl-5 lg:pr-5 mt-5 flex flex-col gap-1'>
            <Link to={"/MyProfile/Personalinfo"}>
              <li className={`p-1 ${ActiveTab==="/MyProfile/Personalinfo" || ActiveTab==="/MyProfile/Qualification"
              || ActiveTab==="/MyProfile/BankingDetails"  ? "border-[1px] border-white":""}
             cursor-pointer flex items-center justify-between`}
             ><p>My Profile</p> <p><RightArrow/></p></li></Link>

             {/* ====================================================== */}
            <Link to={"/Leaves/Leave"}><li className={`p-1 ${ActiveTab==="/Leaves/Leave" 
            || ActiveTab==="/Leaves/HolidayCalender" ? "border-[1px] border-white":""}
             cursor-pointer flex items-center justify-between w-full`}
             > <p>Leave</p> <p><RightArrow/></p></li></Link>

            <Link to={"/Attendance/InOutTime"}>
              <li className={`p-1 ${ActiveTab==="/Attendance/InOutTime" 
               ||ActiveTab==="/Attendance/RecordAttendance"
               ? "border-[1px] border-white":""}
             cursor-pointer flex items-center justify-between`}
             > <p>Attendance</p> <p><RightArrow/></p></li></Link>

            <Link to={"/Payroll/SalaryCalculation"}>
              <li className={`p-1 ${ActiveTab==="/Payroll/SalaryCalculation" && "border-[1px] border-white"} 
            cursor-pointer flex items-center justify-between`}
             > <p>Payroll</p> <p><RightArrow/></p></li></Link>

            <Link to={"/performancemanagement"}>
              <li className={`p-1 ${ActiveTab==="/performancemanagement" && "border-[1px] border-white"} 
            cursor-pointer flex items-center justify-between w-full`}
             ><p>Performance <br /> Management</p> <p>
              <RightArrow/></p> 
            </li></Link>

            <Link to={"/TrainingAndDevelopment/TrainingCalendar"}><li 
            className={`p-1 ${ActiveTab==="/TrainingAndDevelopment/TrainingCalendar" ||
             ActiveTab==="/TrainingAndDevelopment/CourseEnrollment" || 
             ActiveTab==="/TrainingAndDevelopment/SkillAssessment" ? "border-[1px] border-white":""} 
            cursor-pointer flex items-center justify-between`}
             ><p>Training & <br /> Development</p> <p>
              <RightArrow/></p> 
            </li></Link>

            <Link to={"/ExpenseManagement/ExpenceReport"}><li 
            className={`p-1 ${ActiveTab==="/ExpenseManagement/ExpenceReport" && "border-[1px] border-white"} 
            cursor-pointer flex items-center justify-between`}
             ><p>Expense <br /> Management</p> <p><RightArrow/></p> 
            </li></Link>

            <Link to={"/TaskMangement/AssignTask"}><li 
            className={`p-1 ${ActiveTab==="/TaskMangement/AssignTask" && "border-[1px] border-white"} 
            cursor-pointer flex items-center justify-between`}
             ><p>Task  <br />Mangement</p> <p><RightArrow/></p> 
            </li></Link>

           
          </ul>
      </div>

{/* 
      <div className=" sm:w-[80%] md:w-[85%] xl:w-[88%] h-screen">

        <div className="hidden sm:block flex items-center w-full h-[50px] bg-[#1A457C]">
        </div>
         
        <div className="w-full h-[94%] ">
          {ActiveTab ==="Leave" && <Leaves/>}
          {ActiveTab ==="Attendance" && <Attendance/>}
          {ActiveTab ==="Payroll" && <PayrollMain/>}
          {ActiveTab ==="myprofile" && <Myprofilemain/>}
          {ActiveTab ==="performancemanagement" && <Performancemain/>}
          {ActiveTab ==="TrainingandDevelopment" && <TrainingDevelopmentMain/>}
          {ActiveTab ==="ExpenseManagement" && <ExpenceReport/>}
          {ActiveTab ==="TastMangement" && <TaskMangementmain/>}
        </div>   

      </div> */}
    </div> 
      
    </div>
  )
}

export default Navbar;
