export interface AverageScoreProps {
  score: number;
}

export function AverageScore({ score }: AverageScoreProps) {
  const filledStars = Math.floor(score);
  const emptyStars = 5 - filledStars;

  return (
    <div className="block is-flex is-align-items-center">
      {[...Array(filledStars)].map((_, i) => (
        <i
          key={i}
          className="fas fa-star is-size-4 mr-1"
          style={{ color: "orange" }}
        />
      ))}
      {[...Array(emptyStars)].map((_, i) => (
        <i
          key={i}
          className="far fa-star is-size-4 mr-1"
          style={{ color: "orange" }}
        />
      ))}
      <span className="has-text-weight-bold is-size-5">{score.toFixed(1)}</span>
    </div>
  );
}

export default AverageScore;
