import React from "react";

function footer() {
  return (
    <>
      <div className="fixed-bottom foot-bar">
        <div className="container">
          <div className="row justify-content-md-between align-items-center">
            <div className="navbar ">
              <div className="progress mt-4">
                <div className="progress-status "></div>
              </div>
              <div className="btn-div ">
                <input
                  className="footer-btn mt-3"
                  type="button"
                  value="Proxíma"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default footer;
