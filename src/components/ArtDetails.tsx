import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IArticle } from "../interfaces/IArticle";
import { Row } from "react-bootstrap";

const ArtDetails = () => {
  const articleEndpoint = "https://api.spaceflightnewsapi.net/v4/articles";
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
      <Row></Row>
    </>
  );
};

export default ArtDetails;
