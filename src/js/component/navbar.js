import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


import "../../styles/navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


export const Navbar = () => {
	const [showDropdown, setShowDropdown] = useState(false);
	const navigate = useNavigate();
	const { store, actions } = useContext(Context);

	const handlerClick = (item) => {
		const url = item.url || item.properties.url;
		const seccion = url.split("/api/")[1].split("/")[0];
		actions.guardarDetalleActual(item, seccion)
		actions.guardarLlave(seccion) // 👈 ESTA ES LA QUE USÁS PARA QUE DetalleFilms FUNCIONE
		navigate(`/Detalle/${seccion}`)

		setShowDropdown(false);
	}
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Home</span>
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					<button
						className="btn btn-secondary"
						onClick={() => setShowDropdown(!showDropdown)}
					>
						{store.favoritos.length} Favoritos
					</button>

					{showDropdown && (
						<ul className="dropdown-menu show custom-dropdown-menu" style={{ display: "block" }}>
							{store.favoritos.length === 0 ? (
								<li className="dropdown-item">No hay favoritos</li>
							) : (
								store.favoritos.map((item, index) => (
									<div key={index} className="d-flex p-2">
										<div onClick={() => {
											handlerClick(item)
										}}>
											<li className="dropdown-item">
												{item.name || item.properties.title}
											</li>
										</div>
										<div onClick={() => actions.eliminarFavorito(index)}>
											<FontAwesomeIcon icon={faTrash} />
										</div>
									</div>

								))
							)}
						</ul>
					)}
				</div>

			</div>
		</nav>
	);
};
// setStore({ ...store, favoritos: [...store.favoritos, detalle] });