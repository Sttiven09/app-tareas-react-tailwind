const FiltarTareas = ({cambiarFiltro, filtrar}) => { 
    return (
        <section className="container mx-auto mt-8">
            <div className="py-4 px-4 rounded-md flex justify-center bg-white gap-4">
                <button className={`${filtrar === "todas" ? "text-blue-500 hover:text-gray-400": "text-gray-400 hover:text-blue-500"}`} onClick={()=> cambiarFiltro("todas")}>Todas</button>
                <button className={`${filtrar === "sinCompletar" ? "text-blue-500 hover:text-gray-400": "text-gray-400 hover:text-blue-500"}`} onClick={()=> cambiarFiltro("sinCompletar")} >Sin Completar</button>
                <button className={`${filtrar === "completada" ? "text-blue-500 hover:text-gray-400": "text-gray-400 hover:text-blue-500"}`} onClick={()=> cambiarFiltro("completada")}>Completada</button>
            </div>
        </section>
    )
}
export default FiltarTareas