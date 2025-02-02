// src/components/Questio
// src/components/Question.jsx
import { motion } from "framer-motion";

const Question = ({ questionData, handleAnswer }) => {
  return (
    <motion.div
      className="max-w-2xl p-5 bg-gray-800 rounded-lg shadow-lg text-center border-4 border-transparent hover:border-yellow-400 hover:shadow-lg transition duration-300"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4 text-white">{questionData.description}</h2>
      <div className="grid gap-3">
        {questionData.options.map((option, index) => (
          <motion.button
            key={index}
            className="p-3 bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleAnswer(option.is_correct, option.description)}
          >
            {option.description}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default Question;
