import CheckIcon from "../icons/CheckIcon"
import CrossIcon from "../icons/CrossIcon"

const TareaItem = ({tarea}) => { 

    const { id, completado, titulo } = tarea

    return (
        <article className="flex gap-4  px-4 py-4 border-b-gray-400 border-b ">
                
                {/*<button className="rounded-full border-2 inline-block"></button>*/}

                <button className={`w-5 h-5 rounded-full ${
                    completado ? "grid  border- bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  flex-none place-items-center"
                    : "border-2 inline-block"}`}>
                
                {completado && <CheckIcon/>}
                </button>
                <p className="text-gray-700 grow">{titulo}</p> 
                <button className="flex-none"><CrossIcon/></button>
            </article>
    )
}
export default TareaItem