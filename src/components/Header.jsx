import LunaIcon from "../icons/LunaIcon"

const Header = () => { 
    return (
    <header className="container mx-auto px-4 pt-8 ">
    <div className="flex justify-between">
    <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.4em]">Tareas</h1>
    <button><LunaIcon className="fill-red-400" /></button>
    </div>
    </header>
    )
}

export default Header