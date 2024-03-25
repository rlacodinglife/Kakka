
import { useParams } from 'react-router-dom';
import SubpageVisual from '../Component/Subpage/SubpageVisual'
import style from '../Component/Subpage/css/SubpageIntro.module.css'
import { MdPlace } from "react-icons/md";
import { useEffect, useState } from 'react';
import { getProductDetail } from '../api/firebase';


export default function Subpage() {


  const { subpageID } = useParams()

  //const [allbrandlist]=BrandList_All()

  const [selectedItem, setSelectedItem] = useState('')

  const [mainImg, setmainImg] = useState('')


  useEffect(() => {
    getProductDetail(subpageID).then((res) => {
      setSelectedItem(res)
      setmainImg(res.image)
      //처음 랜더링되는곳에 selectedItem.image 를 바뀔 테두리인 setmainImg에 초기설정해둔다
      
    })




    window.scrollTo(0, 0)

  }, [subpageID])



  // const motoImg = useRef()
  // const nextImg = useRef()




  
  const changeImg = (item) => {
    // gsap.set(nextImg.current,{display:'block'})
    // gsap.set(motoImg.current, { display: 'none' })
    setmainImg(item)
  }






  return (
    <>

      <SubpageVisual />

      <div className={style.intro_wrap}>
        <section className={style.intro}>
          <ul className={style.introtext_wrap}>
            <li className={style.introimg}>
              {/* <img src={selectedItem?.image} alt='서브이미지' ref={motoImg} /> */}
              <img src={mainImg} alt='서브이미지'/>

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

                {
                  selectedItem.thumimage?.map((item) => {
                    return (
                      <img className={style.introimg} src={item} alt='작은이미지' onClick={() => { changeImg(item) }} />
                    )
                  })
                }

                {/* <img className={style.introimg} src={'/image/Subpage/small1.png'} alt='작은이미지' />
                <img className={style.introimg} src='/image/Subpage/small2.png' alt='작은이미지' />
                <img className={style.introimg} src='/image/Subpage/small3.png' alt='작은이미지' /> */}
              </div>
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
