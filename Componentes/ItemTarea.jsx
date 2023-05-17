import { Button, ListGroup } from "react-bootstrap";

const ItemTarea = () => {
    return (
        <div>
            <ListGroup.Item className="d-flex justify-content-between">
                Un elemento agregado
                <Button variant="danger">Borrar</Button>
            </ListGroup.Item>
        </div>
    );
};

export default ItemTarea;