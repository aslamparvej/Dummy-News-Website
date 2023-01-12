// createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
import axios from 'axios';

const newsCategory = "cricket";
const count = 20;

const baseUrl = `https://bing-news-search1.p.rapidapi.com/news/search?q=${newsCategory}&count=${count}`;



const getNews = () => {
  const options = {
    method: 'GET',
    url: baseUrl,
    params: {safeSearch: 'Off', textFormat: 'Raw', freshness: 'Day'},
    headers: {
      'X-BingApis-SDK': 'true',
      'X-RapidAPI-Key': 'f82c097db2mshdbdc8779f68967cp10acd1jsne7a222dd3cde',
      'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
}

export default getNews;





