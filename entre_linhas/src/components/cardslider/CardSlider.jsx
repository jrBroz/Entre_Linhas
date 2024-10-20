import { Carousel, Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import "./cardSlider.css";

class CardSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      livrosEmAlta: [],
      erro: null,
    };
  }

  componentDidMount() {
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=subject:fiction&orderBy=newest"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao carregar os dados dos livros.");
        }
        return response.json();
      })
      .then((data) => {
        const livros = data.items.map((livro) => ({
          imagem: livro.volumeInfo.imageLinks
            ? livro.volumeInfo.imageLinks.thumbnail
            : "https://via.placeholder.com/128x193",
          titulo: livro.volumeInfo.title,
          autor: livro.volumeInfo.authors
            ? livro.volumeInfo.authors.join(", ")
            : "Autor desconhecido",
        }));

        this.setState({ livrosEmAlta: livros });
      })
      .catch((erro) => this.setState({ erro: erro.message }));
  }

  render() {
    if (this.state.erro) {
      return <p>{this.state.erro}</p>;
    }

    return (
      <Carousel interval={5000}>
        {this.state.livrosEmAlta.map((livroEmAlta, index) => (
          <Carousel.Item key={livroEmAlta.titulo}>
            <div className="d-flex justify-content-center">
              <Card className="card-livro">
                <div className="d-flex flex-column flex-md-row text-center">
                  <div className="image-container">
                    <Card.Img
                      variant="top"
                      src={livroEmAlta.imagem}
                      className="card-img-custom"
                    />
                  </div>
                  <Card.Body className="d-flex flex-column justify-content-center">
                    <Card.Title className="titulo">
                      <h3>{livroEmAlta.titulo}</h3>
                    </Card.Title>
                    <Card.Text className="texto">{livroEmAlta.autor}</Card.Text>
                    <Card.Text className="texto">
                      <button className="button-card">Saiba mais</button>
                    </Card.Text>
                  </Card.Body>
                </div>
              </Card>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
}

export default CardSlider;
