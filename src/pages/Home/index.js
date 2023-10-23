import { useEffect, useState } from "react";
import api from '../../services/Api'
import { Link } from "react-router-dom";
import './Home.css'


function Home(){
    const [Filmes, setFilmes] = useState([]);
    const [loader, setloader] = useState(true)

    useEffect(()=>{
        async function loadFilmes(){
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: "94087ff18d1b053bb8db27c0aed84698",
                    language: "pt-BR",
                    page: 1
                }
            })
            setFilmes(response.data.results)
            setloader(false);
        }
        loadFilmes();
    }, [] )
      
   if(loader){
    return(
        <div className="log">
            <h1>Carregando......</h1>
        </div>
    )
   }

    return(
        <div className="conteine">
            <div className="lista-filmes">
                {Filmes.map((filmes)=>{
                    return(
                        <article key={filmes.id}>

                            <strong>{filmes.title}</strong>

                            <img src={`https://image.tmdb.org/t/p/original/${filmes.poster_path}`}/>

                            <Link to={`/Filmes/${filmes.id}`}>Acessar</Link>

                        </article>
                    )
                })}

            </div>
          
        </div>
    )
}

export default Home;