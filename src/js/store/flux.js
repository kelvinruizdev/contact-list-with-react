const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			urlBase: "https://assets.breatheco.de/apis/fake/contact/",
			nameAgenda: "the_best_agenda",

			allContacts: [], //almacena todos los contactos de una agenda

			id: "" //para elegir

		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			getAllContactFrom: async () => {

				try {
					let response = await fetch(getStore().urlBase + "agenda/" + getStore().nameAgenda)
					let data = await response.json()

					if (response.ok) {
						setStore({
							allContacts: data
						})
					} else {
						console.log("Verificar la URL")
					}
					//console.log(response)
				} catch (err) {
					console.log(err)
				}

			},

			deleteContact: async (id) => {

				try {
					let response = await fetch(getStore().urlBase + `${id}`, {
						method: "DELETE"
					})

					if (response.ok) {
						getActions().getAllContactFrom()

					} else {
						console.log("Llamen a Deimian")
					}
				} catch (err) {
					console.log(err)
				}

			},

			createContact: async (contact) => {

				try {
					let response = await fetch(getStore().urlBase, {
						method: "POST",
						headers: {
							"Content-type": "application/json"
						},
						body: JSON.stringify(contact)
					})

					if (response.ok) {
						getActions().getAllContactFrom()
					} else {
						console.log("Campos vacios")
					}

				} catch (err) {
					console.log(err)
				}
			},

			updateContact: async (contact, id) => {
				try {
					let response = await fetch(getStore().urlBase + `${id}`, {
						method: "PUT",
						headers: {
							"Content-type": "application/json"
						},
						body: JSON.stringify(contact)
					})

					if (response.ok) {
						getActions().getAllContactFrom()
					} else {
						console.log("Campos vacios")
					}

				} catch (err) {
					console.log(err)
				}
			}

		}
	};
};

export default getState;
