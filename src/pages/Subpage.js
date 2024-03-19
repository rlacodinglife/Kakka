
import { useParams } from 'react-router-dom';
import SubpageVisual from '../Component/Subpage/SubpageVisual'
import style from '../Component/Subpage/css/SubpageIntro.module.css'
import { MdPlace } from "react-icons/md";
import BrandList_All from '../Hooks/BrandList_All';
import { useEffect, useState } from 'react';
import { getProductDetail } from '../api/firebase';
import axios from 'axios';


export default function Subpage() {

  
 const {subpageID}=useParams()

 //const [allbrandlist]=BrandList_All()

 const [selectedItem, setSelectedItem] = useState({})

 useEffect(()=>{
  getProductDetail(subpageID).then((res)=>{
    setSelectedItem(res)
  })


  

  window.scrollTo(0,0)

 },[subpageID])



  return (
    <>

      <SubpageVisual />

      <div className={style.intro_wrap}>
        <section className={style.intro}>
          <ul className={style.introtext_wrap}>
            <li className={style.introimg}>
              <img src={selectedItem?.image} alt='서브이미지'/>

            </li>
            <li className={style.introtext}>
              <p className={style.name}>{selectedItem?.text}</p>
              <p className={style.title}>{selectedItem?.title}</p>
              <p className={style.place}>
                {/* 여기에 장소 아이콘박아놓기 */}
                <MdPlace />{selectedItem?.detailplace}
              </p>
              {/* 원래여기도 만족도 ★*5 */}
              <p className={style.time}>운영시간:{selectedItem?.time}/<span>{selectedItem?.when}</span></p>
              <p className={style.pageurl}>{selectedItem?.pageurl}</p>
              <p className={style.text}>{selectedItem?.intro}</p>
              <div className={style.introimg_wrap}>
                <img className={style.introimg} src='/image/Subpage/small1.png' alt='작은이미지' />
                <img className={style.introimg} src='/image/Subpage/small2.png' alt='작은이미지' />
                <img className={style.introimg} src='/image/Subpage/small3.png' alt='작은이미지' /></div>
            </li>
          </ul>
          <div className={style.bigimg_wrap}>
            <img src='/image/Subpage/sub1.png' alt='대릉원' />
            <p>대릉원 일대
            </p>
            <img src='/image/Subpage/sub2.png' alt='첨성대핑크뮬리' />
            <p>첨성대 핑크뮬리</p>
            <img src='/image/Subpage/sub3.png' alt='대릉원야경' />
            <p>대릉원 야경 전경</p>
          </div>
        </section>
      </div>

    </>
  )
}
