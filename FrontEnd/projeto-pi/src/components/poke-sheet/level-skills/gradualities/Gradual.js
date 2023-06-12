import '../circles.css';
import React, { useState } from "react";

const Gradual = () => {
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
    { value: 1, cost: 0 },
    { value: 2, cost: 0 },
    { value: 3, cost: 0 },
    { value: 4, cost: 0 },
    { value: 5, cost: 0 },
  ];

  return (
    <div>
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
    </div>
  );
};

export default Gradual;