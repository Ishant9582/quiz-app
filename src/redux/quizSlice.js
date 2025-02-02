import { createSlice } from "@reduxjs/toolkit";

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    score: 0,
    answers: [],
  },
  reducers: {
    setAnswer: (state, action) => {
      state.answers.push(action.payload);
    },
    setScore: (state, action) => {
      state.score = action.payload;
    },
    resetQuiz: (state) => {
      state.score = 0;
      state.answers = [];
    },
  },
});

export const { setAnswer, setScore, resetQuiz } = quizSlice.actions;
export default quizSlice.reducer;
