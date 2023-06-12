import '../circles.css';
import React, { useState } from "react";

const SSkills = () => {
  const [rating, setRating] = useState(0);
  const [points, setPoints] = useState(0);

  const handleRatingChange = (value, pointCost) => {
    if (points >= pointCost) {
      setRating(value);
      setPoints(points - pointCost);
    }
  };

//   const handlePointsChange = (event) => {
//     setPoints(parseInt(event.target.value, 10));
//   };

  const ratingOptions = [
    { value: 1, cost: 8 },
    { value: 2, cost: 16 },
    { value: 3, cost: 24 },
    { value: 4, cost: 32 },
    { value: 5, cost: 40 },
  ];

  return (
    <div>
      {/* <h3>Rating: {rating}</h3> */}
      <div className="rating-buttons">
        {ratingOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => handleRatingChange(option.value, option.cost)}
            className={option.value <= rating ? "selected" : ""}
            disabled={option.cost > points}
          >
            <div className="circle" />
          </button>
        ))}
      </div>
      {/* <div>
        <label htmlFor="points-input">Points:</label>
        <input
          type="number"
          id="points-input"
          value={points}
          onChange={handlePointsChange}
        />
      </div> */}
    </div>
  );
};

export default SSkills;