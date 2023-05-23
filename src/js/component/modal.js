import React, { useContext } from 'react';
import { Context } from "../store/appContext.js";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalDelete({ show, handleClose, id }) {
    const { store, actions } = useContext(Context);

    function handleDelete(id) {
        actions.deleteContact(id)
        handleClose()
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure?</Modal.Title>
                </Modal.Header>
                <Modal.Body>If you delete this thing the entire universe will go down!</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Oh no!
                    </Button>
                    <Button variant="secondary" onClick={() => { handleDelete(id) }}>
                        Yes baby!
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalDelete;