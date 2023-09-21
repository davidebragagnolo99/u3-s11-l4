import { Button, Card, Col, Row } from "react-bootstrap";
import { IArticle } from "../interfaces/IArticle";
import { Link } from "react-router-dom";
interface ArticleComponentProps {
  articles: IArticle;
  id: number;
}

const Article = ({ articles, id }: ArticleComponentProps) => {
  return (
    <>
      <Row className="justify-content-center m-3 p-3">
        <Col key={id}>
          <Card className="cardColor rounded border border-dark">
            <Card.Img variant="top" src={articles.image_url} />
            <Card.Body>
              <Card.Title>{articles.title}</Card.Title>
              <Card.Text>{articles.published_at}</Card.Text>
              <Button className="detailBtn btn-danger">
                <Link to={"/art-details" + articles.id} className="text-decoration-none navBtn">
                  To Details
                </Link>
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Article;
