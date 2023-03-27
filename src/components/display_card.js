import { userData } from "@/data_store/data";
import { useRouter } from "next/router";

export default function DisplayCard({ itemIndex }) {
    const { user } = userData();
    const { asPath } = useRouter();

    return (
        <>
            {user.map((boards) => {
                if (boards.isLoggedIn) {
                    return boards.data.map((data, i) => {
                        if (i == asPath.split('/').at(1)) {
                            return data.items.map((item, i) => {
                                if (i === itemIndex) {
                                    return item.cards.map((card,i) => {
                                        return (
                                            <div key={card.title + i} className="max-w-[400px] flex flex-col gap-4 border border-cyan-700 p-4 rounded-md">
                                                <h1 className="font-bold text-2x1 text-cyan-700">{card.title}</h1>
                                                <p className="font-normal text-cyan-500">{card.description}</p>
                                            </div>)
                                    })
                                }
                            })
                        }
                    })
                }
            })
            }
        </>
    );



}