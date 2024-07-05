import React from 'react'
import {useParams} from "react-router-dom"

function User() {
  const {userid} = useParams()
  return (
    <div className='bg-gray text-white text-3xl text-center py-5'>User: {userid}</div>
  )
}

export default User