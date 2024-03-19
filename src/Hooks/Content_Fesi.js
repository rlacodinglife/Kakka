import axios from "axios"
import { useState,useEffect } from "react"

export default function FoodContent(){
    const [contentFesi,setcontentFesi]=useState([])

    useEffect(()=>{

       axios.get('./data/content_Fest.json').then((res) => {
            setcontentFesi(res.data)
        })
    }, [])

    return(
        [contentFesi]

    )


}
