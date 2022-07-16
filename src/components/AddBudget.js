import React, { useContext, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { IoMdAddCircle } from "react-icons/io";
import { lStorageContext } from "../context/LocalStorage";

function AddBudget() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [addBudget, setAddBudget] = useState();

  const { dispatch } = useContext(lStorageContext);
  return (
    <>
      <IoMdAddCircle size={"1.5em"} color="green" onClick={handleShow}></IoMdAddCircle>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mt-3">
              <Form.Label>Budget Amount</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your budget"
                value={addBudget}
                onChange={(event) => setAddBudget(event.target.value)}
              ></Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              dispatch({type: 'ADD_BUDGET', payLoad: addBudget})
              handleClose();
            }}
          >
            Add Budget
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddBudget;
