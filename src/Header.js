import React from "react";

class Header extends React.Component{
render(){
    return(
       <header className="Fondo">
        <div className="contenedor">
            <h4 className="logotipo">CINESKY</h4>
            <nav>
                <a href="#">Inicio</a>
                <a href="#" className="active">Cartelera</a>
                <a href="#">Mas Recientes</a>
                <a href="#">Mi Lista</a>
            </nav>
        </div>
       </header> 
    )
}
}
export default Header;