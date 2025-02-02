import axios from "axios";

const API_URL = "https://api.jsonserve.com/Uw5CrX";

export const fetchQuizData = async () => {
  try {
    const response = await axios.get(`https://api.allorigins.win/get?url=${encodeURIComponent(API_URL)}`);
    
    // The data comes as a string, so we need to parse it
    const jsonData = JSON.parse(response.data.contents);
    console.log(jsonData.questions) ;
    return jsonData.questions;
  } catch (error) {
    console.error("Error fetching quiz data:", error);
    return [];
  }
};


