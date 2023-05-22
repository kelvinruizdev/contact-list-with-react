import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPencil, faPhone, faEnvelope, faTrashCan } from '@fortawesome/free-solid-svg-icons'

import "../../styles/card.css"

export const CardContact = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container">
            <div className="contact-card row">
                <div className="col-3 text-center">
                    <img src={`https://unavatar.io/github/kelvinruiz`}
                        alt={`Github de Kelvin Ruiz`} />
                </div>
                <div className="col-6">
                    <p> Kelvin Ruiz </p>
                    <span id="address">
                        <FontAwesomeIcon icon={faLocationDot} style={{ color: "grey", }} className="me-3" />
                        <strong>47568  34, 33434 CCS, VEN</strong>
                    </span>
                    <span><FontAwesomeIcon icon={faPhone} style={{ color: "grey", }} className="me-3" /> 04242659558</span>
                    <span>
                        <FontAwesomeIcon icon={faEnvelope} style={{ color: "grey", }} className="me-3" />
                        k3azzz@gmail.com
                    </span>
                </div>
                <div className="col-3">
                    <FontAwesomeIcon icon={faPencil} size="xl" style={{ color: "black", }} className="m-4" />
                    <FontAwesomeIcon icon={faTrashCan} size="xl" style={{ color: "black", }} className="m-4" />
                </div>
            </div>
        </div>
    );
};