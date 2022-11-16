import React from "react";

let ansower = "lorem ipsum lorem ipsum lorem ipsum";

function level_quiz(nivel){
  
  
  return
}


function options() {
  return (
    <>
      <div className="container">
        <div className="questions form-group text-center col-md-6 offset-md-3">
          <span> {ansower}</span>
          <form>
            <input className="btn-primary col" type="button" value={ansower} />
            <input className="btn-primary col" type="button" value={ansower} />
            <input className="btn-primary col" type="button" value={ansower} />
            <input className="btn-primary col" type="button" value={ansower} />
          </form>
        </div>
      </div>
    </>
  );
}

export default options;
