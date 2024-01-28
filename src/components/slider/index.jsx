import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';
import { useEffect, useState } from "react";
import './slider.css'
import api from '../../services/Api';


export default function Slider() {
    const [Filmes, setFilmes] = useState([]);
    const [loader, setloader] = useState(true)

    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {
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
    }, [])

    return (
        <div className='slider-conteine'>
            <Swiper
                modules={[EffectFade]}
                effect="fade"
                spaceBetween={50}
                slidesPerView={4}
                pagination={true}
                autoplay={{
                    delay: 5500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                onSlideChange={() => console.log('')}
                onSwiper={(swiper) => console.log('')}
            >
                {Filmes.map((filmes) => {
                    return (
                            <SwiperSlide key={filmes.id}>
                                <img src={`https://image.tmdb.org/t/p/original/${filmes.backdrop_path}`}alt=''/>
                            </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}