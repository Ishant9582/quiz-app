import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setAnswer, setScore, resetQuiz } from "../redux/quizSlice";
import { fetchQuizData } from "../api/quizService";
import Question from "./Question";
import Result from "./Result";
import Confetti from "react-confetti";

const Quiz = () => {
  const [quizData, setQuizData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const dispatch = useDispatch();
  const { score } = useSelector((state) => state.quiz);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchQuizData();
      setQuizData(data);
      setLoading(false);
    };
    getData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleAnswer = (isCorrect, answer) => {
    dispatch(setAnswer({ isCorrect, answer }));
    if (isCorrect) {
      dispatch(setScore(score + 1));
    }
    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const restartQuiz = () => {
    dispatch(resetQuiz()); // Clear Redux state
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="flex flex-col items-center justify-center text-white p-5 bg-gray-800">
      {loading ? (
        <div className="spinner-border text-white" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        !showResults ? (
          quizData.length > 0 && (
            <motion.div
              className="max-w-2xl p-5 bg-gray-700 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Question
                questionData={quizData[currentQuestion]}
                handleAnswer={handleAnswer}
              />
            </motion.div>
          )
        ) : (
          <>
            <Confetti width={windowWidth} height={windowHeight} numberOfPieces={200} />
            <Result score={score} total={quizData.length} restart={restartQuiz} />
          </>
        )
      )}
    </div>
  );
};

export default Quiz;
