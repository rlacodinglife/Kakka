import React, { useEffect, useRef, useState } from 'react'
import style from './css/MoblieHeader.module.css'
import styles from './css/MoblieAcodian.module.css'
import { IoIosSearch, IoMdMenu, IoMdClose, IoMdArrowDropright } from "react-icons/io";
import gsap from 'gsap';
// import { faArrowLeftRotate } from '@fortawesome/free-solid-svg-icons';

export default function MoblieHeader() {

  const menus = [
    { index: 0, menu: '전체메뉴', path: '/', submenuList: [] }
    , { index: 1, menu: '여행', path: '/', submenuList: [{ index: 0, menu: '관광', path: '/' }, { index: 1, menu: '등산', path: '/' }, { index: 2, menu: '숙소', path: '/' }] }
    , { index: 2, menu: '공연/전시', path: '/', submenuList: [{ index: 0, menu: '전시회 일정', path: '/' }, { index: 1, menu: '공연 일정', path: '/' }, { index: 2, menu: '박람회일정', path: '/' }] }
    , { index: 3, menu: '축제/행사', path: '/', submenuList: [{ index: 0, menu: '월별 일정', path: '/' }, { index: 1, menu: '지역별 일정', path: '/' }] }
    , { index: 4, menu: '먹거리', path: '/', submenuList: [{ index: 0, menu: '지역별 먹거리', path: '/' }, { index: 1, menu: '카페/디저트', path: '/' }, { index: 2, menu: '주류', path: '/' }, { index: 3, menu: '그 외', path: '/' }] }
    , { index: 5, menu: '상품', path: '/', submenuList: [{ index: 0, menu: '여행 패키지', path: '/' }, { index: 1, menu: '굿즈', path: '/' }, { index: 2, menu: '기념품', path: '/' }, { index: 3, menu: '특산품', path: '/' }] }
    , { index: 6, menu: '고객센터', path: '/', submenuList: [{ index: 0, menu: 'Q&A', path: '/' }, { index: 1, menu: '그외', path: '/' }] }
    , { index: 7, menu: '이외', path: '/', submenuList: [{ index: 0, menu: '이외', path: '/' }] }
  ]

  const menuWrap = useRef()
  const menuBtn = useRef()
  const closeBtn = useRef()
  const grayLayer = useRef()


  const [selectedIndex, setSelectedIndex] = useState(null)

  const menuActivateIndex = (index) => {
    setSelectedIndex(index)
  }

  useEffect(() => {
    grayLayer.current.style.display = 'none'
    menuWrap.current.style.display = 'none'
    menuWrap.current.style.right = '-60vw'
  }, [])

  const menuOpen = () => {
    gsap.set('body,html', { overflow: 'hidden' })
    grayLayer.current.style.display = 'block'
    menuWrap.current.style.display = 'block'
    gsap.to(menuWrap.current, { right: 0, duration: .5, ease: 'power1.out' })
  }
  const menuClose = () => {
    grayLayer.current.style.display = 'none'
    gsap.to(menuWrap.current, {
      right: '-60vw', duration: .5, ease: 'power1.out', onComplete: () => {
        gsap.set('body,html', { overflow: 'visible' })
        menuWrap.current.style.display = 'none'
        menuWrap.current.style.display = 'none'
      }
    })

  }

  return (
    <>
      <header className={style.moblieheader_wrap}>
        <h2 className={style.logo}>
          <img src='/image/logo1.svg' alt='' />
          <span>Kakka</span>
          <IoMdMenu ref={menuBtn} onClick={menuOpen} />
        </h2>

        <nav id={styles.mobilemenu} ref={menuWrap}>
          <div id={styles.mobilemenu_inner}>
            <p>환영합니다.<br />로그인 해주세요.
              <span id={styles.mobileclose_btn} ><IoMdClose ref={closeBtn} onClick={menuClose} />
              </span>
            </p>
            <ul id={styles.mobileloginmenu}>
              <li>로그인</li>
              <li>회원가입</li>
            </ul>
            <ul id={styles.mobilemenu_list}>
              {
                menus.map((item) => {
                  return (
                    <li className={item.index === selectedIndex && styles.selected}
                      style={item.index === selectedIndex ? { height: 55 + (55 * item.submenuList.length) } : { height: 55 }} onClick={() => {
                        menuActivateIndex(item.index)
                        // alert(item.index)
                      }}>
                      {
                        item.submenuList.length < 1 ?
                          <>
                            {item.menu}
                          </>
                          :
                          <>
                            {item.menu}<span className={styles.mobile_icon}><IoMdArrowDropright /></span>
                            <ul className={styles.mobilesubmenu_list}>
                              {
                                item.submenuList.map((item) => {
                                  return (
                                    <li>
                                      {item.menu}
                                    </li>
                                  )
                                })
                              }

                            </ul>
                          </>
                      }
                    </li>
                  )
                })
              }
              {/* <li>전체메뉴</li>
              <li>여행
                <span className={styles.mobile_icon}><img src="images/mobilemenu_icon04.png" alt="" /></span>
                <ul className={styles.mobilesubmenu_list}>
                  <li>관광</li>
                  <li>등산</li>
                  <li>숙소</li>
                  <li>유용한 사이트</li>
                </ul>
              </li>
              <li>공연/전시
                <span className={styles.mobile_icon}><img src="images/mobilemenu_icon04.png" alt="" /></span>
                <ul className={styles.mobilesubmenu_list}>
                  <li>전시 일정</li>
                  <li>공연 일정</li>
                </ul>
              </li>
              <li>축제/행사
                <span className={styles.mobile_icon}><img src="images/mobilemenu_icon04.png" alt="" /></span>
                <ul className={styles.mobilesubmenu_list}>
                <li>월별 일정</li>
                <li>지역별 일정</li>
                </ul>
                </li>
                <li>먹거리
                <span className={styles.mobile_icon}><img src="images/mobilemenu_icon04.png" alt="" /></span>
                <ul className={styles.mobilesubmenu_list}>
                <li>지역별</li>
                <li>카페/디저트</li>
                <li>주류</li>
                </ul>
                </li>
                <li>상품
                <span className={styles.mobile_icon}><img src="images/mobilemenu_icon04.png" alt="" /></span>
                <ul className={styles.mobilesubmenu_list}>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  </ul>
                  </li>
                  <li>고객센터
                  <span className={styles.mobile_icon}><img src="images/mobilemenu_icon04.png" alt="" /></span>
                  <ul className={styles.mobilesubmenu_list}>
                  <li>Q&A</li>
                  <li>고객의소리</li>
                  </ul>
                </li> */}
            </ul>
          </div>

        </nav>

        {/* 배경을 어둡게 해주는 div ( 리엑트에서는 DOM 요소를 동적으로 생성하는 것보다 미리 넣어두는게 좋음 ) */}

        <div className={style.search_box}>
          <form>
            <input type='text' placeholder='어디로 언제 뭐할까?' />
            <button className={style.search_btn}><IoIosSearch onClick={menuOpen} /></button>
          </form>
        </div>
      </header>

      <div className={style.homestate_wrap}>
       
        <section className={`${style.homestate}`}>
          <ul>
            <li className={style.selected}>
              홈
            </li>
            <li>
              여행
            </li>
            <li>
              공연/전시
            </li>
            <li>
              축제/행사
            </li>
            <li>
              맛집
            </li>
            <li>
              상품
            </li>
          </ul>
        </section>
      
      </div>
      <div id={styles.mobile_grayLayer} ref={grayLayer}></div>
    </>
  )
}
