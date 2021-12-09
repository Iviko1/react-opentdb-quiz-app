import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Categories, Difficulties } from "../../API";
import {
  HomeSelect,
  HomeStartButton,
  HomeWrapper,
  HomeHeading,
  HomeSelectWrapper,
  ErrorMessage,
} from "./Home.styles";

const Home = ({ fetchQuestions, error, setError }) => {
  const [category, setCategory] = useState();
  const [difficulty, setDifficulty] = useState();

  const navigate = useNavigate();

  const startQuiz = () => {
    if (category && difficulty) {
      fetchQuestions(category, difficulty);
      navigate("/quiz");
      setDifficulty("");
      setCategory("");
      setError();
    } else {
      setError("Please Select Both Fields.");
    }
  };

  return (
    <HomeWrapper>
      {error && (
        <ErrorMessage
          style={error ? { display: "block" } : { display: "none" }}
        >
          {error}
        </ErrorMessage>
      )}
      <HomeHeading>Quiz App</HomeHeading>
      <HomeSelectWrapper>
        <HomeSelect
          required
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option defaultValue="" disabled={category} hidden={category}>
            Select a Category
          </option>
          {Categories.map((category, index) => {
            return (
              <option key={index} value={category.value}>
                {category.category}
              </option>
            );
          })}
        </HomeSelect>
        <HomeSelect
          required
          onChange={(e) => {
            setDifficulty(e.target.value);
          }}
        >
          <option defaultValue="" disabled={difficulty} hidden={difficulty}>
            Select a Difficulty
          </option>
          {Difficulties.map((difficulty) => {
            return (
              <option key={difficulty} value={difficulty}>
                {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
              </option>
            );
          })}
        </HomeSelect>
      </HomeSelectWrapper>
      <HomeStartButton onClick={startQuiz}>Start Quiz</HomeStartButton>
    </HomeWrapper>
  );
};

export default Home;
