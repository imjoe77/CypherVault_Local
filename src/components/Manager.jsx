import React from "react";
import { useRef, useState, useEffect } from "react";
 import { ToastContainer, toast } from 'react-toastify';
 import { Bounce } from "react-toastify";
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
  const ref = useRef()
  const passRef = useRef()
  const [form, setform] = useState({ site: "", username: "", password: "" })
  const [passwordArray, setpasswordArray] = useState([])

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setpasswordArray(JSON.parse(passwords));
    }
  }, []);




  const showPass = () => {

    if (ref.current.src.includes("hide.png")) {
      passRef.current.type = "text"
      ref.current.src = "view.png"
    }
    else {
      ref.current.src = "hide.png"
      passRef.current.type = "password"
    }

  }
  const savePassword = () => {
    toast('Password Saved securely', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Bounce,
});

    setpasswordArray([...passwordArray, {...form,id:uuidv4()}])
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form,id:uuidv4()}]))
    console.log(...passwordArray, form)
    setform({ site: "", username: "", password: "" })
  }

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })


  }

  const Delete=(id)=>{
toast('🔐 Entry wiped from the vault.', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Bounce,
});

let c=confirm("Are you sure u want to delete this?")
if(c)
{
setpasswordArray(passwordArray.filter(item=>item.id!==id))
localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item=>item.id!==id)))
}
console.log("Deleting password with id",id)
}

    const edit = (id) => {
      
      setform(passwordArray.filter(i=>i.id===id)[0])
      setpasswordArray(passwordArray.filter(item=>item.id!==id))
      console.log("Editing password with id",id)
  }

  return (
    <>
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Bounce}
 style={{ top: "95px" }} 
/>
     <div className="fixed inset-0 -z-10 bg-white 
bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
</div>

      <div className=" w-screen  flex flex-col items-center">
        <div className="bg-gray-300">
         <div className="flex items-center justify-center mt-2">
            <h1 className="text-5xl font-bold text-[#1E212E] ">
              Pass
            </h1>
            <h1 className="text-5xl font-bold  text-blue-400">
              Op
            </h1>
          </div>       

        <p className="text-3xl text-gray-900 font-semibold mx-190 mt-2">
  Your own Password Manager
</p>


          <input
            type="text" value={form.site} onChange={handleChange} name="site"
            className="bg-[#1E212E] text-xl border border-blue-500 text-white px-4 py-2 mt-8 mx-20
          rounded-2xl w-[85vw] placeholder-gray-400 transition
          focus:outline-none focus:ring-2 focus:ring-blue-900 
          focus:border-blue-300 shadow-[0_0_15px_rgba(0,140,255,0.7)]"
            placeholder="Enter website url..."
          />

          <input
            type="text" value={form.username} onChange={handleChange} name="username"
            className="bg-[#1E212E] text-xl border border-blue-500 text-white px-4 py-2 mt-6 mx-20
          rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-900 
          focus:border-blue-300 placeholder-gray-400 transition 
          w-[60vw] shadow-[0_0_12px_rgba(0,140,255,0.4)]"
            placeholder="Your username..."
          />

          <input
            type="text" ref={passRef} value={form.password} onChange={handleChange} name="password"
            className="bg-[#1E212E] text-xl border border-blue-500 text-white px-4 py-2 -ml-10
          rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-900 
          focus:border-blue-300 placeholder-gray-400 transition 
          w-[15vw] shadow-[0_0_12px_rgba(0,140,255,0.4)]"
            placeholder="Enter password"
          /><span className="cursor-pointer" onClick={showPass} ><img src="view.png" ref={ref} className="w-8 h-8 ml-393 -mt-10 " /></span>

          {/* Icon wrapper */}
          <div className="flex flex-col items-center mt-6">


            <button onClick={savePassword}
              className="flex items-center gap-2 px-6 py-2 mb-5 rounded-3xl 
  bg-gradient-to-r from-lightblue-100 to-indigo-600 
  text-white font-semibold 
  shadow-[0_0_12px_rgba(0,140,255,0.45)]
  hover:shadow-[0_0_18px_rgba(0,140,255,0.65)]
  hover:scale-105 active:scale-95 
  transition-all duration-200 cursor-pointer"
            >
              <lord-icon
                src="https://cdn.lordicon.com/rpviwvwn.json"
                trigger="hover"
                style={{ width: "40px", height: "40px" }}
              ></lord-icon>

              Add Password
            </button>
          </div>
        </div>
        <div>
          
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight mt-3 mx-140">
  Your Saved Passwords
</h1>

          {/* Conditional Rendering: Show "No passwords" if array is empty */}
          {passwordArray.length === 0 ? (
            <div className="text-center text-xl text-gray-500 mt-8 p-4">
              No passwords saved yet.
            </div>
          ) : (
            <table className="w-[70vw] h-auto mx-auto mt-6 rounded-lg overflow-hidden shadow-[0_0_15px_rgba(0,140,255,0.25)] text-gray-200">

              <thead className="bg-blue-800 text-blue-300 uppercase text-lg">
                <tr>
                  <th className="py-3 px-6 text-left">Site</th>
                  <th className="py-3 px-6 text-left">Username</th>
                  <th className="py-3 px-6 text-left">Password</th>
                  <th className="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>

              <tbody>
                {passwordArray.map((item, index) => (
                  <tr key={index} className="bg-[#161922] border-b border-gray-800 hover:bg-[#1f2430] transition text-xl">
                    <td className="py-3 px-6"><a href={item.site} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-500 underline">
                      {item.site}</a></td>

                    <td className="py-3 px-6">{item.username}</td>
                    <td className="py-3 px-6 flex items-center">
                      <span className="tracking-widest mr-2"> {"•".repeat(item.password.length)}</span>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <div className="flex justify-center space-x-3">
                       
                       <div onClick={()=>{edit(item.id)}}>
                          <lord-icon  src="https://cdn.lordicon.com/exymduqj.json"
                          trigger="hover" style={{ width: 30, height: 30, backgroundColor: "white", borderRadius: "10px",cursor:"pointer" }}></lord-icon>
                         </div>

                           <div onClick={()=>{Delete(item.id)}}>
                        <lord-icon src="https://cdn.lordicon.com/jzinekkv.json"
                          trigger="hover" style={{ width: 30, height: 30, backgroundColor: "white", borderRadius: "10px",cursor:"pointer" }}></lord-icon>
                       </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>

          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
