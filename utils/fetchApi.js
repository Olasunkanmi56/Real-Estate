import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com"

export const fetchApi = async (url) => {
   const {data } = await axios.get((url), {
    headers: {
        'X-RapidAPI-Key': '181b48e817mshbca2d08e1081fc2p1933a8jsn90c4b76730be',
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
      }
   })

   return data;
}