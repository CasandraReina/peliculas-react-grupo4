import React from "react";

class Peliculas extends React.Component{
  render(){
    return(
<section className="Recientes">
  <div className="PeliculasRecientes">

  <article className="Peliculas">
     <img src={this.props.img} alt="" className="Icono"/>
    <ul>
     <h1 className="TituloPelicula">{this.props.titulo}</h1>
     <p className="Genero">{this.props.genero}</p>
     <h6 className="Puntuacion">Puntuacion  
     <i className="heart fa-solid fa-heart"></i>
     <i className="heart fa-solid fa-heart"></i>
     <i className="heart fa-solid fa-heart"></i>
     <i className="heart fa-solid fa-heart"></i>
     <i className="heart fa-regular fa-heart"></i></h6>
     <h3>Descripcion</h3>
     <p className="Descripcion">{this.props.descripcion}</p>

     <a className="VerTrailer" href={this.props.trailer}>Ver Trailer</a>
     <a className="VerTrailer" href="#">Mas Detalles</a>
  </ul>
</article>
</div> </section>
    )
}
}
export default Peliculas;