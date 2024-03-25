import React from 'react'
import style from './css/EventVisual.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";



export default function Visual() {
    return (
        <div id={style.visual_wrap}>
            <section id={style.visual}>
                <h2 className={style.hidden} style={{height:0,width:0,lineHeight:1,fontSize:1,position:"absolute",opacity:0}}>비주얼영역</h2>
                <ul className={style.visual_list}>
                    <li>
                        <div className={style.visual_backgridi} />
                        <div className={style.visual_text}>
                            <div className={style.blackboard}>

                                <p className={style.text_top}>여기</p>
                                <p className={style.text_btm}>가까?</p>
                                <p className={style.text_sub}>어디가까? 언제가까? 가서뭐하까?</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={style.visual_backgridi} />
                        <div className={style.visual_text}>
                            <div className={style.visual_text}>
                                <div className={style.blackboard}>

                                    <p className={style.text_top}>여기</p>
                                    <p className={style.text_btm}>가까?</p>
                                    <p className={style.text_sub}>어디가까? 언제가까? 가서뭐하까?</p>
                                </div>
                            </div>
                        </div>

                    </li>
                    <li>
                        <div className={style.visual_text}>
                            <div className={style.visual_backgridi} />
                            <div className={style.visual_text}>
                                <div className={style.blackboard}>

                                    <p className={style.text_top}>여기</p>
                                    <p className={style.text_btm}>가까?</p>
                                    <p className={style.text_sub}>어디가까? 언제가까? 가서뭐하까?</p>
                                </div>
                            </div>                        </div>
                    </li>
                    <button className={style.left_btn}><FontAwesomeIcon icon={faChevronLeft} size='2x' /></button>
                    <button className={style.right_btn}><FontAwesomeIcon icon={faChevronRight} size='2x' /></button>
                </ul>
            </section>

        </div>
    )
}
