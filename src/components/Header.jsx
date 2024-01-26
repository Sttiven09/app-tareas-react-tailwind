import { useEffect, useState } from "react"
import LunaIcon from "../icons/LunaIcon"
import SolIcon from "../icons/SolIcon"

const modoInicialDarkMode = localStorage.getItem('theme') === 'dark' 

const Header = () => {
    
    const [darkMode, setDarkMode] = useState(modoInicialDarkMode)

    useEffect(() => {
        if(darkMode){
            document.documentElement.classList.add('dark')
            localStorage.setItem("theme", "dark")
        }
        else{
            document.documentElement.classList.remove('dark')
            localStorage.setItem("theme", "light")
        }
    }, [darkMode])
    

    return (
    <header className="container mx-auto px-4 pt-8 ">
    <div className="flex justify-between">
    <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.4em] transition-all duration-1000">Tareas</h1>
    <button onClick={()=>setDarkMode(!darkMode)}>
        {
            darkMode ?   <SolIcon/> : <LunaIcon/>
        }
    </button>
    </div>
    </header>
    )
}

export default Header