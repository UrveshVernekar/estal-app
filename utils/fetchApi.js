import axios from "axios";

// Exporting since the baseUrl will be used in other files
export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "1969e4764emsh60d580307d14984p10f486jsne9b60407a2a6",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });

  return data;
};
