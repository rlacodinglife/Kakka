import React, { useState } from 'react'
import style from './css/BrandList.module.css'


import BrandList_All from '../../Hooks/BrandList_All'
import { v4 as uuidv4 } from 'uuid';
import BrandProduct from './BrandProduct';


export default function BrandList() {
    const initcategory = [
        {
            category: '전체',
            btnimage: './image/Brand/state/allmenu.png'
        },
        {
            category: '여행',
            btnimage: './image/Brand/state/tour.png'
        },
        {
            category: '공연/전시',
            btnimage: './image/Brand/state/art.png'
        },
        {
            category: '축제/행사',
            btnimage: './image/Brand/state/festival.png'
        },
        {
            category: '맛집',
            btnimage: './image/Brand/state/food.png'
        },
        {
            category: '상품',
            btnimage: './image/Brand/state/gift.png'
        },
    ]

    const [categorys, setcategorys] = useState(initcategory)

    const [changecate, setchangecate] = useState('전체')




    const onchangecategory = (cate) => {
       
        setchangecate(cate)
        
    }





    const [allbrandlist] = BrandList_All()



    const categoryItems = getCategoryItems(allbrandlist, categorys)

    function getCategoryItems(allbrandlist, categorys) {
        // if (categorys===categorys) {
        //     return (
        //         allbrandlist
        //     )
        // } else {
        //     return (
        //         allbrandlist.filter((item) => (item.category === categorys))
        //     )
        // }

       if(changecate==="전체"){
        return (
            allbrandlist
        )
       }else{
        return (
            allbrandlist.filter((item)=>(item.category===changecate))
        )
       }

    }

    return (


        //status
        <>
            <div className={style.brandstate_wrap}>
                <section className={`${style.brandstate}`}>
                    <ul>


                        {
                            categorys.map((item) => {
                                return (
                                    <li onClick={() => {
                                        onchangecategory(item.category)
                                    }} className={item === changecate && style.selected}>
                                        <img src={item.btnimage} />
                                        <p className={style.categorylist}>
                                            {item.category}
                                        </p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </section>
            </div>


            {/* list */}

            <div className={style.brandlist_wrap}>
                <section className={style.brandlist}>
                    <ul className={style.brandcontents}>
                        {
                            categoryItems.map((item) => {
                                return (
                                 
                                    <BrandProduct item={item}/>
                                )
                            })
                        }
                    </ul>
                </section>
            </div>
        </>
    )
}
