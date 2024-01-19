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
            className="flex items-center gap-4 px-4 bg-white rounded overflow-hidden py-4">
            <span className="rounded-full border-2 w-5 h-5 inline-block"></span>
            <input className="w-full text-gray-500 outline-none" 
            type="text" 
            placeholder="Ingrese la tarea" 
            value={titulo}
            onChange={(e) => setTitulo(e.target.value) }
            />
        </form>
    )
}

export default CrearTarea