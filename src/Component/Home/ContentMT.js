import React, { useEffect, useState } from 'react'
import style from './css/Content_MT.module.css'
import axios from 'axios'

export default function Content_MT() {

  const [Mt, setMt] = useState([])

  useEffect(() => {
    axios.get('./data/content_MT.json').then((res) => {
      setMt(res.data)
    })
  },[])


  return (
    
<div className={style.Content_wrap}>
              <section className={style.MTContentBox}>
      {
        Mt.map((item) => {
          return (
            
         <>
                <h2 className={style.Content_title}>
                  {item.title}
                  <span className={style.Content_text}>{item.text}</span>
                </h2>
                <div className={style.MTcontent_img}>
                  <p className={style.small_place}><span>{item.place}</span></p>
                  <div className={style.backgradi} />
                  <img src={item.image} alt='' />
                  <span className={style.MTname}>{item.MTname}</span>

                </div><button className={style.LiveCCTV}><a href={item.cctvurl}><span>실시간 영상보러가기</span></a></button>
                
         
         </>
            
          )
          
        })    
      }
           </section>
            </div>


      /* <div className={style.Content_wrap}>
        <section className={style.MTContentBox}>
          <h2 className={style.Content_title}>
            {title}
            <span className={style.Content_text}>{text}</span>
          </h2>
          <div className={style.MTcontent_img}>
            <p className={style.small_place}><span>{place}</span></p>
            <div className={style.backgradi}/>
            <img src={image} alt='' />
            <span className={style.MTname}>{MTname}</span>
            
          </div><button className={style.LiveCCTV}><a href={cctvurl}><span>실시간 영상보러가기</span></a></button>
        </section>


      </div> */

  )
}
