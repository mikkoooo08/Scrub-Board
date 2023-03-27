import { userData } from "@/data_store/data";
import userModel from "@/model/userModel";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Navbar() {
    const router = useRouter();
    const { user,updateData } = userData();
    const [users,setUser] = useState(userModel);    

    useEffect(() => {
        user.some((obj, i) => {
            if (obj.isLoggedIn) {               
                setUser(obj);
            }
        })      
    }, []);

    const logout =()=>{
        user.some((obj, i) => {
            if (obj.isLoggedIn) {
                updateData(i, { ...obj, isLoggedIn: false });
                setUser(userModel);
                router.push("/login");
            }
        })   
    }

    const view = () => {
        console.log(user);
      }
    

    return (
        <div className="bg-cyan-700">
            <div className="container mx-auto bg-cyan-700">
                <nav className='flex items-center flex-wrap m-5'>
                    <div className="inline-flex items-center pt-5"> <span className='text-xl font-medium tracking-wide cursor-pointer text-white' onClick={view}>JS Scrum Board</span></div>
                    <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
                        <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center pt-5 text-white'>
                            {users.name!==''?users.name:'Name'}
                        </a>
                        <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white pt-5  cursor-pointer font-bold items-center justify-center' onClick={logout}>
                            Logout
                        </a>
                    </div>
                </nav>
            </div>
            <hr/>
        </div>
    );
}