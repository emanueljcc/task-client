import React from 'react'
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";

export default function ModalView({ show, onHide, dataModal, handleChange }) {

    return (
        <Modal
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            animation={false}
            onHide={onHide}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {dataModal.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Checkbox
                            name="active"
                            defaultChecked={dataModal.active}
                            onClick={(e) => handleChange(e, dataModal)}
                        />
                    </InputGroup.Prepend>
                    <FormControl
                        name="name"
                        defaultValue={dataModal.name}
                        onChange={(e) => handleChange(e, dataModal)}
                    />
                    <FormControl
                        name="comment"
                        defaultValue={dataModal.comment}
                        onChange={(e) => handleChange(e, dataModal)}
                    />
                </InputGroup>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Cerrar</Button>
            </Modal.Footer>
        </Modal>
    );
}