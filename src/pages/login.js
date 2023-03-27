import { userData } from "@/data_store/data";
import userModel from "@/model/userModel";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import NavbarMain from "@/components/navbarmain";

export default function Login() {
    const router = useRouter();
    const [cred, setCred] = useState(userModel);
    const { user, updateData } = userData();
    const [err, setErr] = useState({
        color: 'bg-red-700',
        errMsg: '',
        isErr: false
    })

    useEffect(() => {
        const isLogged = user.some((obj, i) => {
            if (obj.isLoggedIn) {
                return true;
            }
        })

        if (isLogged) {
            router.push("/");
        }
    }, []);

    const handleCreds = (e) => {
        setCred({ ...cred, [e.target.name]: e.target.value });
    }
    const login = () => {
        if (cred.email === '' || cred.password === '') {
            setErr({ ...err, errMsg: 'Please fill up all!', isErr: true, color: 'bg-red-500' });
        } else {
            setErr({ ...err, errMsg: '', isErr: false });
            const isTrue = user.some((obj, i) => {
                if (obj.email === cred.email && obj.password === cred.password) {
                    updateData(i, { ...obj, isLoggedIn: true });
                    return true;
                }
            })

            if (isTrue) {
                setErr({ ...err, errMsg: "Login", isErr: true, color: "bg-green-700" });
                setCred(userModel);
                setTimeout(() => {
                    router.push("/");
                }, 2000);
            } else {
                setErr({ ...err, errMsg: "User not found!", isErr: true, color: "bg-red-500" });                
            }
        }


    }
    const register = () => {
        console.log(user);
        router.push("/signup")
    }

    const msgClose =()=>{
        setErr({ ...err,isErr: false});
    }

    const autoCloseMsg =()=>{
        setTimeout(() => {
            setErr({ ...err,isErr: false});
        }, 1500);
    }
    

    return (
        <>
            <NavbarMain/>
            <div className="h-screen bg-white" >
                <div className="flex justify-center flex-col items-center ">

                    <div className="grow shrink-0 w-[700px] text-slate-900 px-5 my-12 rounded">
                        <div className="py-5">
                            <div className="text-center font-sans mb-10 ">
                                <div className="font-bold text-6xl tracking-wider text-cyan-600">Login</div>
                            </div>
                            <hr class="mt-3"></hr>
                            <div className="px-20 py-5">
                                <div className={`text-lg text-center ${err.color} rounded-md text-white`}>{err.isErr ? err.errMsg : ''}<span className=" float-right mx-5 font-bold cursor-pointer" onClick={msgClose}>&#10799;</span></div>
                                <div className="mt-3">
                                    <span className=" font-medium text-2xl text-cyan-800">Username</span> <input name="email" className="shadow pb-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" value={cred.email} onChange={handleCreds} placeholder="Enter your email" required />
                                </div>
                                <div className="mt-3">
                                    <span className=" font-medium text-2xl text-cyan-800">Password</span><input name="password" className="shadow pb-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" value={cred.password} onChange={handleCreds} placeholder="Enter your password" required />
                                </div>

                                <div className="mt-5 pt-7">
                                    <button className="border-2 border-cyan-600 bg-white-600 text-cyan-500 py-3 w-full rounded-md hover:bg-cyan-500 hover:text-white font-semibold" type="button" onClick={login}>
                                        Login
                                    </button>
                                    
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