import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/DetalleFilms.css"


const DetallesPeople = () => {
    const { store, actions } = useContext(Context);
    const [info, setInfo] = useState([]);

    useEffect(() => {
        const url = store.detalleActual[1]?.url;
        actions.loadDetalles(url, setInfo)
    }, [])

    return (
        <div>
            <div className="d-flex gap-3" >
                <img
                    src="https://placehold.co/600x400"
                    className="w-100"
                    style={{ height: "500px" }}
                    alt="..."
                />
                <div>
                    {info.length > 0 && (<h1>{info[0].name}</h1>)}
                    <p>
                        Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy text ever
                        since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the
                        1960s with the release of Letraset sheets containing
                        Lorem Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
            {info.length > 0 && (
                <div className="d-flex" >
                    <div className="lateral-borders col">
                        <h2>Appearances</h2>
                        <p>Lorem Ipsum is simply
                            dummy text of the printing
                            and typesetting industry.
                            Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className="lateral-borders col">
                        <p><strong>Gender:</strong> {info[0].gender}</p>
                        <p><strong>Skin color:</strong> {info[0].skin_color}</p>
                        <p><strong>Hair color:</strong> {info[0].hair_color}</p>
                        <p><strong>Eye color:</strong> {info[0].eye_color}</p>
                    </div>
                    <div className="lateral-borders col">
                        <p><strong>Birth year:</strong> {info[0].birth_year}</p>
                    </div>
                    <div className="lateral-borders col">
                        <p><strong>Height:</strong> {info[0].height} cm</p>
                        <p><strong>Mass:</strong> {info[0].mass} kg</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default DetallesPeople