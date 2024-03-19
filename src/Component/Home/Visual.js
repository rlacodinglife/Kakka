import React from 'react'
import './css/Visual.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Visual() {
    return (
        <div id="visual_wrap">
            <section id="visual">
                <h2 className="hidden">비주얼영역</h2>
                <ul className="visual_list">
                    <li>
                        <div className="visual_text">
                            <div className='blackboard'>

                                <p className="text_top">여기</p>
                                <p className="text_btm">가까?</p>
                                <p className="text_sub">어디가까? 언제가까? 가서뭐하까?</p>
                            </div>
                        </div>

                    </li>
                    <li>
                        <div className="visual_text">
                            <div className='blackboard'>

                                <p className="text_top">몰루?</p>
                                <p className="text_btm">그럼 뭐할래</p>
                                <p className="text_sub">내일뭐하지 오늘뭐하지 어젠뭐했지?</p>
                            </div>
                        </div>

                    </li>
                    <li>
                        <div className="visual_text">
                            <div className='blackboard'>

                                <p className="text_top">몰루?</p>
                                <p className="text_btm">그럼 뭐할래</p>
                                <p className="text_sub">내일뭐하지 오늘뭐하지 어젠뭐했지?</p>
                            </div>
                        </div>

                    </li>
                    <button className='left_btn'><FontAwesomeIcon icon={faChevronLeft} size='2x' /></button>
                    <button className='right_btn'><FontAwesomeIcon icon={faChevronRight}size='2x' /></button>
                </ul>
            </section>

        </div>
    )
}
