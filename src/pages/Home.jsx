import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Quiz</h1>
      <button
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        onClick={() => navigate("/quiz")}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default Home;
