import React, { useState } from 'react'
import CustomerVisual from '../Component/Customer/CustomerVisual'
import style from '../Component/Customer/css/CustomerBorad.module.css'


export default function Customer() {

  const [boradlist,setboradlist] = CustomerBorad()
  
  function CustomerBorad(){
    const [boradlist,setboradlist]=useState([])
    
    return [boradlist,setboradlist]
  }

  const addboard = () => {
    // e.preventDefault()
    let title = prompt('글제목을 입력하세요')
    let writer = prompt('작성자 이름 입력해주세요')
    let count = boradlist.length + 1


    setboradlist((prev)=>{
      return(
        [...prev,{title,writer,count}]
      )
    })
  }

  return (
    <>
      <CustomerVisual />


      {/* <div>CustomerBorad</div> */}



      <div className={style.borad_wrap}>
        <div className={style.board_title}>
          <h1>공지사항</h1>
          <p>공지사항을 빠르고 정확하게 안내드립니다.</p>
        </div>


        {
          boradlist.map((item) => {
            return (
              <div className={style.board_list_wrap}>
                <div className={style.board_list}>
                  <div className={style.top}>
                    <div className={style.num}>{item.id}</div>
                    <div className={style.title}>{item.title}</div>
                    <div className={style.writer}>{item.writer}</div>
                    <div className={style.date}>{item.y}-{item.m}-{item.d}</div>
                    <div className={style.count}>{item.count}</div>
                  </div>
                </div>
              </div>
            )
          })
        }

        <div className={style.bt_wrap}>
          <button onClick={addboard}>등록</button>
          <button>수정</button>
        </div>

      </div>
    </>


  )
}
