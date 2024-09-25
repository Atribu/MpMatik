import React from 'react'
import "../../Styles/TextSection.scss"

const TextSection = ({headers,text,list1,list2}) => {


  return (
      <section className='mainTextDiv'>
        <div className='divtext-iki'>
        <h2>{headers[0]}</h2>
        <p>{text[0]}</p>
        <p>{text[1]}</p>

        <h2>{headers[1]}</h2>
        <p>{text[2]}</p>

        <ul>
        {list1.map((item, index) => (
        <li key={index}>{item}</li> 
      ))}
        </ul>

        <h2>{headers[2]}</h2>
        <p>{text[3]}</p>

        <il>
        {list2.map((item, index) => (
        <li key={index}>{item}</li> 
      ))}
        </il>

        <h2>{headers[3]}</h2>
        <p>{text[4]}</p>
        <p>{text[5]}</p>
        </div>

      </section>
  )
}

export default TextSection
