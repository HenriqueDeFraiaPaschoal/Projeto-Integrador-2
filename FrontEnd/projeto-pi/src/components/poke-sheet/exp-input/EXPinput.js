import './EXPinput.css';
import React, { useState } from "react";

const EXPinput = () => {
  const [points, setPoints] = useState(0);

  const handlePointsChange = (event) => {
    setPoints(parseInt(event.target.value, 10));
  };

  return (
    <div>
      <div class="EXPinput">
        <label htmlFor="points-input"></label>
        <input
          type="number"
          id="points-input"
          value={points}
          onChange={handlePointsChange}
        />
      </div>
    </div>
  );
};

export default EXPinput;