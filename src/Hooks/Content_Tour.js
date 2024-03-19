import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Content_Tour() {
    const [TourContent, setTourContent] = useState([])

    useEffect(() => {

        axios.get('./data/content_Tour.json').then((res) => {
            setTourContent(res.data)
        })
    }, [])


    return (
        [TourContent]

    )
}
