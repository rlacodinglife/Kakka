import React from 'react'
import style from './css/MoblieMain.module.css'
export default function MoblieHome() {
  return (


    <>



{/* festival */}
      <div className={style.bestfesti}>
        <section className={style.bestfesti}>
          <div className={style.besttext_wrap}>
            <p className={style.besttext_red}>Festival</p>
            <p className={style.besttext_black}>전국 진행중 축제/행사</p>
          </div>
          <ul className={style.bestfesti_img}>
            <li className={style.festiimg}>
              <img src='/image/Moblie/festi1.png' alt='' />
            </li>
            <li className={style.festiimg}>
              <img src='/image/Moblie/festi2.png' alt='' />
            </li>
            <li className={style.festiimg}>
              <img src='/image/Moblie/festi3.png' alt='' />
            </li>
            <li className={style.festiimg}>
              <img src='/image/Moblie/festi4.png' alt='' />
            </li>
          </ul>

        </section>
      </div>


{/* tour */}
      <div className={`${style.tour} ${style.bestfesti}`}>
        <section className={style.bestfesti}>
          <div className={style.besttext_wrap}>
            <p className={style.besttext_red}>Tour</p>
            <p className={style.besttext_black}>전국 추천 봄 여행지</p>
          </div>
          <ul className={style.bestfesti_img}>
            <li className={style.festiimg}>
              <img src='/image/Moblie/tour1.png' alt='' />
            </li>
            <li className={style.festiimg}>
              <img src='/image/Moblie/tour2.png' alt='' />
            </li>
            <li className={style.festiimg}>
              <img src='/image/Moblie/tour3.png' alt='' />
            </li>
            <li className={style.festiimg}>
              <img src='/image/Moblie/tour4.png' alt='' />
            </li>
          </ul>

        </section>
      </div>


    </>
  )
}
