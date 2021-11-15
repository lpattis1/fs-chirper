import React, { useEffect } from "react";
import { gsap } from "gsap";
import { createRef } from "react";

const Chirp = ({ children }) => {
  return (
    <div>
      <div className="row chirp-row ">
        <div className="col col-12 chirp-col">
          <div className="card chirp mb-3 ">
            <div
              id="#chirpline"
              className="container d-flex flex-column justify-content-center align-items-center"
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chirp;
