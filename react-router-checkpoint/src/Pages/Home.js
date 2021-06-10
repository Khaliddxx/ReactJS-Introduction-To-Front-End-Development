import { useEffect, useState } from "react";
import MovieList from "../Components/MovieList";
import AddMovieModal from "../Components/AddMovieModal";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { staticMovies } from "../movies";

export default function Home() {
    const [movies, setMovies] = useState(staticMovies);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [range, setRange] = useState(0);

    useEffect(() => {
        clearFilters();
        // eslint-disable-next-line
    }, [movies]);

    const clearFilters = () => {
        setSearchText("");
        setRange(0);
        setFilteredMovies([...movies]);
    };

    const applyFilters = () => {
        let moviesTemp = movies;
        if (searchText.length > 0) {
            moviesTemp = movies.filter((movie) => {
                const re = new RegExp(searchText, "i");
                return Boolean(movie.title.match(re));
            });
        }

        if (range > 0) {
            moviesTemp = moviesTemp.filter((movie) => movie.rate <= range);
        }

        setFilteredMovies([...moviesTemp]);
    };

    return (
        <div className="container mt-5">
            <Row className="justify-content-md-center">
                <Col>
                    <Form.Control
                        type="text"
                        placeholder="Search for movie's title"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </Col>
                <Col></Col>
                <Col className="m-auto">
                    <Form.Group controlId="formBasicRangeCustom">
                        <Form.Label className="d-block">Rate</Form.Label>
                        <Form.Control
                            type="range"
                            size="sm"
                            value={range * 10}
                            step="10"
                            onChange={(e) =>
                                setRange(
                                    Math.round(Number(e.target.value) / 10)
                                )
                            }
                            className="w-75 d-inline mr-2"
                        />
                        <span className="m-auto">{range}</span>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="justify-content-end">
                <Button className="mr-3" onClick={clearFilters}>
                    Clear Filters
                </Button>
                <Button className="mr-3" onClick={applyFilters}>
                    Apply Filters
                </Button>
                <Button onClick={() => setModalShow(true)}>
                    Add New Movie
                </Button>
            </Row>
            <MovieList movies={filteredMovies} />
            <AddMovieModal
                show={modalShow}
                addMovie={setMovies}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
}
