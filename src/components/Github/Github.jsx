import React from 'react'
import { useEffect } from 'react'
import {useLoaderData} from 'react-router-dom'

function Github() {

    const data = useLoaderData()

    // const [data, setData] = React.useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((response) => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])

  return (
    <div className='bg-gray text-black font-extrabold p-4 text-3xl'>Github Followers : {data.followers}
    <img className="flex justify-center" style={{ borderRadius: '50%'}} src={data.avatar_url} width={300} alt="" />
    </div>
  )
}

export default Github


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/sujal-GITHUB')
    return response.json()
}