import React, { useState } from 'react'
import style from './css/BrandState.module.css'
import { v4 as uuidv4 } from 'uuid';

export default function CategoryList({allcategory,categorys,onchangecategory}) {

 

  return (

    <>
      <div className={style.brandstate_wrap}>
        <section className={`${style.brandstate}`}>
          <ul>
           
         
            {
              allcategory.map((item) => {
                return (
                  <li key={uuidv4()} onClick={()=>{
                    onchangecategory(item)
                  }} className={item===categorys && style.selected}>
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
    </>
  )
}
