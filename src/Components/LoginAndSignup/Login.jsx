import React, { useState } from 'react';
import bgimg from "../../assets/loginbg.png";
import logo from "../../assets/loginlogo.png"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {toast } from 'react-toastify';
import {useDispatch} from "react-redux"
const Login = () => {
  const navigation = useNavigate();
  // const dispatch=useDispatch()
  const [inputs,setInputs]=useState({
    email:"",
    password:"",
  });
  const [Error,setError]=useState({});


  const HandleChange=(e)=>{
    setInputs((preve)=>({
      ...preve,
      [e.target.name]:e.target.value
    }))
  }

  // console.log(Error);
  const HandleSubmit=async(e)=>{
    e.preventDefault();

    let validationError={}

    if(!inputs.email.trim()){
      validationError.email="Email is Required"
    }else if(/\S+@\S\.\S+/.test(inputs.email)){
      validationError.email="Email is not valid"
    }

    if(!inputs.password.trim()){
      validationError.password="password is Required"
    }
    
    setError(validationError)
    
    const response=await axios.post("https://hrmsbackend.azurewebsites.net/employee/Employeelogin",{
      EmailId:String(inputs.email),
      Password:String(inputs.password)
     }).then((res)=>{
        //  console.log(res.data.data);
       if(res.data.success===true){
         toast.success(res.data.message);
         navigation("/MyProfile/Personalinfo");
      } else if(res.data.success===false){
        toast.error(res.data.message);
      
      } })
      
      // console.log(response);
         
  }


  return (
    <div className='flex flex-col md:flex-row w-full h-screen'
     style={{backgroundImage:`url(${bgimg})`,backgroundSize: "cover",
     backgroundPosition: "center"}}>
      
      {/* first part text */}
       <div className='flex flex-col w-full md:w-1/2 h-[30%] md:h-full text-white
        items-center justify-center gap-2 lg:gap-7 p-2'>
         <h1 className='text-2xl lg:text-[64px] font-bold lg:mb-3'>Navigate HR</h1>
         <h2 className='text-2xl lg:text-[48px] font-normal'>With Ease,</h2>
         <h1 className='text-2xl lg:text-[48px] font-normal'>Every Step of the way</h1>

         {/* for responsive and small screens */}
         <p className='xl:hidden text-[16px] xl:text-[20px] font-normal pl-2 pr-2 text-center'>
          "Streamlined access, empowered workforce: Your gateway to HR success!"</p>

         {/* for medium and large screens */}
         <p className=' hidden xl:block text-[16px] lg:text-[20px] font-normal pl-2 pr-2 text-center'>
          "Streamlined access, empowered workforce: Your gateway to HR <br /> success!"</p>
       </div>


      {/* second part login form */}
        <div className='w-full md:w-1/2 h-[70%] md:h-full flex items-center lg:pl-2 p-[10px] justify-center  '>
          <form  className="w-full h-full bg-white lg:w-[80%] lg:h-[90%] rounded-xl">

              <div className="flex justify-end p-2 sm:p-5 md:p-7">
                <Link to={"/signup"}><button className='bg-[#1A457C] w-[100px] rounded-xl 
                text-center text-md p-[2px] lg:w-[150px] text-white'>sign up</button></Link>
              </div>

              <div className="flex flex-col items-center">
                <img src={logo} alt="" className='w-[100px] h-[100px] md:w-[130px] md:h-[130px] ' />
              </div>

              <div className="flex flex-col items-center">
                <p className=' font-bold text-xl'>Welcome</p>
                <p>Sign In for Employee Self-Service</p>
              </div>
              
              <div className="flex flex-col w-full items-center  gap-6 mt-3">
                 <div className="flex flex-col w-[80%] sm:w-[70%] lg:w-[60%] justify-center gap-[2px]">
                  <label htmlFor="">Email</label>
                  <input type="text" name='email' placeholder='Enter Your Email' value={inputs.email}
                   onChange={(e)=>HandleChange(e)}className=' outline-none border-[1.2px] border-black p-1
                    md:p-2 rounded-lg w-full' />
                  {Error.email && <span className='text-red-500 text-[14px] pl-2'>Email is Requires</span>}
                 </div>

                 <div className="flex flex-col w-[80%] sm:w-[70%] lg:w-[60%] justify-center gap-[2px]">
                  <label htmlFor="">Password</label>
                  <input type="text" name='password' placeholder='Enter Your Password' value={inputs.password}
                   onChange={(e)=>HandleChange(e)} className=' outline-none border-[1.2px] border-black p-1
                    md:p-2 rounded-lg w-full' />
                    {Error.password && <span className='text-red-500 text-[14px] pl-2'>Password is Requires</span>}
                 </div>

                 <p className='w-[80%] sm:w-[70%] lg:w-[60%]
                  relative bottom-4 text-sm left-2 text-[#2073DD] cursor-pointer'>
                   <Link to={"/otpsender"}> Forget Password ? </Link></p>
              </div>

              <div className="flex justify-center">
                 <button type='submit' className='bg-[#1A457C] p-1 text-white w-[40%] rounded-lg 
                mt-[8%] sm:mt-0 md:mt-[10%] text-center' onClick={()=>navigation("/MyProfile/Personalinfo")}>Sign In</button>
              </div>

          </form>
       </div>
    </div>
  )
}

export default Login
