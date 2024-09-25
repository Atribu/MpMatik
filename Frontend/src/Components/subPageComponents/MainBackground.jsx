import React from 'react';
import "../../Styles/MainBackground.scss"

const MainBackground = ({img,header}) => {
  return (
    <section className='background-main'>
      <h1>{header}</h1>
    </section>
  )
}

export default MainBackground
