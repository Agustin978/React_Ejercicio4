import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({arregloTareas}) => {
    //arregloTareas.map((tarea, index) => console.log(tarea+' / '+index));
    return (
        <div>
            <ListGroup>
                {arregloTareas.map((tarea, index)=>(
                    <ItemTarea key={index} muestraTarea={tarea}></ItemTarea>
                ))}
            </ListGroup>
        </div>
    );
};

export default ListaTareas;