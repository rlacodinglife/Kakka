import axios from "axios"
import { useEffect, useState } from "react"

export default function SubpageDetail() {
  
  
    const [subdata,setsubdata]=useState([])

    useEffect(()=>{
     axios.get('/data/subpage.json').then((res)=>{
      setsubdata(res.data)
     })
    },[])
    

    return (
        
        [subdata]
    
  )
}
