import React, { useContext, useEffect } from "react";
import "../../styles/home.css";

import { Context } from "../store/appContext";
import ElementoActual from "./ElementoActual.jsx";
import { useNavigate } from "react-router";


export const Home = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();

	useEffect(() => {
		actions.loadSomeData()

	}, [])

	useEffect(() => {
		const entries = Object.entries(store.demo);
		for (let i = 0; i < entries.length; i++) {
			const [objeto, url] = entries[i]
			actions.loadSomeDataEspecifica(objeto, url)
		}
	}, [store.demo])
	return (
		<div>
		 <div className="text-center mt-5">
		 	<div className="card" style={{ width: "auto" }}>
		 		<ul className="list-group list-group-flush">
		 			{Object.entries(store.demo).map(([key, value], index) => (
		 				<div key={index} >
		 					<li className="list-group-item ">{key}</li>
		 					<div className="scroll-container">
		 						{Object.entries(store[key])?.map((ele, index2) => (
		 							<ElementoActual 
									onClickIcono={()=>actions.guardarFavorito(ele[1] )}
									 title={ele[1]?.properties?.title || ele[1]?.name || "Sin título"}
									 img={"https://placehold.co/300x200"}
		 							className="card-item" 
		 							onClick={() => {
		 								actions.guardarDetalleActual(ele[1],[key])
										actions.guardarLlave([key])
										navigate(`/Detalle/${[key]}`)
		 							}} 
		 							key={index2} />
		 						))}
		 					</div>
		 				</div>
		 			))}
		 		</ul>
		 	</div>
		 </div>
		</div>
	)
};
