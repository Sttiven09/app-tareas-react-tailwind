import { useState } from "react"

const CrearTarea = ({crearTarea}) => { 
    
    const [titulo, setTitulo] = useState('')

    const handleSumitCrearTarea = (e) => {
        e.preventDefault()
        if(!titulo.trim()){
            return setTitulo("")
        } 
        crearTarea(titulo)
        setTitulo("")
    }

    return (
        <form onSubmit={handleSumitCrearTarea} 
            className="flex items-center gap-4 px-4 bg-white rounded overflow-hidden py-4 dark:bg-gray-800 transition-all duration-1000">
            <span className="rounded-full border-2 w-5 h-5 inline-block "></span>
            <input className="w-full text-gray-500  dark:bg-gray-800 dark:text-gray-400 outline-none transition-all duration-1000" 
            type="text" 
            placeholder="Ingrese la tarea" 
            value={titulo}
            onChange={(e) => setTitulo(e.target.value) }
            />
        </form>
        
    )
}

export default CrearTarea