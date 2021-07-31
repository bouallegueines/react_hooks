import { Col, Container, Form, Row } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

function FilterCard({ setTextT, setRateR, rateR }) {
  const ratingChanged = (newRating) => {
    setRateR(newRating);
  };

  return (
    <div>
      <Container>
        <Form>
          <Row className="mb-3">
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the Title"
                  onChange={(e) => setTextT(e.target.value)}
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Rating</Form.Label>
                <ReactStars
                  value={rateR}
                  count={5}
                  onChange={ratingChanged}
                  size={40}
                  activeColor="#ffd700"
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}

export default FilterCard;
