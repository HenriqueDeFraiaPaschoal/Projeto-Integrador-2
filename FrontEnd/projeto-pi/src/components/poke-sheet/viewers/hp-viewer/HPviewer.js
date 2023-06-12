import '../HPeLviewer.css';
import React, { useState } from "react";

const HPviewer = () => {
//   const [rating, setRating] = useState(0);
  const [rating] = useState(0);

//   const handleRatingChange = (value, pointCost) => {
//     if (points >= pointCost) {
//       setRating(value);
//       setPoints(points - pointCost);
//     }
//   };

  return (
    <div class="BigViewer">
      <h3>{rating}</h3>
    </div>
  );
};

export default HPviewer;