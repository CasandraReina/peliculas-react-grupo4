import React from "react";
import Pelicula1 from './img/Pelicula1.jpg';
import Pelicula2 from './img/Pelicula2.jpg';
import Pelicula3 from './img/Pelicula3.jpg';
import Pelicula4 from './img/Pelicula4.jpg';
import Pelicula5 from './img/Pelicula5.jpg';

class Peliculas extends React.Component{
render(){
    return(
<section className="Recientes">
  <div className="PeliculasRecientes">

   <article className="Peliculas1">
     <img src={Pelicula1} alt="" className="Icono"/>
    <ul>
     <h1 className="TituloPelicula">RED</h1>
     <p cclassName="Genero">PG
     03/10/2022 (CZ)
     Animación, Familia, Comedia, Fantasía
     (1h 40m)</p>
     <h6 className="Puntuacion">Puntuacion  
     <i className="heart fa-solid fa-heart"></i>
     <i className="heart fa-solid fa-heart"></i>
     <i className="heart fa-solid fa-heart"></i>
     <i className="heart fa-solid fa-heart"></i>
     <i className="heart fa-regular fa-heart"></i></h6>
     <h3>Descripcion</h3>
     <p className="Descripcion">Mei Lee es una niña china-canadiense de trece años que se debate entre ser la hija obediente de su madre y el caos de la adolescencia. Y, por si los cambios en sus intereses, relaciones y cuerpo no fueran suficientes, cada vez que se emociona o estresa demasiado, se convierte en un panda rojo gigante.</p>

     <a className="VerTrailer" href="https://www.youtube.com/watch?v=upGoAejd7LM">Ver Trailer</a>
     <a className="VerTrailer" href="#">Mas Detalles</a>
  </ul>
</article>

<article className="Peliculas2">
  <img src={Pelicula2} alt="" className="Icono"/>
  <ul>
    <h1 className="TituloPelicula">PREY</h1>
    <p className="Genero">R
      08/05/2022 (US)
      Suspense, Acción 
      (1h 40m)</p>
      <h6 className="Puntuacion">Puntuacion  
        <i className="heart fa-solid fa-heart"></i>
        <i className="heart fa-solid fa-heart"></i>
        <i className="heart fa-solid fa-heart"></i>
        <i className="heart fa-solid fa-heart"></i>
        <i className="heart fa-solid fa-heart"></i></h6>
  <h3>Descripcion</h3>
  <p className="Descripcion"> La historia no contada de una joven de la Nación Comanche, Naru: una guerrera feroz y altamente hábil, criada entre algunos de los mejores cazadores que vagaban por las Grandes Llanuras a principios de 1700. Confiada en que es tan capaz como los otros jóvenes cazadores, se dispone a proteger a su pueblo cuando el peligro amenaza a su campamento comanche.</p>
  
  <a className="VerTrailer" href="https://www.youtube.com/watch?v=wZ7LytagKlc">Ver Trailer</a>
  <a className="VerTrailer" href="#">Mas Detalles</a>
  </ul>
  </article>

  <article className="Peliculas3">
    <img src={Pelicula3} alt="" className="Icono"/>
    <ul>
    <h1 className="TituloPelicula">Lightyear</h1>
    <p className="Genero">PG-13
      06/16/2022 (AR)
      Animación, Ciencia ficción, Aventura, Acción, Familia
       (1h 45m)</p>
    <h6 className="Puntuacion">Puntuacion  
      <i className="heart fa-solid fa-heart"></i>
      <i className="heart fa-solid fa-heart"></i>
      <i className="heart fa-regular fa-heart"></i>
      <i className="heart fa-regular fa-heart"></i>
      <i className="heart fa-regular fa-heart"></i>
    </h6>
    <h3>Descripcion</h3>
    <p className="Descripcion">Luego de un incidente en el que queda abandonado en un planeta hostil a 4.2 millones de años luz de la Tierra junto a su comandante y tripulación, Buzz intenta encontrar el camino de regreso a casa a través del espacio y el tiempo. Pero la misión se ve amenazada con la llegada de Zurg y su ejército de robots despiadados.</p>
    
    <a className="VerTrailer" href="https://www.youtube.com/watch?v=WikwAJ3NQew">Ver Trailer</a>
    <a className="VerTrailer" href="#">Mas Detalles</a>
    </ul>
    </article>

    <article className="Peliculas4">
      <img src={Pelicula4} alt="" className="Icono"/>
      <ul>
      <h1 className="TituloPelicula">Spider-Man: No Way Home</h1>
      <p className="Genero">PG-13
        12/15/2021 (AR)
        Acción, Aventura, Ciencia ficción
         (2h 28m)</p>
      <h6 className="Puntuacion">Puntuacion  
        <i className="heart fa-solid fa-heart"></i>
        <i className="heart fa-solid fa-heart"></i>
        <i className="heart fa-solid fa-heart"></i>
        <i className="heart fa-regular fa-heart"></i>
        <i className="heart fa-regular fa-heart"></i>
      </h6>
      <h3>Descripcion</h3>
      <p className="Descripcion">Peter Parker es desenmascarado y ya no puede separar su vida normal de los altos riesgos de ser un súper héroe. Cuando pide ayuda al Doctor Strange para recuperar su secreto, el hechizo crea un agujero en su mundo, liberando a los villanos más poderosos que han luchado con cualquier Spider-Man, en cualquier universo. Ahora Peter debe de superar su reto más grande, forzándolo a descubrir lo que realmente significa ser Spider-Man.</p>
      
      <a className="VerTrailer" href="https://www.youtube.com/watch?v=6QkTCmhOzuA">Ver Trailer</a>
      <a className="VerTrailer" href="#">Mas Detalles</a>
      </ul>
      </article>

      <article className="Peliculas5">
        <img src={Pelicula5} alt="" className="Icono"/>
        <ul>
        <h1 className="TituloPelicula">Minions: The Rise of Gru</h1>
        <p className="Genero">PG
          07/01/2022 (US)
          Animación, Aventura, Comedia, Fantasía
           (1h 27m)</p>
        <h6 className="Puntuacion">Puntuacion  
          <i className="heart fa-solid fa-heart"></i>
          <i className="heart fa-solid fa-heart"></i>
          <i className="heart fa-solid fa-heart"></i>
          <i className="heart fa-solid fa-heart"></i>
          <i className="heart fa-regular fa-heart"></i>
        </h6>
        <h3>Descripcion</h3> 
        <p className="Descripcion">Mucho antes de convertirse en un genio del mal, Gru no era más que un niño de 12 años en plenos años 70 tratando de conquistar el mundo desde el sótano de su casa. Pero cuando Gru se cruza en su camino con Kevin, Stuart, Bob, y Otto .Esta inesperada familia unirá fuerzas para construir su primera guarida, diseñar sus primeras armas y llevar a cabo sus primeras misiones.</p>
        
        <a className="VerTrailer" href="https://www.youtube.com/watch?v=6DxjJzmYsXo">Ver Trailer</a>
        <a className="VerTrailer" href="#">Mas Detalles</a>
        </ul>
        </article>
</div>
  </section>
    )
}
}
export default Peliculas;