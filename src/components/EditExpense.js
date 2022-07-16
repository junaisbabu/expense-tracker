import { useContext, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { lStorageContext } from "../context/LocalStorage";

function EditExpense({id, name, cost}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [editName, setEditName] = useState(name)
  const [editCost, setEditCost] = useState(cost)

  const {dispatch} = useContext(lStorageContext);

  return (
    <>
      <FaEdit size="1.2em" color="purple" onClick={handleShow}></FaEdit>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mt-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" value={editName} onChange={(event) => setEditName(event.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label>Cost</Form.Label>
              <Form.Control type="text" placeholder="Enter cost" value={editCost} onChange={(event) => setEditCost(event.target.value)}></Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {
            dispatch({type: 'EDIT_EXPENSE', payLoad: [id, editName, editCost]})
            handleClose();
          }} 
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditExpense;
