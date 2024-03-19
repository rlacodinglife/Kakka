import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function CustomerBorad() {
    const [borad,setborad]=useState([])
 
    useEffect(()=>{
        axios.get('/data/CustomerBorad.json').then((res)=>{

            setborad(res.data)

        })
    },[])



    return (
 [borad]
  )
}
