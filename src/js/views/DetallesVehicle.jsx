import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/DetalleFilms.css";

const DetallesVehicle = () => {
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
          alt="vehicle"
        />
        <div>
          {info.length > 0 && <h1>{info[0].name}</h1>}
          <p>
            Vehicles in Star Wars range from speeders to large transport crafts. Here are the details
            of this specific vehicle, including speed, crew, and manufacturing data.
          </p>
        </div>
      </div>

      {info.length > 0 && (
        <div className="d-flex mt-4 flex-wrap">
          <div className="lateral-borders col">
            <h4>General Info</h4>
            <p><strong>Model:</strong> {info[0].model}</p>
            <p><strong>Class:</strong> {info[0].vehicle_class}</p>
            <p><strong>Manufacturer:</strong> {info[0].manufacturer}</p>
            <p><strong>Cost:</strong> {info[0].cost_in_credits} credits</p>
          </div>

          <div className="lateral-borders col">
            <h4>Performance</h4>
            <p><strong>Speed:</strong> {info[0].max_atmosphering_speed} km/h</p>
            <p><strong>Consumables:</strong> {info[0].consumables}</p>
          </div>

          <div className="lateral-borders col">
            <h4>Capacity</h4>
            <p><strong>Length:</strong> {info[0].length} m</p>
            <p><strong>Crew:</strong> {info[0].crew}</p>
            <p><strong>Passengers:</strong> {info[0].passengers}</p>
            <p><strong>Cargo:</strong> {info[0].cargo_capacity} kg</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetallesVehicle;
