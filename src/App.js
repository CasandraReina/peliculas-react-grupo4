import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Header from './Header';
import Subtitulo from './Subtitulo';
import Peliculas from './Peliculas';
import Footer from './Footer';
import peliculas from './peliculas.json';

function App() {
  return (
    <Container>
      <Row>
      <Header/>
      <Subtitulo/>
      
      {peliculas.map(peli=>
      <Peliculas
      img={peli.img}
      titulo={peli.titulo}
      genero={peli.genero}
      descripcion={peli.descripcion}
      trailer={peli.trailer}
      />
      )}
      <Footer/>
      </Row>
    </Container>
  );
}

export default App;
