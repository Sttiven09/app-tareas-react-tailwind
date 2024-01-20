const TareasComputadas = ({tareasNoCompletadas, eliminarTareasCompletadas}) => { 
    return (
        <section className="py-4 px-4 flex justify-between bg-white rounded-b-md dark:bg-gray-800">
            <span className="text-gray-400 dark:text-gray-300"> {tareasNoCompletadas} Tareas sin completar</span>
            <button className="text-gray-400 dark:text-gray-300" onClick={eliminarTareasCompletadas}>Eliminar tareas completadas</button>
        </section>
    )
}
export default TareasComputadas