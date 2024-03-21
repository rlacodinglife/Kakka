import React, { useEffect, useRef, useState } from 'react'
import Style from './css/Header.module.css'
import styles from './css/accordionmenu.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { IoMdClose } from "react-icons/io";
import { IoReorderThree } from "react-icons/io5";

import { Link } from 'react-router-dom';
import gsap from 'gsap';



export default function Header() {


    const menu = [
        { index: 0, menu: '전체메뉴', path: '/', submenuList: [] }
        , { index: 1, menu: '여행', path: '/brand', submenuList: [{ index: 0, menu: '관광', path: '/' }, { index: 1, menu: '등산', path: '/' }, { index: 2, menu: '숙소', path: '/' }] }
        , { index: 2, menu: '공연/전시', path: '/', submenuList: [{ index: 0, menu: '전시회 일정', path: '/' }, { index: 1, menu: '공연 일정', path: '/' }, { index: 2, menu: '박람회일정', path: '/' }] }
        , { index: 3, menu: '축제/행사', path: '/', submenuList: [{ index: 0, menu: '월별 일정', path: '/' }, { index: 1, menu: '지역별 일정', path: '/' }] }
        , { index: 4, menu: '먹거리', path: '/', submenuList: [{ index: 0, menu: '지역별 먹거리', path: '/' }, { index: 1, menu: '카페/디저트', path: '/' }, { index: 2, menu: '주류', path: '/' }, { index: 3, menu: '그 외', path: '/' }] }
        , { index: 5, menu: '상품', path: '/', submenuList: [{ index: 0, menu: '여행 패키지', path: '/' }, { index: 1, menu: '굿즈', path: '/' }, { index: 2, menu: '기념품', path: '/' }, { index: 3, menu: '특산품', path: '/' }] }
        , { index: 6, menu: '고객센터', path: '/', submenuList: [{ index: 0, menu: 'Q&A', path: '/' }, { index: 1, menu: '그외', path: '/' }] }
    ]

    const menuWrap = useRef()
    const menuBtn = useRef()
    const closeBtn = useRef()
    const grayLayer = useRef()

    const Mainmenu = useRef()
    const subMenuList = useRef()

    const [selectedIndex, setSelectedIndex] = useState(null)


    
    useEffect(() => {
        menuWrap.current.style.display = 'none'
        menuWrap.current.style.top = '-35vh'
        grayLayer.current.style.display = 'none'


        menuWrap.current.style.height = '110px'
        menuWrap.current.style.overflow = 'hidden'

    }, [])

    const menuOpen = () => {
        gsap.set('body,html', { overflow: 'hidden' })
        grayLayer.current.style.display = 'block'
        menuWrap.current.style.display = 'block'
        gsap.to(menuWrap.current, { top: 0, duration: .5, ease: 'power1.out' })
    }
    const menuClose = () => {


        grayLayer.current.style.display = 'none'
        gsap.to(menuWrap.current, {
            top: '-35vh', duration: .5, ease: 'power1.out', onComplete: () => {
                gsap.set('body,html', { overflow: 'visible' })
                menuWrap.current.style.display = 'none'
            }


        })
    }


    const showsubMenu = () => {
        let Wrap=55+(5*55)
        // gsap.set(menuWrap.current,{overflow:'visible'})
        gsap.set(subMenuList.current, { display: 'block',})
        gsap.to(menuWrap.current, { height: Wrap, duration: .5, ease: 'power1.out' })
        gsap.killTweensOf()
    }
    const closesubmenu = () => {
        gsap.set(subMenuList.current, { display: 'none' })
        // gsap.set(menuWrap.current,{overflow:'hidden'})

        gsap.to(menuWrap.current, { height: '110', duration: .5, ease: 'power1.out' })
        gsap.killTweensOf()
    }







    const init = [{
        id: "001",
        menu: "소개",
        path: "/"
    }, {
        id: "002",
        menu: "전체메뉴",
        path: "/brand"
    }, {
        id: "003",
        menu: "이벤트",
        path: "/"
    }, {
        id: "004",
        menu: "고객센터",
        path: "/customer"
    }, {
        id: "005",
        menu: "상품",
        path: "/"
    }
    ]

    const [menus] = useState(init)

    const [selectmenu, setselectmenu] = useState('')


    const changemenu = (menu) => {
        setselectmenu(menu)
    }


    return (

        <div id={Style.header_wrap}>
            <header id={Style.header}>
                <nav>

                    <h2 id={Style.logo}><Link to={"/"}><img src='/image/logo1.png' alt='로고이미지' /></Link>
                        <span>Kakka</span> </h2>


                    <nav id={styles.mobilemenu} ref={menuWrap} onMouseLeave={closesubmenu} >
                        <div id={styles.mobilemenu_inner}>
                            <span id={styles.mobileclose_btn}><IoMdClose ref={closeBtn} onClick={menuClose} />
                            </span>
                            <ul id={styles.mobilemenu_list}>

                                {
                                    menu.map((item) => {
                                        return (
                                            <li ref={Mainmenu} onMouseEnter={showsubMenu}>
                                                {
                                                    item.submenuList.length < 1 ?

                                                        <>
                                                            {item.menu}
                                                        </>
                                                        :
                                                        <>
                                                            {item.menu}
                                                            <ul className={styles.mobilesubmenu_list}>

                                                                {
                                                                    item.submenuList.map((item) => {
                                                                        return (
                                                                            <li ref={subMenuList}>{item.menu}</li>
                                                                        )
                                                                    })
                                                                }
                                                                {/* <li>액티비티</li>
                                        <li>싱가폴의밤</li>
                                        <li>미식여행</li>
                                        <li>도심투어</li> */}
                                                            </ul>
                                                        </>


                                                }

                                            </li>
                                        )
                                    })
                                }

                                {/* <li>HOME</li>
                                <li>여행정보
                                    <span className={styles.mobile_icon}><img src="images/mobilemenu_icon04.png" alt="" /></span>
                                    <ul className={styles.mobilesubmenu_list}>
                                        <li>여행지정보</li>
                                        <li>여행준비</li>
                                        <li>유용한사이트</li>
                                    </ul>
                                </li>
                                <li>테마여행
                                    <span className={styles.mobile_icon}><img src="images/mobilemenu_icon04.png" alt="" /></span>
                                    <ul className={styles.mobilesubmenu_list}>
                                        <li>액티비티</li>
                                        <li>싱가폴의밤</li>
                                        <li>미식여행</li>
                                        <li>도심투어</li>
                                    </ul>
                                </li>
                                <li>이벤트
                                    <span className={styles.mobile_icon}><img src="images/mobilemenu_icon04.png" alt="" /></span>
                                    <ul className={styles.mobilesubmenu_list}>
                                        <li>이벤트</li>
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


                    <div className={Style.top_navlist}>
                        {/* <ul className={Style.top_icon}>
                            <li><a href="#" class="facebook_icon"><i class="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href="#" class="x_icon"><i class="fa-brands fa-x-twitter"></i></a></li>
                            <li><a href="#" class="google_icon"><i class="fa-brands fa-google"></i></a></li>

                            <li><a href="#" class="insta_icon"><i class="fa-brands fa-instagram"></i></a></li>
                            <li><a href="#" class="git_icon"><i class="fa-brands fa-github"></i></a></li>
                        </ul> */}
                        <ul className={Style.top_login}>
                            <li className="login_icon"><FontAwesomeIcon icon={faArrowRightToBracket} />&nbsp;&nbsp;로그인</li>
                            <li className="regi_icon"><FontAwesomeIcon icon={faUserPlus} />&nbsp;&nbsp;회원가입</li>
                            <IoReorderThree className={Style.threebar} ref={menuBtn} onClick={menuOpen}/>

                        </ul>

                        <ul className={Style.top_cate_list}>
                            {
                                menus.map((item) => {
                                    return (
                                        <li className={item.menu === selectmenu && Style.selected} onClick={() => { changemenu(item.menu) }}><Link to={item.path}>
                                            {item.menu}</Link></li>)

                                })
                            }
                            {/* <li onClick={()=>{changemenu(item.menu)}}>소개</li>
                            <li><Link to='/brand'>전체메뉴</Link></li> */}
                        </ul>
                    </div>

                </nav>
                <div id={styles.mobile_grayLayer} ref={grayLayer}></div>
            </header>
        </div >
    )
}
