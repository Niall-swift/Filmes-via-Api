import axios from 'axios';


//api
//https://api.themoviedb.org/3/movie/now_playing?api_key=94087ff18d1b053bb8db27c0aed84698


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});


export default  api;

