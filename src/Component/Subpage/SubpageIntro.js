import React from 'react'
import style from './css/SubpageIntro.module.css'
import { MdPlace } from "react-icons/md";
export default function SubpageIntro() {
    return (
        <>
            <div className={style.intro_wrap}>
                <section className={style.intro}>
                    <ul className={style.introtext_wrap}>
                        <li className={style.introimg}>
                            <img src='./image/Subpage/submain.png' alt='서브이미지' />

                        </li>
                        <li className={style.introtext}>
                            <p className={style.name}>경주 대릉원</p>
                            <p className={style.title}>신라시대 왕과 귀족들의 고분군</p>
                            <p className={style.place}>
                                {/* 여기에 장소 아이콘박아놓기 */}
                                <MdPlace />경상북도 경주시 첨성로
                            </p>
                            {/* 원래여기도 만족도 ★*5 */}
                            <p className={style.time}>운영시간:09:00~18:00/<span>연중무휴</span></p>
                            <p className={style.pageurl}>www.naver.com</p>
                            <p className={style.text}>어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구</p>
                            <div className={style.introimg_wrap}>
                            <img className={style.introimg} src='./image/Subpage/small1.png' alt='작은이미지' />
                            <img className={style.introimg} src='./image/Subpage/small2.png' alt='작은이미지' />
                            <img className={style.introimg} src='./image/Subpage/small3.png' alt='작은이미지' /></div>
                        </li>
                    </ul>
                    <div className={style.bigimg_wrap}>
                    <img src='./image/Subpage/sub1.png' alt='대릉원'/>
                    <p>대릉원 일대
                    </p>
                    <img src='./image/Subpage/sub2.png' alt='첨성대핑크뮬리'/>
                    <p>첨성대 핑크뮬리</p>
                    <img src='./image/Subpage/sub3.png' alt='대릉원야경'/>
                    <p>대릉원 야경 전경</p>
                    </div>
                </section>
            </div>
        </>
    )
}
