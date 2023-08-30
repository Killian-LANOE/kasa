const StarIcon = ({ filled }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={filled ? "#FF6060" : "#E3E3E3"}
    viewBox="0 0 24 24"
    className="h-6 w-6 md:h-7 md:w-7 lg:h-9 lg:w-9"
  >
    <path d="M12 2 L15.09 8.36 L22 9.27 L17 13 L18.18 19 L12 16.73 L5.82 19 L7 13 L2 9.27 L8.91 8.36 L12 2 Z" />
  </svg>
);

function StarsRatings({ rating }) {
  const filledStars = parseInt(rating);
  const remainingStars = 5 - filledStars;

  return (
    <div className="flex">
      {[...Array(filledStars)].map((_, index) => (
        <StarIcon key={index} filled />
      ))}
      {[...Array(remainingStars)].map((_, index) => (
        <StarIcon key={index} />
      ))}
    </div>
  );
}

export default StarsRatings;
