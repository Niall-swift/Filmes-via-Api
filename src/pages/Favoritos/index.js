import './Favoritos.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

function Favoritos(){
    const [Filmes, setFilmes] = useState([])

    useEffect(()=>{

        const lista = localStorage.getItem("@filsflix");
        setFilmes(JSON.parse(lista) || [])


    },[])

    function Excluir(id){
        let filtroFilmes = Filmes.filter((item)=>{
            return (item.id !== id)
            
        })
        setFilmes(filtroFilmes)
        localStorage.setItem("@filsflix", JSON.stringify(filtroFilmes))
        toast.success("Excluidor com sucesso")
    }
    return(
        <div>
            <h1> Meus Filmes Favoritos </h1>
            <div>
            {Filmes.length === 0 && <span> Você nao tem intems salvos aqui!</span>}
            </div>
            <ul>
                {Filmes.map((item)=>{
                    return(
                        <li key={item.id}>
                            <span>{`${item.title}. . . . . . ${item.vote_average.toFixed(1)}/10` }</span>
                            <div>
                                <Link to={`/Filmes/${item.id}`}>Ver detalhes</Link>
                                <button onClick={()=>Excluir(item.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favoritos;