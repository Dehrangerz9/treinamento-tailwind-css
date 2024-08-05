import logo from "../assets/arest-logo.png"

function Header(){
    return(
        <header className="flex justify-around p-5 items-center">
            <img className="size-16" src={logo} alt="" srcset="" />
            <ul className="flex gap-5">
                <li>How it works</li>
                <li>Princing</li>
                <li>Case studies</li>
                <li>About</li>
            </ul>
            <button className="bg-red-500 hover:bg-red-400 rounded-full text-white p-1 px-4">Get a demo</button>
        </header>
    )
}

export default Header