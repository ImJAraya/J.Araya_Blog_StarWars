import React, { useContext } from "react";

import { Context } from "../store/appContext";
import { useParams } from "react-router";

import "../../styles/ElementoActual.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';




const ElementoActual = ({ onClick, img, title, onClickIcono }) => {
  const { store, actions } = useContext(Context);
  const { index } = useParams();

  return (
    <div className="">
      <div className="card " style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">Some quick example text to build
            on the card title and make up the bulk of the card's content.</p>
          <div className="d-flex justify-content-between">
            <a href="#" onClick={onClick} className="btn btn-primary">More details</a>
            <div onClick={onClickIcono}>
              <FontAwesomeIcon icon={farHeart} size="2x" />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
export default ElementoActual