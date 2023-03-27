import Link from "next/link"

export default function NavbarMain({ link }) {
     
    return (
        <body >
            <nav class="p-5 bg-cyan-700 shadow md:flex md:items md:justify-between">
                <div>
                    <span class="flex font-bold text-2x1 gap-5 cursor-pointer">
                        <img class="h-6 inline" src="https://e7.pngegg.com/pngimages/871/578/png-clipart-stick-figure-with-teaching-stick-on-board-logo-computer-icons-training-and-development-course-education-icon-training-drawing-miscellaneous-angle.png"/>
                        <Link href="/login" className="text-white">JS Scrum Board</Link>
                    </span>
                </div>
                <ul class="md:flex md:item-center">
                    <li className="mx-5">
                        <Link href="/signup" class="text-x1 text-white hover:text-cyan-500 duration-500">Sign Up</Link>
                    </li>
                </ul>
            </nav>
        </body>
      
    )
}