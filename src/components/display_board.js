import { userData } from "@/data_store/data";
import Link from "next/link";

export default function DisplayBoard() {
    const { user } = userData();

    return (
        <>
            {user.map((boards) => {
                if (boards.isLoggedIn) {
                    return boards.data.map((data, i) => (
                        <Link href={'/'+i} className="max-w-[400px] flex flex-col gap-4 border border-cyan-700 p-4 rounded-md cursor-pointer" key={i}>
                            <div className="mb-5">
                                <h1 className="font-bold text-3xl text-cyan-700">{data.title}</h1>
                                <p className="font-normal text-gray-500 pl-1 pt-2">{data.description}</p>
                            </div>
                        </Link>
                    ))
                }
            })
            }
        </>
    );



}