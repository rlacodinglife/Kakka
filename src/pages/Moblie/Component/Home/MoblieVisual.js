import React from 'react'
import style from './css/MoblieVisual.module.css'


export default function MoblieVisual() {
  return (

<>
    <div className={style.visual_wrap}>
    <section className={style.visual}>
      <ul className={style.visual_img}>
        <li>
          <img src='/image/Moblie/mobliehome_top01.png' alt='탑슬라이드비주얼' />
          <p className={style.visual_title}>3월 추천여행 뭐랄까?</p>
        </li>
        <li>
          <img src='/image/Moblie/mobliehome_top02.png' alt='탑슬라이드비주얼' />
          <p className={style.visual_title}>3월 추천여행 뭐랄까?</p>
        </li>
        <li>
          <img src='/image/Moblie/mobliehome_top03.png' alt='탑슬라이드비주얼' />
          <p className={style.visual_title}>3월 추천여행 뭐랄까?</p>
        </li>
      </ul>
    </section>
  </div>
</>


  )
}
