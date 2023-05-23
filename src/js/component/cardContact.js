import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import { getState } from "../store/flux.js";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPencil, faPhone, faEnvelope, faTrashCan } from '@fortawesome/free-solid-svg-icons'

import "../../styles/card.css"
import ModalDelete from "./modal.js";

export const CardContact = ({ contact }) => {
    const { store, actions } = useContext(Context);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="contact-card row">
                <div className="col-3 text-center">
                    <img src={`https://unavatar.io/github/kelvinruizdev`}
                        alt={`Github de Kelvin Ruiz`} />
                </div>
                <div className="col-6">
                    <p> {contact.full_name}</p>
                    <span id="address">
                        <FontAwesomeIcon icon={faLocationDot} style={{ color: "grey", }} className="me-3" />
                        <strong>{contact.address}</strong>
                    </span>
                    <span><FontAwesomeIcon icon={faPhone} style={{ color: "grey", }} className="me-3" /> {contact.phone} </span>
                    <span>
                        <FontAwesomeIcon icon={faEnvelope} style={{ color: "grey", }} className="me-3" />
                        {contact.email}
                    </span>
                </div>
                <div className="col-3">

                    <Link to="/update-contact" >
                        <FontAwesomeIcon
                            icon={faPencil} size="xl" style={{ color: "black", }}
                            className="m-4"
                        />
                    </Link>

                    <FontAwesomeIcon
                        icon={faTrashCan} size="xl" style={{ color: "black", }}
                        className="m-4"
                        onClick={handleShow}
                    />
                </div>
            </div>

            <ModalDelete show={show} handleClose={handleClose} id={contact.id} />

        </>
    );
};