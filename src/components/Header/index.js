import './Header.css';
import { Link } from 'react-router-dom';



function Header(){
    return(
        <header className="Header">
           <Link className="logo" to="/">Fils Flix</Link>
           <Link className="favoritos" to="/favoritos">Meus Filmes</Link>
        </header>
    )
}

export default Header;