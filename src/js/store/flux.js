const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: {},
			films: {},
			people: {},
			planets: {},
			species: {},
			starships: {},
			vehicles: {},
			detalleActual: {},
			favoritos: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: async () => {
				try {
					let response = await fetch("https://www.swapi.tech/api/")
					if (!response)
						throw new Error("algo salio mal en el GET")
					const data = await response.json()
					setStore({ ...getStore(), demo: data.result })
				} catch (error) {
					console.error("algo salio mal", error)
				}
			},
			loadSomeDataEspecifica: async (objeto, url) => {
				try {
					let response = await fetch(url)
					if (!response)
						throw new Error("algo salio mal en el GET")
					const data = await response.json()
					setStore({ ...getStore(), [objeto]: data.result || data.results })
				} catch (error) {
					console.error("algo salio mal", error)
				}
			},
			loadDetalles: async (url, fn) => {
				try {
					let response = await fetch(url)
					if (!response)
						throw new Error("algo salio mal en el GET")
					const data = await response.json()
					fn(prev => {
						const nuevo = [...prev, data.result.properties];
						return nuevo;
					});

				} catch (error) {
					console.error("algo salio mal", error)
				}
			},
			loadDetallesFilms: async (url, fn, detalleEspecifico) => {
				try {
					let response = await fetch(url)
					if (!response)
						throw new Error("algo salio mal en el GET")
					const data = await response.json()
					fn(prev => {
						const nuevo = [...prev, data.result.properties[detalleEspecifico]];
						return nuevo;
					});

				} catch (error) {
					console.error("algo salio mal", error)
				}
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
			guardarDetalleActual: (detalle, seccion) => {
				setStore({ ...getStore(), detalleActual: [seccion, detalle] })
			},
			guardarFavorito: (detalle) => {
				const store = getStore();
				const nombre = detalle.name || detalle.properties.title;
				const yaExiste = store.favoritos.some(fav =>
					(fav.url || fav.properties?.url) === (detalle.url || detalle.properties?.url)
				);


				if (!yaExiste) {
					setStore({ ...store, favoritos: [...store.favoritos, detalle] });
				} else {
					alert(`Ya está en favoritos: ${nombre}`);

				}
			},
			forParaLLenar: (arry, fn, detalleEspecifico) => {
				if (arry && arry.length > 0) {
					for (let i = 0; i < arry.length; i++) {
						const url = arry[i];
						getActions().loadDetallesFilms(url, fn, detalleEspecifico);
					}
				}
			},
			eliminarFavorito: (index) => {
				const store = getStore();
				const nuevosFavoritos = store.favoritos.filter((_, i) => i !== index);
				setStore({ ...store, favoritos: nuevosFavoritos });
			}
			
		}
	};
};

export default getState;
