import React, { useCallback, useEffect, useRef } from 'react'
import { useState } from 'react';
import './App.css';

function App() {

  const [passwordLength, setpasswordLength] = useState(8);
  const [passwordNumberAllowed, setpasswordNumberAllowed] = useState(false);
  const [passwordCharAllowed, setpasswordCharAllowed] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  let refPassword = useRef(null);

  const passwordGenrater = useCallback(() =>{
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTVUWXYZabcdefghijklmnopqrstuvwxyz";

    if(passwordNumberAllowed) str += "0123456789";
    if(passwordCharAllowed) str += "!@#$%^&*()_-{}[]";
    for (let i = 1; i <=passwordLength; i++) {
      let char = Math.floor(Math.random() *str.length)
      password += str.charAt(char);
      
    }
    setPasswordInput(password);
    
  },[passwordLength, passwordCharAllowed, passwordNumberAllowed, setPasswordInput]);
  
  
  
  useEffect(()=> {
    passwordGenrater();
  },
   [passwordLength, passwordCharAllowed, passwordNumberAllowed, passwordGenrater])

   const copyClipBoardPassword = useCallback(() =>{
    refPassword.current?.select();
    refPassword.current?.setSelectionRange(0, 20);
    
    window.navigator.clipboard.writeText(passwordInput);

   },[passwordInput])
  
  return (
    <>
    <div className='m-auto text- w-full max-w-md bg-gray-600 rounded-md mt-20 p-6 text-orange-500 text-md'>
      <h1 className='text-center text-white text-3xl pb-4'>Password Genrater</h1>
      <div className='flex justify-center'>
         <input type="text"
         value={passwordInput}
         placeholder='password'
         className='outline-none rounded-l-md p-2 w-full course-pointer'
         ref={refPassword}
         readOnly
          />
          <button onClick={copyClipBoardPassword} className='bg-blue-600  rounded-r-md px-3 course-pointer'>Copy</button>
      </div>

      <div className='flex text-sm gap-x-3 pt-3'>
        <div className='w-[206px] flex items-center text-orange-600'>
      <input type="range"
      max={100}
      min={6}
      className='course-pointer'
      onChange={(e) => {setpasswordLength(e.target.value);}}
      value={passwordLength}
      />
      <label className='pl-1'>Length: { passwordLength}</label>
    </div>

      <div className='flex'>
      <input type="checkbox"
      defaultChecked= {passwordCharAllowed}
      onChange={() => {setpasswordCharAllowed(prev => !prev);}}
      />
      <label className='pl-1'>Characters</label>
    </div>

      <div className='flex'>
      <input type="checkbox"
      defaultChecked= {passwordNumberAllowed}
      onChange={()=> {setpasswordNumberAllowed(prev => !prev)}}
      />
      <label className='pl-1'>Numbers</label>
    </div>
    </div>
    </div>
    </>
  )
}

export default App


// import React from 'react';
// import { useState, useCallback, useEffect, useRef } from 'react';
// import './App.css';

// function App() {

//   const [passwordLength, setpasswordLength] = useState(8);
//   const [passwordNumberAllowed, setpasswordNumberAllowed] = useState(false);
//   const [passwordCharAllowed, setpasswordCharAllowed] = useState(false);
//   const [passwordInput, setpasswordInput] = useState("");


//   const passwordRef = useRef(null);
//   const passwordGenrater = useCallback(() => {
//     let password = "";
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//     if (passwordNumberAllowed) str += "0123456789";
//     if (passwordCharAllowed) str += "!@#$%^&*(){}[]_-";
//     for (let i = 1; i <= passwordLength; i++) {
//       let char = Math.floor(Math.random() * str.length + 1);
//       password += str.charAt(char);
//       setpasswordInput(password);
//     }
//   }, [passwordLength, passwordNumberAllowed, passwordCharAllowed, setpasswordInput])

//   const copypassWordClipboard = useCallback(() => {
//     passwordRef.current?.select()
//     passwordRef.current?.setSelectionRange(0, 10)
//     window.navigator.clipboard.writeText(passwordInput)
//   },  [passwordInput])

//   // const copypassWordClipboard = useCallback(() => {
//   //   // Select the input field to copy its value
//   //   passwordRef.current.select();
//   //   // Copy the selected text to the clipboard
//   //   document.execCommand('copy');
//   //   // Deselect the input field after copying
//   //   window.getSelection().removeAllRanges();
//   // }, [passwordRef]);

//   useEffect(() => {
//     passwordGenrater();
//   },
// [passwordLength, passwordNumberAllowed, passwordCharAllowed, passwordGenrater])

//   return (
//    <>
//    <div className='w-full max-w-md mx-auto shadow-md mt-5 rounded-lg px-4 py-2 border-2 border-black text-orange-500 bg-gray-500'>
//   <h1 className='text-white text-center text-2xl pb-2'>Password Genrater</h1>
//     <div className='flex shadow rounded-lg overflow-hidden mb-4'>
//       <input type="text"
      
//       value={passwordInput}
//       className='w-full outline-none px-1 py-2'
//       placeholder='password'
//       readOnly
//       ref={passwordRef}
//        />
//        <button onClick={copypassWordClipboard} className='text-white bg-blue-700 rounded-r-lg font-bold px-4 outline-none shrink-0'>Copy</button>
//     </div >
//     <div className='flex text-sm gap-x-3'>
//     <div className='w-[208px] flex items-center text-black font-bold'>
//       <input type="range"
//       min={6}
//       max={100}
//       value={passwordLength}
//       className='cursor-pointer'
//       onChange={(e)=>{setpasswordLength(e.target.value)}}
//        />
//        <label className=''>Length: {passwordLength}</label>
//     </div>
//     <div className='flex items-center gap-1 text-black font-bold'>
//       <input type="Checkbox"
//       defaultChecked = {passwordNumberAllowed}
//       className='cursor-pointer'
//       onChange={()=> {setpasswordNumberAllowed(prev => !prev);}} />
//       <label htmlFor="numberInput">Number</label>
//     </div>
//     <div className='flex items-center gap-1 text-black font-bold'>
//       <input type="Checkbox"
//       defaultChecked = {passwordCharAllowed}
//       className='cursor-pointer'
//       onChange={()=> {setpasswordCharAllowed(prev => !prev);}} />
//       <label htmlFor="CharactersInput">Characters</label>
//     </div>
//     </div>
//    </div>
//    </>
//   );
// }

// export default App;
