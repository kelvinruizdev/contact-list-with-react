import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../../styles/home.css";
import { CardContact } from "../component/cardContact";

import { Context } from "../store/appContext.js";

export function Contact() {

	const { actions, store } = useContext(Context)
	const { allContacts } = store

	return (
		<>
			<div className="">
				<Link to="/add-contact">
					<button className="btn btn-success mb-3">Add new contact</button>
				</Link>
			</div>

			{allContacts.length == 0 ?
				<div>
					<h2 className="text-center">Agenda is empty, please add a new contact :)</h2>
				</div>
				:
				allContacts.map((item, index) => {

					return (
						<>
							<CardContact key={index} contact={item}></CardContact>
						</>
					)

				})
			}



		</>
	)
}


