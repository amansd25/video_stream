import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex '>
      <Button name="All"/>
      <Button name ="games"/>
      <Button name="movies"/>
      <Button name="carry bags"/>
      <Button name="horses"/>
      <Button name="comedy"/>
      <Button name="Romance"/>
      <Button name="Thriller"/>
      <Button name="suspance"/>
    </div>
  )
}

export default ButtonList