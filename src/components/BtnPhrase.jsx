import React from 'react'
import getRandomElemArray from '../utils/getRandomElemArray'

const BtnPhrase = ({quote, setPhrase, phrases, number, setNumberBg}) => {

    const handleRandomPhrase = () => {

        let newPharse = getRandomElemArray(phrases)
        let newNumber = getRandomElemArray([1,2,3,4])

        while(newPharse === quote){
          newPharse = getRandomElemArray(phrases)
        }

        while(newNumber === number){
          newNumber = getRandomElemArray([1,2,3,4])
        }

        setPhrase(newPharse)
        setNumberBg(newNumber)
    }

  return (
    <button className='container_btn' onClick={handleRandomPhrase}>know your luck</button>
  )
}

export default BtnPhrase