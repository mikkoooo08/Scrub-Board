import { userData } from "@/data_store/data";
import userModel from "@/model/userModel";
import { useRouter } from "next/router";
import { useState } from "react";

export default function SignUp() {
    const router = useRouter();
    const [cred, setCred] = useState(userModel);
    const { user, addData } = userData();
    const [err, setErr] = useState({
        color: 'bg-red-700',
        errMsg: '',
        isErr: false
    })

    const handleCreds = (e) => {
        setCred({ ...cred, [e.target.name]: e.target.value });
    }
    const saveData = () => {
        if (cred.name === '' || cred.email === '' || cred.password === '') {
            setErr({ ...err, errMsg: 'Please Fill Up All!', isErr: true, color: 'bg-red-500'});
        } else {
            if (cred.password.split('').length >= 8) {
                addData(cred);
                setCred(userModel);
                setErr({ ...err, errMsg: 'Welcome Aboard', isErr: true,color:'bg-green-700' });
                router.push("/login")
            } else {
                setErr({ ...err, errMsg: 'Password must be at least 8 characters!', isErr: true,color: 'bg-red-500' });
            }

        }
    }
    const login = () => {
        router.push("/login");
    }

    const msgClose =()=>{
        setErr({ ...err,isErr: false});
    }

    return (
        <>
            <div className="h-screen bg-white" >
                <div className="flex justify-center flex-col items-center">

                    <div className="grow shrink-0 w-[700px] text-slate-900 px-5 my-12 rounded">
                        <div className="py-5">
                            <div className="text-center font-sans mb-10 ">
                                <div className="font-bold text-6xl tracking-wider text-cyan-600">Welcome Aboard!</div>
                            </div>
                            <hr class="mt-3"></hr>
                            <div className="px-20 py-5">
                                <div className={`text-lg text-center ${err.color} rounded-md text-white`}>{err.isErr ? err.errMsg : ''}<span className=" float-right mx-5 font-bold cursor-pointer" onClick={msgClose}>&#10799;</span></div>
                               
                                <div className="pt-5">
                                    <span className=" font-medium text-2xl text-cyan-800">Full Name</span><input name="name" className="shadow pb-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" value={cred.name} onChange={handleCreds} placeholder="Enter your name" required />
                                </div>
                                <div className="mt-3">
                                    <span className=" font-medium text-2xl text-cyan-800">Username</span> <input name="email" className="shadow pb-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" value={cred.email} onChange={handleCreds} placeholder="Enter your email" required />
                                </div>
                                <div className="mt-3">
                                    <span className=" font-medium text-2xl text-cyan-800">Password</span><input name="password" className="shadow pb-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" value={cred.password} onChange={handleCreds} placeholder="Create a password" required />
                                    <span className={`font-normal text-sm text-slate-500`}>(Password must be at least 8 characters.)</span>
                                </div>

                                <div className="mt-5">
                                    <button className="border-2 border-cyan-600 bg-white-600 text-cyan-500 py-3 w-full rounded-md hover:bg-cyan-500 hover:text-white font-semibold" type="button" onClick={saveData}>
                                        Register
                                    </button>                                  
                                    <div className="mt-5 content-center text-center">
                                        <h3 className="text-center font-medium text-sm text-cyan-600">Already have an account? <span className="text-cyan-400 cursor-pointer" onClick={login}>Login here!</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ul>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}