
import BrandVisual from '../Component/Brand/BrandVisual'
import BrandList from '../Component/Brand/BrandList'

import React from 'react'

export default function Brand() {
  // const initcategory = [
  //   {
  //     category: '전체',
  //     btnimage: './image/Brand/state/allmenu.png'
  //   },
  //   {
  //     category: '여행',
  //     btnimage: './image/Brand/state/tour.png'
  //   },
  //   {
  //     category: '공연/전시',
  //     btnimage: './image/Brand/state/art.png'
  //   },
  //   {
  //     category: '축제/행사',
  //     btnimage: './image/Brand/state/festival.png'
  //   },
  //   {
  //     category: '맛집',
  //     btnimage: './image/Brand/state/food.png'
  //   },
  //   {
  //     category: '상품',
  //     btnimage: './image/Brand/state/gift.png'
  //   },
  // ]

  // const [categorys, setcategorys] = useState(initcategory)

  // const [changecate, setchangecate] = useState('전체')

 


  // const onchangecategory=(cate)=>{
  //   setchangecate(cate)
  // }
  return (
    <>
      <BrandVisual />
      <BrandList/>
    </>
  )
}
