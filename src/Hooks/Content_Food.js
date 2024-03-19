import axios from "axios"
import { useState,useEffect } from "react"

export default function FoodContent(){
    const [contentFood,setcontentFood]=useState([])

    useEffect(()=>{

       axios.get('./data/content_Food.json').then((res) => {
            setcontentFood(res.data)
        })
    }, [])

    return(
        [contentFood]

    )


}
