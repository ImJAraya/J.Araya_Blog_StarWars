import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/DetalleFilms.css"


const DetalleFilms = () => {
    const { store, actions } = useContext(Context);
    const [nombres, setNombres] = useState([])
    const [especies, setEspecies] = useState([])
    const [starships, setStarships] = useState([])
    const [vehicles, setVehicles] = useState([])
    const [planets, setPlanets] = useState([])
    
    useEffect(() => {
        const characters = store.detalleActual[store.llave]?.properties.characters;
        const species = store.detalleActual[store.llave]?.properties.species;
        const starships = store.detalleActual[store.llave]?.properties.starships;
        const vehicles = store.detalleActual[store.llave]?.properties.vehicles;
        const planets = store.detalleActual[store.llave]?.properties.planets;

        setNombres([]);
        setEspecies([]);
        setStarships([]);
        setVehicles([]);
        setPlanets([]);
    

        actions.forParaLLenar(characters, setNombres, "name")
        actions.forParaLLenar(species, setEspecies, "name")
        actions.forParaLLenar(starships, setStarships, "name")
        actions.forParaLLenar(vehicles, setVehicles, "name")
        actions.forParaLLenar(planets, setPlanets, "name")
    }, [store.detalleActual[store.llave]?.properties.url])

    return (
        <div>
            <div className="d-flex gap-3" >
                <img
                    src="https://placehold.co/600x400"
                    className="w-100"
                    style={{ height: "500px" }}
                    alt="..."
                />
                <div className="">
                    <h1>{store.detalleActual[store.llave].properties.title}</h1>
                    <p className="">{store.detalleActual[store.llave].properties.opening_crawl}</p>
                </div>
            </div>
            <div className="d-flex gap-3">
                <div>
                    <h2>Characters</h2>
                    {nombres.map((nombre, index) => (
                        <p key={index} className="nombre-personaje">{nombre}</p>
                    ))}
                </div>
                <div>
                    <h2>Species</h2>
                    {especies.map((nombre, index) => (
                        <p key={index} className="nombre-personaje">{nombre}</p>
                    ))}
                </div>
                <div>
                    <h2>Starships</h2>
                    {starships.map((nombre, index) => (
                        <p key={index} className="nombre-personaje">{nombre}</p>
                    ))}
                </div>
                <div>
                    <h2>Vehicles</h2>
                    {vehicles.map((nombre, index) => (
                        <p key={index} className="nombre-personaje">{nombre}</p>
                    ))}
                </div>
                <div>
                    <h2>Planets</h2>
                    {planets.map((nombre, index) => (
                        <p key={index} className="nombre-personaje">{nombre}</p>
                    ))}
                </div>
                <div>
                    <h2>Details</h2>
                    <p className="nombre-personaje">{store.detalleActual[store.llave].properties.director}</p>
                    <p className="nombre-personaje">{store.detalleActual[store.llave].properties.producer}</p>
                    <p className="nombre-personaje">{store.detalleActual[store.llave].properties.release_date}</p>
                </div>
            </div>
        </div>
    )
}
export default DetalleFilms