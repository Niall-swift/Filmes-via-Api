import { useEffect, useState } from "react";
import api from '../../services/Api'
import { Link } from "react-router-dom";
import Slider from "../../components/slider";
import './Home.css'


function Home() {
    const [Filmes, setFilmes] = useState([]);
    const [loader, setloader] = useState(true)
    const [selection, setSelection] = useState('movie');
    const [selectiontops, setSelectionTops] = useState('');

    const handleSelection = (newSelection, newSelectionTops) => {
        setSelection(newSelection);
        if (newSelectionTops) {
            setSelectionTops(newSelectionTops);
        }
    };

    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get(`https://api.themoviedb.org/3/${selection}/${selectiontops === '' ? 'now_playing' : selectiontops}?query=&include_adult=false&language=en-US&page=1`, {
                params: {
                    api_key: "94087ff18d1b053bb8db27c0aed84698",
                    language: "pt-BR",
                    page: 1
                }
            })
            setFilmes(response.data.results)
            setloader(false);
        }
        loadFilmes();
    }, [selection, selectiontops])

    if (loader) {
        return (
            <div className="log">
                <h1>Carregando......</h1>
            </div>
        )
    }



    return (
        <div className="conteine">
            <Slider />

            <div className="ButtonsSelection">
                <div className="Selection">
                    <button onClick={() => handleSelection('movie')}>
                        Filmes
                    </button>

                    <button onClick={() => handleSelection('tv')}>
                        T.V
                    </button>

                    <button onClick={() => handleSelection('airing_today')}>
                        Exibindo hoje
                    </button>

                    <button onClick={() => handleSelection('movie', 'now_playing')}>
                        Agora nos cinemas
                    </button>

                    <button onClick={() => setSelectionTops('top_rated')}>
                        Mais votados
                    </button>

                    <button onClick={() => setSelectionTops('popular')}>
                        Popular
                    </button>
                </div>
        </div>

            <div className="NameSelection">
                <h1>{selection}</h1>
            </div>
            <div className="lista-filmes">
                {Filmes.map((filmes) => {
                    return (
                        <article key={filmes.id}>

                            <img
                            src={`https://image.tmdb.org/t/p/original/${filmes.poster_path}`}
                                
                            alt={`{filmes.title}`}/>

                            <Link to={`/Filmes/${filmes.id}`}>Acessar</Link>

                        </article>
                    )
                })}

            </div>
        </div>
    )
}

export default Home;