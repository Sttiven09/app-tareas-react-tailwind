const CrearTarea = () => { 
    return (
        <form className="flex items-center gap-4 px-4 bg-white rounded overflow-hidden py-4">
            <span className="rounded-full border-2 w-5 h-5 inline-block"></span>
            <input className="w-full text-gray-500 outline-none" type="text" placeholder="Ingrese la tarea" />
        </form>
    )
}

export default CrearTarea