import { rapidApiKey } from "@/constants";
import axios from "axios";

export const fetchTrendingVideos = async () => {
  const options = {
    method: "GET",
    url: "https://yt-api.p.rapidapi.com/trending",
    params: {
      geo: "US",
      type: "now",
      lang: "en",
    },
    headers: {
      "x-rapidapi-key": rapidApiKey,
      "x-rapidapi-host": "yt-api.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.data;
  } catch (error) {
    console.log("Error: ", error);
    return [];
  }
};