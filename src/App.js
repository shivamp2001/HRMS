import "./App.css";
import Attendance from "./Components/Attendance/Attendance";
// import Leave from "./Components/Leaves/Leave";
import Leaves from "./Components/Leaves/Leaves";
import Login from "./Components/LoginAndSignup/Login";
import PayrollMain from "./Components/Payrollmanagement/PayrollMain";
import Signup from "./Components/LoginAndSignup/Signup";
import { Route, Routes, useLocation } from "react-router-dom";
import OtpSender from "./Components/LoginAndSignup/OtpSender";
import Navbar from "./Components/Navbar/Navbar";
import Myprofilemain from "./Components/MyProfile/Myprofilemain";
import Performancemain from "./Components/PerfomanceManagement/Performancemain";
import TrainingDevelopmentMain from "./Components/TrainingAndDevelopment/TrainingDevelopmentMain";
import ExpenceReport from "./Components/ExpenseManagement/ExpenceReport";
import TaskMangementmain from "./Components/TaskMangement/TaskMangementmain";
import Personalinfo from "./Components/MyProfile/Personalinfo";
import Qualification from "./Components/MyProfile/Qualification";
import BankingDetails from "./Components/MyProfile/BankingDetails";
import Leave from "./Components/Leaves/Leave";
import HolidayCalender from "./Components/Leaves/HolidayCalender";
import InOutTime from "./Components/Attendance/InOutTime";
import RecordAttendance from "./Components/Attendance/RecordAttendance";
import SalaryCalculation from "./Components/Payrollmanagement/SalaryCalculation";
import TrainingCalendar from "./Components/TrainingAndDevelopment/TrainingCalendar";
import CourseEnrollment from "./Components/TrainingAndDevelopment/CourseEnrollment";
import SkillAssessment from "./Components/TrainingAndDevelopment/SkillAssessment";
import AssignTask from "./Components/TaskMangement/AssignTask";
import { ToastContainer, toast } from 'react-toastify';
// import { useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  // const [Path,setPath]=useState("")
  // let path=window.location.pathname;
 
  const {pathname} = useLocation();

  // console.log(pathname);

  // useEffect(()=>{
  //   setPath(document.URL)
  // },[Path])
  return (
    <div>
      <ToastContainer />
       <div className="flex w-full h-full flex-col sm:flex-row">
          {pathname ==="/" ||pathname ==="/otpsender" || pathname ==="/signup" ?"":<div className="">
              <Navbar/>
          </div>}
  
          <div className="w-[100%]">
            {pathname ==="/" ||pathname ==="/otpsender" || pathname ==="/signup" ?""
            :<div className="w-full h-[50px] bg-[#1A457C] hidden sm:block">
               
            </div>}
      <Routes>
        {/* <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      <Route path="/otpsender" element={<OtpSender />} /> */}
        {/* <Route path="/Home" element={<Navbar />} /> */}
         <Route path="/" element={<Login />} />
         <Route path="/signup" element={<Signup />} />
         <Route path="/otpsender" element={<OtpSender />} />

         {/* <Route path="/MyProfile" element={<Myprofilemain />} /> */}
         <Route path="/MyProfile/Personalinfo" element={<Personalinfo />} />
         <Route path="/MyProfile/Qualification" element={<Qualification />} />
         <Route path="/MyProfile/BankingDetails" element={<BankingDetails />} />


         <Route path="/Leaves" element={<Leaves />} />
         <Route path="/Leaves/Leave" element={<Leave />} />
         <Route path="/Leaves/HolidayCalender" element={<HolidayCalender />} />


         <Route path="/Attendance" element={<Attendance />} />
         <Route path="/Attendance/InOutTime" element={<InOutTime />} />
         <Route path="/Attendance/RecordAttendance" element={<RecordAttendance />} />


         {/* <Route path="/Payroll" element={<PayrollMain />} /> */}
         <Route path="/Payroll/SalaryCalculation" element={<SalaryCalculation />} />

         <Route path="/performancemanagement" element={<Performancemain />} />


         {/* <Route path="/TrainingAndDevelopment" element={<TrainingDevelopmentMain />}/> */}
         <Route path="/TrainingAndDevelopment/TrainingCalendar" element={<TrainingCalendar />}/>
         <Route path="/TrainingAndDevelopment/CourseEnrollment" element={<CourseEnrollment />}/>
         <Route path="/TrainingAndDevelopment/SkillAssessment" element={<SkillAssessment />}/>


         <Route path="/ExpenseManagement/ExpenceReport" element={<ExpenceReport />} />

         <Route path="/TaskMangement" element={<TaskMangementmain />} />
         <Route path="/TaskMangement/AssignTask" element={<AssignTask />} />
      </Routes>
      </div>
      </div>

      {/* <Signup/> */}
      {/* <Leaves/> */}
      {/* <Attendance/> */}
      {/* <PayrollMain/> */}
    
    </div>
  );
}

export default App;
