import React from 'react'
import BlogItems from './BlogItems'
import "../Styles/BlogSection.scss"
import img1 from "../../public/images/bp-tasitmatik-hizmeti-veren-istasyonlar.jpg"
import img2 from "../../public/images/bp-tasitmatik-sik-sorulan-sorular.jpg"
import img3 from "../../public/images/ulusal-tasit-tanima-sistemi.jpg"

const BlogSection = () => {
  return (
    <section className='blogGreenSec'>
        <h2>BLOG YAZILARI</h2>
      <div className='blog-container'>
        <BlogItems image={img1}/>
        <BlogItems image={img2}/>
        <BlogItems image={img3}/>
      </div>
    </section>
  )
}

export default BlogSection
