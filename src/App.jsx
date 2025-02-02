// src/App.jsx
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import QuizPage from "./pages/QuizPage";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div
          style={{
            backgroundImage: `url('/background.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<QuizPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;


