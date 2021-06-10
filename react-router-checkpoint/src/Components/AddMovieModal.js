import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function AddMovieModal({ show, onHide, addMovie }) {
    const [data, setData] = useState({
        title: "",
        posterURL: "",
        rate: 1,
        description: "",
        trailerLink: "",
    });
    const onSubmit = () => {
        let validToSubmit = true;
        Object.values(data).forEach((value) => {
            if (String(value).trim().length === 0) {
                validToSubmit = false;
            }
        });

        if (validToSubmit) {
            addMovie((prev) => {
                prev.push({ id: prev.length, ...data });
                return [...prev];
            });
        }

        setData({
            title: "",
            posterURL: "",
            rate: 1,
            description: "",
            trailerLink: "",
        });
        onHide();
    };

    return (
        <Modal
            onHide={onHide}
            show={show}
            aria-labelledby="contained-modal-title-vcenter"
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add New Movie
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container>
                    <Form>
                        <Form.Group>
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                value={data.title}
                                onChange={(e) =>
                                    setData((prev) => ({
                                        ...prev,
                                        title: e.target.value,
                                    }))
                                }
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Poster URL</Form.Label>
                            <Form.Control
                                type="text"
                                value={data.posterURL}
                                onChange={(e) =>
                                    setData((prev) => ({
                                        ...prev,
                                        posterURL: e.target.value,
                                    }))
                                }
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Trailer Link</Form.Label>
                            <Form.Control
                                type="text"
                                value={data.trailerLink}
                                onChange={(e) =>
                                    setData((prev) => ({
                                        ...prev,
                                        trailerLink: e.target.value,
                                    }))
                                }
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Movie Rate</Form.Label>
                            <Form.Control
                                as="select"
                                defaultValue={data.rate}
                                onChange={(e) =>
                                    setData((prev) => ({
                                        ...prev,
                                        rate: Number(e.target.value),
                                    }))
                                }
                            >
                                {[...Array(10).keys()].map((item) => (
                                    <option key={item}>{item + 1}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={data.description}
                                onChange={(e) =>
                                    setData((prev) => ({
                                        ...prev,
                                        description: e.target.value,
                                    }))
                                }
                            />
                        </Form.Group>
                    </Form>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
                <Button onClick={onSubmit}>Submit</Button>
            </Modal.Footer>
        </Modal>
    );
}
