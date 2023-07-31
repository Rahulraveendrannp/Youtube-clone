import axios from "axios";
const BASE_URL='https://youtube138.p.rapidapi.com';


const options = {
  params: {
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key': 'e8f3ff75e0mshec2adefc7b56c21p165f2ajsn24c186145cd4',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};
export const fetchDataFromApi=async(url)=>{
    const {data}= await axios.get(`${BASE_URL}/${url}`,options)
    return data
  }