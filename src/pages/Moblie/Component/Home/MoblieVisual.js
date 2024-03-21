import React from 'react'
import style from './css/MoblieVisual.module.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';

import styles from './css/SwiperSlide.css';
import { Scrollbar } from 'swiper/modules';

export default function MoblieVisual() {
  return (

<>
    <div className={style.visual_wrap}>
    <section className={style.visual}>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className={`${style.visual_img} ${styles.mySwiper}`}>
        <SwiperSlide>
          <img src='/image/Moblie/mobliehome_top01.png' alt='탑슬라이드비주얼' />
          <p className={style.visual_title}>3월 추천여행 뭐랄까?</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src='/image/Moblie/mobliehome_top02.png' alt='탑슬라이드비주얼' />
          <p className={style.visual_title}>3월 추천여행 뭐랄까?</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src='/image/Moblie/mobliehome_top03.png' alt='탑슬라이드비주얼' />
          <p className={style.visual_title}>3월 추천여행 뭐랄까?</p>
        </SwiperSlide>
      </Swiper>
    </section>
  </div>
</>


  )
}
