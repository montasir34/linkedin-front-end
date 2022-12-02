import React from 'react';
function Spinner() {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div>
        {/* <div>{progress}</div> */}
        <div className="center">
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
      </div>
    </div>
  );
}

export default Spinner;
