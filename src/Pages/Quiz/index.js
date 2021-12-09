import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Spinner from "../../Components/Spinner";
import {
  QuizWrapper,
  QuizCard,
  QuestionCard,
  OptionsContainer,
  Option,
  QuizHeadingWrapper,
  ResetButton,
} from "./Quiz.styles";

const Quiz = ({
  score,
  questions,
  setQuestions,
  setScore,
  error,
  setError,
}) => {
  const [options, setOptions] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userOption, setUserOption] = useState("");

  const navigate = useNavigate();

  const handleShuffle = (optionss) => {
    return optionss.sort(() => Math.random() - 0.5);
  };

  const handleCheck = (option) => {
    if (option === questions[currentQuestion].correct_answer) {
      setScore(score + 1);
      handleNext();
    } else {
      handleNext();
    }
  };

  const handleNext = () => {
    setTimeout(() => {
      if (currentQuestion + 1 < 10) {
        setCurrentQuestion(currentQuestion + 1);
        setUserOption();
      } else {
        setCurrentQuestion(0);
        setOptions();
        setUserOption();
        setQuestions();
        navigate("/score");
      }
    }, 1500);
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setUserOption();
    setOptions();
    setQuestions();
    setScore(0);
    navigate("/");
  };

  useEffect(() => {
    if (questions) {
      if (questions.length !== 0) {
        setOptions(
          handleShuffle([
            questions[currentQuestion].correct_answer,
            ...questions[currentQuestion].incorrect_answers,
          ])
        );
      } else {
        setQuestions();
        setError("No Questions Found");
        navigate("/");
      }
    }
  }, [questions, currentQuestion, navigate, setQuestions, setError]);

  return (
    <QuizWrapper>
      {!questions && <Spinner />}
      {questions && questions.length !== 0 && (
        <QuizCard>
          <QuizHeadingWrapper>
            <h1>Score: {score}</h1>
            <h1>{currentQuestion + 1} / 10</h1>
          </QuizHeadingWrapper>
          <QuestionCard>
            <h1>{questions[currentQuestion].question}</h1>
            <OptionsContainer>
              {options &&
                options.map((option) => {
                  return (
                    <Option
                      value={option}
                      key={option}
                      onClick={(e) => {
                        setUserOption(option);
                        handleCheck(option);
                      }}
                      className={
                        (userOption &&
                          option ===
                            questions[currentQuestion].correct_answer &&
                          "correct") ||
                        (userOption && "incorrect")
                      }
                      disabled={userOption}
                    >
                      {option}
                    </Option>
                  );
                })}
            </OptionsContainer>
          </QuestionCard>
        </QuizCard>
      )}
      {questions && <ResetButton onClick={handleReset}>Reset</ResetButton>}
    </QuizWrapper>
  );
};

export default Quiz;
