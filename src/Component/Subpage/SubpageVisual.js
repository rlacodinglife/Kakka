import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import style from './css/SubpageVisual.module.css'
export default function SubpageVisual() {
  return (
    <div className={style.visual_wrap}>
    <section className={style.visual}>
        <h2 className={style.hidden}>비주얼영역</h2>
        <ul className={style.visual_list}>
            <li>
                <div className={style.visual_text}>
                    <div className={style.blackboard}>

                        <p className={style.text_top}>여기</p>
                        <p className={style.text_btm}>가까?</p>
                        <p className={style.text_sub}>어디가까? 언제가까? 가서뭐하까?</p>
                    </div>
                </div>

            </li>
       
            <button className={style.left_btn}><FontAwesomeIcon icon={faChevronLeft} size='2x' /></button>
            <button className={style.right_btn}><FontAwesomeIcon icon={faChevronRight}size='2x' /></button>
        </ul>
    </section>

</div>
  )
}
