import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Contact } from "./views/contact";
import { AddNewContact } from "./views/addNewContact";
import injectContext from "./store/appContext";

import { Navbar } from "./component/Navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="container mt-5">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					{/* <Navbar /> */}
					<Routes>
						<Route path="/" element={<Contact />} />
						<Route path="/add-contact" element={<AddNewContact update={false} />} />
						<Route path="/update-contact" element={<AddNewContact update={true} />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					{/* <Footer /> */}
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
