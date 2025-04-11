import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/DetalleFilms.css";

const DetallesPlaneta = () => {
  const { store, actions } = useContext(Context);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const url = store.detalleActual[1]?.url;
    actions.loadDetalles(url, setInfo);
  }, []);

  return (
    <div>
      <div className="d-flex gap-3">
        <img
          src="https://placehold.co/600x400"
          className="w-100"
          style={{ height: "500px" }}
          alt="..."
        />
        <div>
          {info.length > 0 && <h1>{info[0].name}</h1>}
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
          </p>
        </div>
      </div>

      {info.length > 0 && (
        <div className="d-flex mt-4">
          <div className="lateral-borders col">
            <h4>General</h4>
            <p><strong>Climate:</strong> {info[0].climate}</p>
            <p><strong>Terrain:</strong> {info[0].terrain}</p>
            <p><strong>Population:</strong> {info[0].population}</p>
          </div>

          <div className="lateral-borders col">
            <h4>Dimensiones</h4>
            <p><strong>Diameter:</strong> {info[0].diameter}</p>
            <p><strong>Gravity:</strong> {info[0].gravity}</p>
            <p><strong>Surface water:</strong> {info[0].surface_water}</p>
          </div>

          <div className="lateral-borders col">
            <h4>Órbita</h4>
            <p><strong>Orbital period:</strong> {info[0].orbital_period}</p>
            <p><strong>Rotation period:</strong> {info[0].rotation_period}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetallesPlaneta;
