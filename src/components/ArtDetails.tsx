import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { IArticle } from "../interfaces/IArticle";

const ArtDetails = () => {
  const articleEndpoint = "https://api.spaceflightnewsapi.net/v4/articles/";
  const params = useParams();
  const [article, setArticle] = useState<IArticle>();

  const articleDetailFetch = async () => {
    try {
      const response = await fetch(articleEndpoint + params.article_id + "/");
      if (response.ok) {
        const articleDetail = await response.json();
        setArticle(articleDetail);
        console.log(article);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    articleDetailFetch();
  }, []);

  return (
    <>
      <Row className="g-1">
        {article && (
          <>
            <Col md={6} className="p-4">
              <img src={article.image_url} alt="article-img" className="img-fluid" />
            </Col>
            <Col md={6} className="p-4 text-start">
              <h3 className="pb-2">{article.title}</h3>
              <p className="pb-2">{article.summary}</p>
              <p className="pb-2">{article.news_site}</p>
              <p className="pb-2">{article.featured}</p>
              <Link to={article.url} className="pb-2">
                {article.url}
              </Link>
            </Col>
          </>
        )}
      </Row>
    </>
  );
};

export default ArtDetails;
