import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Link, useParams } from "react-router-dom";
import { staticMovies } from "../movies";
import { useEffect, useState } from "react";

export default function Details() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const tempMovie = staticMovies[id];
        setMovie(tempMovie);
        // eslint-disable-next-line
    }, []);

    return (
        <Container>
            {movie ? (
                <Row className="justify-content-md-center p-2 h-100">
                    <Col xs={1}>
                        <Link to="/">
                            <Button>Back</Button>
                        </Link>
                    </Col>
                    <Col xs={11}>
                        <Row style={{ height: "70%" }}>
                            <iframe
                                title={movie.title}
                                height="100%"
                                width="100%"
                                frameBorder="0"
                                src={movie.trailerLink}
                                allowFullScreen
                            ></iframe>
                        </Row>
                        <Row className="justify-content-md-center p-3">
                            <h4>{movie.description}</h4>
                        </Row>
                    </Col>
                </Row>
            ) : (
                <Row className="justify-content-md-center align-items-md-center h-100">
                    <h1>There is no movie for this id: {id}</h1>
                </Row>
            )}
        </Container>
    );
}
