"use client"

import { useEffect, useState } from "react";

export default function Home() {

  // const [val1, fun] = useState(false);

  // function clickMe() {
  //   fun(!val1)
  // }
  // console.log(useState(val1));
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const router = useRouter();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Here, you might want to perform any validation or API calls before redirecting to the profile page
  //   // router.push(`/profile?email=${email}&password=${password}`);
  // };
  const [count, setCount] = useState(window.screen.availWidth)
  
  // useEffect(()=>{
  //   console.log("in")
  //   if(count===0)
  //   {
  //     document.title = `Hi`
  //   }
  //   else{
  //     document.title = `Hi ${count}`;
  //   }
    
  // })  
  // console.log("iout");
  return (
    <>
    {/* // <div className="flex m-0 p-0 h-screen w-screen border-black border justify-center items-center">
    //   <p className="h-0.5 bg-black"></p>
    //   <label className="cursor-pointer outline-none  bg-blue-700  p-2" onClick={clickMe}>
    //     click me
    //   </label>

    //   {val1 && ( 
    //     <>*/}

    {/* //   <label className="absolute outline-none cursor-pointer bg-blue-700 border-dotted border-[ border-black  p-1" onClick={clickMe}>click me
    //   </label>
    //   <div className="absolute mt-24">
    //   <div className="bg-white shadow-md mt-3 p-2">  Dropdown content
    //     <p className="text-gray-700">Dropdown Content Here</p>
    //   </div>
    // </div> </>
    //   )}
    // </div> */}
  {/* //   <div>
  //   <h1>Signup Page</h1>
  //   <form onSubmit={handleSubmit}>
  //     <label>
  //       Email:
  //       <input type="email" defaultValue={email} />
  //     </label>
  //     <br />
  //     <label>
  //       Password:
  //       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
  //     </label>
  //     <br />
  //     <button type="submit">Submit</button>
  //   </form>
  //   <div>
  //     <h1>Profile Page</h1>
  //     <p>Email: {email}</p>
  //     <p>Password: {password}</p>
  //   </div>
  // </div> */}
<div onClick={()=>setCount(count + 1)}>
  click me {count}
</div>

  </>
  );
}
