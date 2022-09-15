import React from "react";

class Peliculas extends React.Component{
  render(){
    return(
<section className="Recientes">
  <div className="PeliculasRecientes">

  <article class="Peliculas">
     <img src={this.props.img} alt="" class="Icono"/>
    <ul>
     <h1 class="TituloPelicula">{this.props.titulo}</h1>
     <p class="Genero">{this.props.genero}</p>
     <h6 class="Puntuacion">Puntuacion  
     <i class="heart fa-solid fa-heart"></i>
     <i class="heart fa-solid fa-heart"></i>
     <i class="heart fa-solid fa-heart"></i>
     <i class="heart fa-solid fa-heart"></i>
     <i class="heart fa-regular fa-heart"></i></h6>
     <h3>Descripcion</h3>
     <p class="Descripcion">{this.props.descripcion}</p>

     <a class="VerTrailer" href={this.props.trailer}>Ver Trailer</a>
     <a class="VerTrailer" href="#">Mas Detalles</a>
  </ul>
</article>
</div> </section>
    )
}
}
export default Peliculas;