import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import "../../styles/home.css";

import { Context } from "../store/appContext.js";

export const AddNewContact = () => {

	const { actions, store } = useContext(Context)

	const [contact, setContact] = useState({})

	function handleChange({ target }) {
		setContact({
			...contact,
			[target.name]: target.value,
			agenda_slug: "the_best_agenda"
		})
		//console.log(contact)
	}

	function handleSubmit(event) {
		event.preventDefault()

		if (contact) {
			actions.createContact(contact);
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
			<h1 className="text-center">Add a new contact</h1>

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
						type="text"
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
