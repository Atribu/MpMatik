import React, { useState } from 'react'
import "../Styles/BlogDetails.scss"

const Accordion = ({lists}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    }

  return (
    <div className="accordion">
    <div className="accordion-header" onClick={toggleAccordion}>
      <span>İçerikler</span>
      <span className={`arrow ${isOpen ? 'open' : ''}`}>&#9662;</span> {/* Aşağı ok */}
    </div>
    <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
    <ul>
          {lists.map((list, index) => (
            <li key={index}>{list}</li>
          ))}
        </ul>
    </div>
  </div>
  )
}

export default Accordion
