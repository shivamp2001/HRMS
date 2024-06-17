import React, { useState } from 'react';
import bgimg from "../../assets/loginbg.png";
import logo from "../../assets/loginlogo.png"
import { Link } from 'react-router-dom';

const Signup = () => {
  const [inputs,setInputs]=useState({
    email:"",
    password:"",
    reenterpassword:""
  })

  const HandleChange=(e)=>{
    setInputs((preve)=>({
      ...preve,
      [e.target.name]:e.target.value
    }))
  }

  // console.log(inputs);
  const HandleSubmit=(e)=>{
    e.preventDefault();
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
          <p className='lg:hidden text-[16px] lg:text-[20px] font-normal pl-2 pr-2 text-center'>
          "Streamlined access, empowered workforce: Your gateway to HR success!"</p>

         {/* for medium and large screens */}
         <p className=' hidden lg:block text-[16px] lg:text-[20px] font-normal pl-2 pr-2 text-center'>
          "Streamlined access, empowered workforce: Your gateway to HR <br /> success!"</p>
       </div>


      {/* second part login form */}
        <div className='w-full md:w-1/2 h-[70%] md:h-full flex items-center lg:pl-2 p-[10px] justify-center  '>
          <div onSubmit={HandleSubmit} className="w-full h-full bg-white lg:w-[80%]
           lg:h-[90%] rounded-xl flex flex-col">

              {/* <div className="flex justify-end p-2 sm:p-5 md:p-7">
                <button className='bg-[#1A457C] w-[100px] rounded-xl 
                text-center text-sm p-[2px] lg:w-[150px] lg:text-xl text-white'>sign up</button>
              </div> */}

              <div className="flex flex-col items-center">
                <img src={logo} alt="" className='w-[100px] h-[100px] md:w-[130px] md:h-[130px] ' />
              </div>

              <div className="flex flex-col items-center">
                <p className=' font-bold text-xl'>Welcome</p>
                <p>Enter Your Credentials to Proceed</p>
              </div>
              
              <div className="flex flex-col w-full items-center  gap-4 mt-3 lg:gap-7 ">

                 <div className="flex flex-col w-[80%] sm:w-[70%] lg:w-[60%] justify-center gap-[2px]">
                  <label htmlFor="">Email</label>
                  <input type="text" placeholder='Enter Your Email' name='email' value={inputs.email}
                   onChange={(e)=>HandleChange(e)}
                   className=' outline-none border-[1.2px] border-black shadow-md p-1 md:p-2 rounded-lg w-full' />
                 </div>

                 <div className="flex flex-col w-[80%] sm:w-[70%] lg:w-[60%] justify-center gap-[2px]">
                  <label htmlFor="">Create Password</label>
                  <input type="text" placeholder='Enter Your Password' name='password' value={inputs.password}
                   onChange={(e)=>HandleChange(e)}
                   className=' outline-none border-[1.2px] border-black p-1 md:p-2 rounded-lg w-full' />
                 </div>

                 <div className="flex flex-col w-[80%] sm:w-[70%] lg:w-[60%] justify-center gap-[2px]">
                  <label htmlFor="">Re-enter Password</label>
                  <input type="text" placeholder='Re-enter Password' name='reenterpassword'
                   value={inputs.reenterpassword}
                   onChange={(e)=>HandleChange(e)}
                   className=' outline-none border-[1.2px] border-black p-1 md:p-2 rounded-lg w-full' />
                 </div>

                
              </div>

              <div className="flex justify-center">
                <button className='bg-[#1A457C] p-1 text-white w-[40%]
                 rounded-lg mt-[5%] sm:mt-0 md:mt-[10%]' type='submit'>Sign Up</button>
              </div>

              <div className="flex  text-[16px] md:text-[17px] text-[#2073DD] items-center justify-center h-full ">
                <Link to={"/"}><span>Already have an Account</span></Link>
              </div>

          </div>
       </div>
    </div>
  )
}

export default Signup
