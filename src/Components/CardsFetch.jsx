import React from 'react'

export default function cardsFetch(props) {
  return (
    <>
    

<li className='cards_fetches shadow p-3 mb-5 bg-white rounded'>
        <div className='left_sides'> <a href={props.url}> <img src={props.photo} alt='' height='300px'></img></a></div>.
        <div className='right_sides'><h4>{props.name}</h4></div>
</li>






    </>
  )
}
