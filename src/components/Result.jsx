import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { resetQuiz } from "../redux/quizSlice";

const Result = ({ score, total }) => {
  const dispatch = useDispatch();
  const { answers } = useSelector((state) => state.quiz); // Accessing answers from Redux store

  const correctAnswers = answers.filter(answer => answer.isCorrect);
  const wrongAnswers = answers.filter(answer => !answer.isCorrect);

  const handleRestart = () => {
    dispatch(resetQuiz()); // Clears Redux state
    window.location.reload(); // Ensures the quiz restarts properly
  };

  return (
    <motion.div
      className="w-full max-w-lg p-5 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg shadow-lg text-center"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-4 text-white">Quiz Completed!</h2>
      <p className="text-xl text-white">Your Score: {score} / {total}</p>

      {/* Correct Answers Section */}
      <div className="mt-5">
        <h3 className="text-lg font-semibold text-white">Correct Answers:</h3>
        {correctAnswers.length > 0 ? (
          <ul>
            {correctAnswers.map((answer, index) => (
              <li key={index} className="text-green-500">
                {answer.answer}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-white">No correct answers.</p>
        )}
      </div>

      {/* Wrong Answers Section */}
      <div className="mt-5">
        <h3 className="text-lg font-semibold text-white">Wrong Answers:</h3>
        {wrongAnswers.length > 0 ? (
          <ul>
            {wrongAnswers.map((answer, index) => (
              <li key={index} className="text-red-500">
                {answer.answer}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-white">No wrong answers.</p>
        )}
      </div>

      <button
        className="mt-4 px-5 py-2 bg-yellow-600 text-black rounded-lg hover:bg-yellow-700"
        onClick={handleRestart}
      >
        Restart Quiz
      </button>
    </motion.div>
  );
};

export default Result;
