import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPencil, faPhone, faEnvelope, faTrashCan } from '@fortawesome/free-solid-svg-icons'

import "../../styles/card.css"

import { Example } from "./modal.js";

export const CardContact = ({ contact }) => {
    const { store, actions } = useContext(Context);

    function handleDelete(id) {
        actions.deleteContact(id)
    }

    return (
        <div className="">
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

                    <FontAwesomeIcon
                        icon={faPencil} size="xl" style={{ color: "black", }}
                        className="m-4"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                    />

                    <Link to="/add-contact">

                    </Link>

                    <FontAwesomeIcon
                        icon={faTrashCan} size="xl" style={{ color: "black", }}
                        className="m-4"
                        onClick={() => { handleDelete(contact.id) }}
                    />
                </div>

                {/* Modal */}
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                If you delete this thing the entire universe will be destroyed!
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Oh no!</button>
                                <button type="button" className="btn btn-primary">Yes baby!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};