import React from "react";
import { useNavigate } from "react-router";
import { ScoreWrapper } from "./Score.style";

const Score = ({ score, setScore, setQuestions }) => {
  const navigate = useNavigate();

  const handleReset = () => {
    setScore(0);
    setQuestions();
    navigate("/");
  };

  return (
    <ScoreWrapper>
      <h1>
        Final Score :{" "}
        <span style={score > 5 ? { color: "#23C552" } : { color: "#F84F31" }}>
          {score}
        </span>
      </h1>
      <button onClick={handleReset}>Home</button>
    </ScoreWrapper>
  );
};

export default Score;
