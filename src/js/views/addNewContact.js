import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import "../../styles/home.css";
import { CardContact } from "../component/cardContact";

import { Context } from "../store/appContext.js";

export const AddNewContact = ({ update }) => {

	const { actions, store } = useContext(Context)
	const { allContacts } = store

	const [contact, setContact] = useState({})



	function handleChange({ target }) {
		setContact({
			...contact,
			[target.name]: target.value,
			agenda_slug: "the_best_agenda"
		})
	}

	function handleSubmit(event) {
		event.preventDefault()
		console.log(update)

		if (contact) {

			if (update) { //verifica que se va a hacer un update
				allContacts.map((item, index) => {
					//console.log(item.id)
					if (update) {
						actions.updateContact(contact, item.id)
					}
				})
			} else {
				actions.createContact(contact);
			}
			setContact(
				{
					full_name: "",
					email: "",
					address: "",
					phone: ""
				}
			)
		}
	}

	return (
		<div className="container p-5">

			{
				update ?
					<h1 className="text-center">Update a contact</h1>
					:
					<h1 className="text-center">Add a new contact</h1>
			}


			<form onSubmit={handleSubmit}>

				<div className="p-1">
					<label htmlFor="exampleFormControlInput1" className="form-label">Fullname</label>
					<input
						type="text"
						className="form-control"
						placeholder="Fullname"
						name="full_name"
						onChange={handleChange}
						value={contact.full_name}
					/>
				</div>
				<div className="p-1">
					<label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
					<input
						type="email"
						className="form-control"
						placeholder="Enter email"
						name="email"
						onChange={handleChange}
						value={contact.email}
					/>
				</div>
				<div className="p-1">
					<label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
					<input
						type="tel"
						className="form-control"
						placeholder="Enter phone"
						name="phone"
						onChange={handleChange}
						value={contact.phone}
					/>
				</div>
				<div className="p-1">
					<label htmlFor="exampleFormControlInput1" className="form-label">Address</label>
					<input
						type="text"
						className="form-control"
						placeholder="Enter address"
						name="address"
						onChange={handleChange}
						value={contact.address}
					/>
				</div>

				<div className="text-center pt-3 ps-1 pe-1">
					<button type="submit" className="btn btn-primary w-100">save</button>
				</div>

				<Link to={"/"}>
					<span>Or get back to the contacts</span>
				</Link>

			</form>

		</div>
	)
}
