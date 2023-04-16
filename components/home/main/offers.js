import React from 'react'
import styles from './styles.module.scss'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination, Autoplay, Navigation } from "swiper";
import { offersAarray } from '@/data/home';
import Link from 'next/link';

export default function App() {
  return (
    <div className={styles.offers}>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,  Navigation]}
        className="offers_swipper"
      >
        {offersAarray.map(offer => (

        <SwiperSlide>
            <Link href="">
            <img src={offer.image} alt="" />
            </Link>
            <span>{offer.price}$</span>
            <span>{offer.discount}%</span>
        </SwiperSlide>
        ))}
   
      </Swiper>
    </div>
  );
}
