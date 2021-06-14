import './portfolio.scss'
import Portfoliolist from './portfoliolist/Portfoliolist'
import React, { useState } from 'react'

export default function Portfolio() {
  const [catSelected, setCatSelected] = useState('featured')

  let portfolioCatList = [
    {
      id: 'featured',
      title: 'Featured',
    },
    {
      id: 'webapp',
      title: 'Web App',
    },
    {
      id: 'mobileapp',
      title: 'Mobile App',
    },
    {
      id: 'mlsolution',
      title: 'Machine Learning Solutions',
    },
    {
      id: 'volunteering',
      title: 'Volunteering',
    },
  ]

  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {portfolioCatList.map((item, index) => (
          <Portfoliolist
            catId={item.id}
            catActive={catSelected === item.id}
            y
            setCatSelected={setCatSelected}
            key={item.id}
          >
            {item.title}
          </Portfoliolist>
        ))}
      </ul>

      <div className='container'>
        <div className='item'>
          <img src='https://via.placeholder.com/150' alt=''></img>
          <h3>Real Estate App</h3>
        </div>
        <div className='item'>
          <img src='https://via.placeholder.com/150' alt=''></img>
          <h3>Real Estate App</h3>
        </div>
        <div className='item'>
          <img
            src='https://www.summerhall.co.uk/wp-content/uploads/2019/11/nightmare-before-christmas-300x300.jpg'
            alt=''
          ></img>
          <h3>Real Estate App</h3>
        </div>
        <div className='item'>
          <img src='https://via.placeholder.com/150' alt=''></img>
          <h3>Real Estate App</h3>
        </div>
        <div className='item'>
          <img src='https://via.placeholder.com/150' alt=''></img>
          <h3>Real Estate App</h3>
        </div>
        <div className='item'>
          <img src='https://via.placeholder.com/150' alt=''></img>
          <h3>Real Estate App</h3>
        </div>
      </div>
    </div>
  )
}
