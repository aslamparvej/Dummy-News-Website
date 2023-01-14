import React, { useState, useEffect } from "react";
import axios from "axios";

import "./News.scss";


const  demoImage = "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News"

const News = ({ newsCategory, count }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      // /news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}
      url: `https://bing-news-search1.p.rapidapi.com/news/search?q=${newsCategory}&count=${count}`,
      params: { safeSearch: "Off", textFormat: "Raw" },
      headers: {
        "X-BingApis-SDK": "true",
        "X-RapidAPI-Key": "f82c097db2mshdbdc8779f68967cp10acd1jsne7a222dd3cde",
        "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [newsCategory, count]);

  if (!data) return "Loading";

  return (
    <>
    <h2>{newsCategory.toUpperCase()}</h2>
    <div className="news">
      {data?.value?.map((news, i) => (
        <div className="news-card" key={i}>
          <div className="heading">
            <h3>
              {news.name.length > 15
                ? `${news.name.split(" ").slice(0, 15).join(" ")}...`
                : news.name}
            </h3>
            <img
              src={news?.image?.thumbnail?.contentUrl || demoImage} 
              alt="image"
            />
          </div>
          <div className="desc">
            <p>
              {news.description > 100
                ? `${news.description.substring(0, 100)}...`
                : news.description}
            </p>
            <a href={news.url} target="_blank">Read full news</a>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default News;
