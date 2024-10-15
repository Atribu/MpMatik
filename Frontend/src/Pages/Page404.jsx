import React from 'react'
import "../Styles/Page404.scss"
import { Link } from "react-router-dom"

const Page404 = () => {
  return (
    <section className='page404-section'>
      <div className='page404'>
          <h1 className='page404-h1'>404</h1>
          <p className='page404-p'> Ups...Aradığınız Sayfa Bulunmadı!</p>
          <Link className='page404-Link'>Buradan Ana Sayfaya Dönebilirsiniz</Link>
      </div>
    </section>
    
  )
}

export default Page404