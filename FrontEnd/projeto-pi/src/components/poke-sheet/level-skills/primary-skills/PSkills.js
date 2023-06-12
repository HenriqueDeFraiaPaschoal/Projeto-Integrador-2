import '../circles.css';
import React, { useState } from "react";

const PSkills = () => {
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
    { value: 1, cost: 10 },
    { value: 2, cost: 20 },
    { value: 3, cost: 30 },
    { value: 4, cost: 40 },
    { value: 5, cost: 50 },
    { value: 6, cost: 60 },
    { value: 7, cost: 70 },
    { value: 8, cost: 80 },
    { value: 9, cost: 90 },
    { value: 10, cost: 100 },
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

export default PSkills;