import { useEffect, useState } from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import "./NewsPage.css";

export default function NewsPage() {
  const [news, setNews] = useState();
  const { Text, Title } = Typography;
  const demoImage =
    "http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";

  
  useEffect(function () {
    async function getNews() {
      const result = await fetch(
        "https://bing-news-search1.p.rapidapi.com/news/search?q=nft&freshness=Day&textFormat=Raw&safeSearch=Off",
        {
          method: "GET",
          headers: {
            "x-bingapis-sdk": "true",
            "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
            "x-rapidapi-key":
              "77fa2025c7mshfb82d24d93cebc3p1c01edjsn7920b40f87dd"
          }
        }
      )
        .then((response) => response.json())
        .then((response) => response)
        .catch((err) => {
          console.error(err);
        });

      setNews(result);
    }
    getNews();
  }, []);

  // console.log('eahehhe', news.value);

  return (
    <div>
      {news ? (
        // console.log(news.value)
        news.value.map((n, idx) => (
          <Col xs={24} key={idx}>
            <Card hoverable className="news-card">
              <a href={n.url} target="_blank" rel="norefferer">
                <div className="news-image-container">
                  <Title className="news-title" level={4}>
                    {n.name}
                  </Title>
                  {/* Display news article image or default image if none */}
                  <img
                    style={{ maxWidth: "200px", maxHeight: "100px" }}
                    src={n?.image?.thumbnail?.contentUrl || demoImage}
                    alt="news"
                  />
                </div>
                <p>
                  {n.description > 100
                    ? `${n.description.substring(0, 100)}...`
                    : n.description}
                </p>
                <div className="provider-container">
                  <div>
                    <Avatar
                      src={
                        n.provider[0]?.image?.thumbnail?.contentUrl || demoImage
                      }
                      alt="news"
                    />
                    {/* Display name of news provider */}
                    <Text className="provider-name">{n.provider[0]?.name}</Text>
                  </div>
                  {/*  Display when news article was posted */}
                  <Text>{n.datePublished}</Text>
                </div>
              </a>
            </Card>
          </Col>
        ))
      ) : (
        <p>no</p>
      )}
    </div>
  );
}
