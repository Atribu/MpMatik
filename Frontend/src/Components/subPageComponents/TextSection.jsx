import React from 'react'
import "../../Styles/TextSection.scss"

const TextSection = ({headers,text}) => {
  return (
      <section className='mainTextDiv'>
        <div className='divtext-iki'>
        <h2>{headers[0]}</h2>
        <p>{text[0]}</p>
        <p>{text[1]}</p>

        <h2>{headers[1]}</h2>
        <p>{text[2]}</p>

        <ul>
          <li>{text[3]}</li>
          <li>{text[4]}</li>
          <li>{text[5]}</li>
          <li>{text[6]}</li>
          <li>{text[7]}</li>
        </ul>

        <h2>{headers[2]}</h2>
        <p>{text[8]}</p>

        <il>
          <li>{text[9]}</li>
          <li>{text[10]}</li>
          <li>{text[11]}</li>
          <li>{text[12]}</li>
          <li>{text[13]}</li>
        </il>

        <h2>{headers[3]}</h2>
        <p>{text[14]}</p>
        <p>{text[15]}</p>
        </div>

      </section>
  )
}

export default TextSection
