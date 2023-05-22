import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "../../styles/home.css";

import { Context } from "../store/appContext.js";

export const AddNewContact = () => {

	const { actions, store } = useContext(Context)

	return (
		<div className="container p-5">
			<h1 className="text-center">Add a new contact</h1>
			<form className="">
				<div className="p-1">
					<label for="exampleFormControlInput1" className="form-label">Fullname</label>
					<input type="text" className="form-control" placeholder="Fullname" />
				</div>
				<div className="p-1">
					<label for="exampleFormControlInput1" className="form-label">Email</label>
					<input type="email" className="form-control" placeholder="Enter email" />
				</div>
				<div className="p-1">
					<label for="exampleFormControlInput1" className="form-label">Phone</label>
					<input type="number" className="form-control" placeholder="Enter phone" />
				</div>
				<div className="p-1">
					<label for="exampleFormControlInput1" className="form-label">Address</label>
					<input type="text" className="form-control" placeholder="Enter address" />
				</div>
				<div className="text-center pt-3 ps-1 pe-1">
					<button type="submit" class="btn btn-primary w-100">save</button>
				</div>

				<Link to={"/"}>
					<span>Or get back to the contacts</span>
				</Link>



			</form>

		</div>
	)
}
