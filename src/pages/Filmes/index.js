import { useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import api from '../../services/Api'
import './Filmes.css'
import { toast }  from 'react-toastify'






function Filmes(){
    const {id} = useParams();
    const [Filme, setFilme] = useState({});
    const [loader, setloader] = useState(true);

    useEffect(()=>{
            async function loaderFilmes(){
            await api.get(`/movie/${id}`, {
                params:{
                    api_key: "94087ff18d1b053bb8db27c0aed84698",
                    language: "pt-BR",
                }
            })
            .then((Response)=>{
            setFilme(Response.data)
            setloader(false)
            })
            .catch(()=>{
                console.log("deu ruim gay")
            }) 
            }
            loaderFilmes();




            return () =>{
                console.log("desmondou")
            }
    },[id])

if (loader){
    return(
        <div>
            <h1>carregando Detalhes....</h1>
        </div>
    )
}


function salvarFilme(){
    const Lista = localStorage.getItem("@filsflix");

    let filmesSalvos = JSON.parse(Lista) || [];

    const igualFilmes = filmesSalvos.some((filmesSalvo)=> filmesSalvo.id === Filme.id)  

    if (igualFilmes){
        toast.warn("Você já tem isso!")
        return;
    }

    filmesSalvos.push(Filme);
    localStorage.setItem("@filsflix", JSON.stringify(filmesSalvos))
    toast.success("Salvo com Susseco")
}

    return(

        <div className='Filmes-Detalhes'>
        <strong>{Filme.title}</strong>

        <img src={`https://image.tmdb.org/t/p/original/${Filme.backdrop_path}`}/>

        <div className='Sinopse'>
        <h1>{Filme.tagline}</h1>
        <h2>Sinopse</h2>
        <p>{Filme.overview}</p>
        </div>

        <div className='Avaliação'>
            <h2>Avaliação</h2>
            <strong>{Filme.vote_average.toFixed(1)}/10</strong>
            
        </div>
        <div className='button'>
            <button onClick={salvarFilme}>Salvar</button>
            <button><a target='blanck' href={`https://www.youtube.com/results?search_query=${Filme.title} trailer`}>Trailer</a></button>
            </div>

        <div>
            <h1>{Filme.status}/{Filme.release_date}</h1>
            </div>

        </div>
    )
}

export default Filmes;