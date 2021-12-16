import { useState } from "react";
import { BrowserRouter as Routes, Route, Routes } from "react-router-dom";
import axios from "axios";
import GlobalStyle from "./GlobalStyles";
import { Container } from "./Components/Container/Container.styles";
import Home from "./Pages/Home";
import Quiz from "./Pages/Quiz";
import Score from "./Pages/Score";

const App = () => {
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);
  const [error, setError] = useState();

  const fetchQuestions = async (category, difficulty) => {
    const URL = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`;

    const { data } = await axios.get(URL);

    setQuestions(data.results);
  };

  return (
    <Routes basename="/react-opentdb-quiz-app">
      <GlobalStyle />
      <Container>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                fetchQuestions={fetchQuestions}
                error={error}
                setError={setError}
              />
            }
          />
          <Route
            path="/quiz"
            element={
              <Quiz
                questions={questions}
                setQuestions={setQuestions}
                score={score}
                setScore={setScore}
                error={error}
                setError={setError}
              />
            }
          />
          <Route
            path="/score"
            element={
              <Score
                score={score}
                setScore={setScore}
                setQuestions={setQuestions}
              />
            }
          />
        </Routes>
      </Container>
    </Routes>
  );
};

export default App;
