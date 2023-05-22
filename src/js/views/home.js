import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "../../styles/home.css";

import { Context } from "../store/appContext.js";

export function Home() {

	const { actions, store } = useContext(Context)

	return (
		<>
			<div className="ml-auto">
				<Link to="/add-contact">
					<button className="btn btn-success">Add new contact</button>
				</Link>
			</div>

		</>
	)
}


