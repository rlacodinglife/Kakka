import React from 'react'
import style from './css/MoblieSearch.module.css'
export default function Content_Search() {
    return (
        <>
            <div className={style.search_wrap}>
                <section className={style.search}>
                    <div className={style.search_left}>

                        <p className={style.search}><span>어떻게보내야</span></p>
                        <p className={style.search}>잘보냈다고 <br/> 소문이 날까?</p>


                        <ul className={style.select_wrap}>
                            <li>
                                <select name='where'>
                                    <option value={'어디'} selected hidden>어디로 갈래?</option>
                                    <option value={'서울'}>서울</option>
                                    <option value={'경기/인천'}>경기/인천</option>
                                    <option value={'경상북도'}>경상북도</option>
                                    <option value={'경상남도'}>경상남도</option>
                                    <option value={'전라북도'}>전라북도</option>
                                    <option value={'전라남도'}>전라남도</option>
                                    <option value={'제주도'}>제주도</option>
                                    <option value={'강원도'}>제주도</option>
                                    <option value={'섬'}>섬</option>
                                </select>
                            </li>
                            <li>

                                <input type='date' placeholder='언제갈래?'/>

                               
                            </li>
                            <li>

                                <select name='what'>
                                    <option value={''}selected hidden>가서 뭐할래?</option>
                                    <option value={'여행'}>여행</option>
                                    <option value={'공연/전시'}>공연/전시</option>
                                    <option value={'축제/행사'}>축제/행사</option>
                                    <option value={'먹거리'}>먹거리</option>
                                    <option value={'상품구입'}>상품구입</option>
                                </select>
                            </li>
                        </ul>
                        <button>찾아보기</button>
                    </div>
                    <div className={style.search_right}>
                        <img src='./image/Moblie/search_img.png' alt=''/>


                          <div className={style.search_r_wrap}>
                        <button>/</button>
                        <button>II</button>
                        <button>\</button>
                          </div>

                    </div>
                </section>
            </div >
        </>
    )
}
