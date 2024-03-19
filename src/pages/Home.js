import React, { useEffect, useState } from 'react'
import Content from '../Component/Home/Content'
import Visual from '../Component/Home/Visual'
import Content_MT from '../Component/Home/Content_MT'
import axios from 'axios'
import Content_Search from '../Component/Home/Content_Search'

export default function Home() {







  return (
    <>

      <Visual />
      <Content/>
      <Content_MT/>
      <Content_Search />
    </>

  )
}
