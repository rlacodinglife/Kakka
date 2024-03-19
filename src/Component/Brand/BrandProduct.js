import React from 'react'
import { Link } from 'react-router-dom'
import style from './css/BrandProduct.module.css'


export default function BrandProduct({item}) {
  return (
    <li className={style.content}>
                                       
    <Link to={`/brand/${item.id}`}>
        <img src={item.image} alt='' className={style.content_img} />
        <div className={style.backgrad} />
        <div className={style.content_textwrap}>
            <p className={style.content_place}>{item.place}</p>
            <p className={style.content_text}>{item.text}</p>

        </div>
        
    </Link>

</li>
  )
}
