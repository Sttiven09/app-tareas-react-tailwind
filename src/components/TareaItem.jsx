import CrossIcon from "../icons/CrossIcon"

const TareaItem = ({tarea}) => { 

    const { id, completado, titulo } = tarea

    return (
        <article className="flex gap-4  px-4 py-4 border-b-gray-400 border-b ">
                <button className="rounded-full border-2 w-5 h-5 inline-block"></button>
                <p className="text-gray-700 grow">{titulo}</p> 
                <button className="flex-none"><CrossIcon/></button>
            </article>
    )
}
export default TareaItem