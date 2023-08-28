import React from 'react'

const Phrase = ({phrase}) => {

  // const pStyle = {
  //   backgroundImage: `url(/rectangle1.svg)` 
  // }



  return (
    <p className='container_phrase' >{phrase.phrase}</p>
  )
}

export default Phrase