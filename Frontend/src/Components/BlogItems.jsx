import React from 'react'
import "../Styles/BlogItems.scss"

const BlogItems = ({image}) => {
  return (
    <div className='blog-containerItem'>
            <img src={image} alt='img' className='img-container'></img>
            <h3>ergergerg</h3>
            <p>hjryjryjyjg</p>
            <button className='buttonMoreGray'></button>
        </div>
  )
}

export default BlogItems
