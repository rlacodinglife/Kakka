import React from 'react'
import style from './css/Footer.module.css'

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faUserPlus,faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {

    // const {darkMode,toggleDarkMode}=useContext(DarkModeContext)

    return (
        <footer className={style.footer}>
            <div className={style.footer_wrap}>
                <div className={style.footer_two}>
                    <img src='./image/logontext.png' alt='' />

                </div>
                <div className={style.footer_eig}>
                    <p style={{ color: '#FFFFFF' }}>(우)04821 서울특별시 종로구  / Tex :(010)0000-0000</p>
                    <p style={{ color: '#FFFFFF' }}> Email :rlacodinglife@gmail.com</p>
                    <p style={{ color: '#FFFFFF' }}>insta: @my_life.ssul</p>
                </div>
                {/* <button className={style.darkMode} onClick={toggleDarkMode}>
                {darkMode ? '다크모드' : '라이트모드'}
            </button> */}
            </div>
        </footer>
    )
}
