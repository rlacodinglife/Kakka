import { useEffect, useState } from 'react'
import { getProducts } from '../api/firebase'

export default function BrandList_All() {
    const [BrandList, setBrandList] = useState([])

    useEffect(() => {
        getProducts().then((res) => {
            setBrandList(res)
        })
    })




    return (
    [BrandList]
  )
}
