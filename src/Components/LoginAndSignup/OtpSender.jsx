import React, { useEffect, useRef, useState } from 'react';
import bgimg from "../../assets/loginbg.png";
import logo from "../../assets/loginlogo.png"

const OtpSender = () => {
  const otpArray=["", "", "", ""];
  const Refs=[useRef(),useRef(),useRef(),useRef()]
  const [inputs,setInputs]=useState(otpArray);
  useEffect(()=>{
    Refs[0].current.focus()
  },[])

  const HandelInputChange=(e,index)=>{
   let val=e.target.value
   if(!Number(val))
    return;

   if(index < inputs.length-1){
    Refs[index+1].current.focus()
   }
   const copyinputs=[...inputs];
   copyinputs[index]=val;
   setInputs(copyinputs);
  }

  const HandleOnKeyDown=(e,index)=>{
    if(e.keyCode==8){
      const copyinputs=[...inputs];
      copyinputs[index]="";
      setInputs(copyinputs)

      if(index > 0){
        Refs[index-1].current.focus()
      }
    }

    // console.log(e.keyCode,index);
  }
  const HandlePaste=(e)=>{
   const data=e.clipboardData.getData("text");
   if(!Number(data) || data.length !== inputs.length)
    return ;

   const pastecode=data.split("")
   setInputs(pastecode)
   Refs[inputs.length-1].current.focus();
  //  console.log(data);
  }
  //  console.log(inputs);
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
        <div className='w-full md:w-1/2 h-[70%] md:h-full flex items-center lg:pl-2 p-[10px] justify-center'>
          <div className="w-full h-full bg-white lg:w-[70%] lg:h-[75%] rounded-xl pt-10">

              <div className="flex flex-col items-center mt-[20px]">
                <img src={logo} alt="" className='w-[120px] h-[120px] md:w-[150px] md:h-[150px] ' />
              </div>

              <div className="flex flex-col items-center">
                <p className='md:text-[20px]'>Please Enter OTP</p>
              </div>
              
              <div className="flex w-full gap-4  justify-center mt-[30px]">
                  {/* <input type="text" className=' w-[50px] h-[60px] rounded-lg bg-[#ECECEC]' />
                  <input type="text" className=' w-[50px] h-[60px] rounded-lg bg-[#ECECEC]' />
                  <input type="text" className=' w-[50px] h-[60px] rounded-lg bg-[#ECECEC]' />
                  <input type="text" className=' w-[50px] h-[60px] rounded-lg bg-[#ECECEC]' /> */}
                  {otpArray.map((item,i)=>{
                    return <input
                    ref={Refs[i]}
                     type='text'
                     value={inputs[i]}
                     key={i}
                     maxLength={1}
                     onKeyDown={(e)=>HandleOnKeyDown(e,i)}
                     onChange={(e)=>HandelInputChange(e,i)}
                     onPaste={HandlePaste}
                      className='w-[50px] h-[60px] border-[1.5px]
                     border-black rounded-lg bg-[#ECECEC] font-bold text-[20px] text-center
                      focus:outline-[#2073DD]'/>
                  })}
              </div>

              <p className='text-center mt-[30px] text-[25px]'>01 : 30</p>

              <p className=' text-[17px] mt-[30px] text-center text-[#2073DD] cursor-pointer'>Resend OTP</p>

          </div>
       </div>
    </div>
  )
}

export default OtpSender;
