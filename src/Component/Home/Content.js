
import style from './css/Content.module.css'

import TourContent from '../../Hooks/Content_Tour'
import Content_Food from '../../Hooks/Content_Food'
import Content_Fesi from '../../Hooks/Content_Fesi'
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";




export default function Content() {

    const [tourcontent] = TourContent()
    const [foodcontent] = Content_Food()
    const [fesicontent] = Content_Fesi()



    return (
        <>
            <div className={style.Content_wrap}>
                <section className={style.tourContentBox}>
                    <div className={style.Content_title}>
                        여행가자
                    </div>
                    <ul className={style.Content_box_wrap}>

                        {
                            tourcontent.map((item) => {
                                return (
                                    <li key={uuidv4()} className={style.Content_img}>
                                        <p className={style.small_place}><span>{item.place}</span></p>
                                        <Link to={`/brand`}>
                                        <div className={style.backgradi} />
                                    </Link>
                                        <img src={item.image} alt='' />
                                        <p className={style.Content_text}>{item.text}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </section>
                <section className={style.tourContentBox}>
                    <div className={style.Content_title}>
                        밥먹자
                    </div>
                    <ul className={style.Content_box_wrap}>

                        {
                            foodcontent.map((item) => {
                                return (
                                    <li key={uuidv4()} className={style.Content_img}>
                                        <p className={style.small_place}><span>{item.place}</span></p>
                                        <div className={style.backgradi} />
                                        <img src={item.image} alt='' />
                                        <p className={style.Content_text}>{item.text}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </section>
                <section className={style.tourContentBox}>
                    <div className={style.Content_title}>
                        축제가자
                    </div>
                    <ul className={style.Content_box_wrap}>

                        {
                            fesicontent.map((item) => {
                                return (
                                    <li key={uuidv4()} className={style.Content_img}>
                                        <p className={style.small_place}><span>{item.place}</span></p>
                                        <div className={style.backgradi} />
                                        <img src={item.image} alt='' />
                                        <p className={style.Content_text}>{item.text}</p>
                                    </li>)
                            })
                        }
                    </ul>
                </section>
            </div>


        </>





    )
}
