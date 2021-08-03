import React from "react";
import Instructions from "./Instructions";

const InstructionsUi = () => {
  return (
    <div>
      <div className="container-fluid d-flex justify-content-center">
        <div className="row ">
          <div className="col-md-3">
            <Instructions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructionsUi;
