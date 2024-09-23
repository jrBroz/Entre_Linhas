import { Carousel, Card} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import './cardSlider.css';

class CardSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      livrosEmAlta: [],
      erro: null,
    };
  }

  componentDidMount() {
    fetch("/livrosEmAlta.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao carregar os dados dos livros.");
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ livrosEmAlta: data });
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
          <Carousel.Item key={livroEmAlta.index}>
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
                    <Card.Title>{livroEmAlta.titulo}</Card.Title>
                    <Card.Text>{livroEmAlta.autor}</Card.Text>
                    <Card.Text>{livroEmAlta.descricao}</Card.Text>
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
