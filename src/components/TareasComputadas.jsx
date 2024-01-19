const TareasComputadas = ({tareasNoCompletadas, eliminarTareasCompletadas}) => { 
    return (
        <section className="py-4 px-4 flex justify-between bg-white rounded-b-md">
            <span className="text-gray-400"> {tareasNoCompletadas} Tareas sin completar</span>
            <button className="text-gray-400" onClick={eliminarTareasCompletadas}>Eliminar tareas completadas</button>
        </section>
    )
}
export default TareasComputadas