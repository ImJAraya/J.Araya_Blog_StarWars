import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/DetalleFilms.css";

const DetallesSpecies = () => {
    const { store, actions } = useContext(Context);
    const [info, setInfo] = useState([]);
    const [homeworldName, setHomeworldName] = useState("");

    useEffect(() => {
        const url = store.detalleActual[1]?.url;
        actions.loadDetalles(url, setInfo);
        }, []);

    useEffect(() => {
        if (info.length > 0 && info[0].homeworld) {
            actions.loadDetallesFilms(info[0].homeworld,setHomeworldName,"name")
        }
      }, [info]);
      

    return (
        <div>
            <div className="d-flex gap-3">
                <img
                    src="https://placehold.co/600x400"
                    className="w-100"
                    style={{ height: "500px" }}
                    alt="species"
                />
                <div>
                    {info.length > 0 && <h1>{info[0].name}</h1>}
                    <p>
                        Species in Star Wars vary in classification, designation, and biological traits.
                        Learn more about each one and its unique culture, traits, and appearance.
                    </p>
                </div>
            </div>

            {info.length > 0 && (
                <div className="d-flex mt-4">
                    <div className="lateral-borders col">
                        <h4>Biology</h4>
                        <p><strong>Classification:</strong> {info[0].classification}</p>
                        <p><strong>Designation:</strong> {info[0].designation}</p>
                        <p><strong>Average Height:</strong> {info[0].average_height} cm</p>
                        <p><strong>Average Lifespan:</strong> {info[0].average_lifespan} years</p>
                    </div>

                    <div className="lateral-borders col">
                        <h4>Appearance</h4>
                        <p><strong>Eye Colors:</strong> {info[0].eye_colors}</p>
                        <p><strong>Hair Colors:</strong> {info[0].hair_colors}</p>
                        <p><strong>Skin Colors:</strong> {info[0].skin_colors}</p>
                    </div>

                    <div className="lateral-borders col">
                        <h4>Culture</h4>
                        <p><strong>Language:</strong> {info[0].language}</p>
                        <p><strong>Homeworld:</strong> {homeworldName}</p>
                        <p><strong>Population:</strong> {info[0].people.length} known individuals</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DetallesSpecies;
