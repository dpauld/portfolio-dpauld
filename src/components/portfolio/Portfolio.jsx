import './portfolio.scss'
import Portfoliolist from './portfoliolist/Portfoliolist'
import React, { useEffect, useState } from 'react'
import { featuredPortfolio, webPortfolio, mobilePortfolio } from '../../data'

export default function Portfolio() {
  const [catSelected, setCatSelected] = useState('featured')

  const [data, setData] = useState([])

  useEffect(() => {
    switch (catSelected) {
      case 'featured':
        setData(featuredPortfolio)
        break
      case 'webapp':
        setData(webPortfolio)
        break
      case 'mobileapp':
        setData(mobilePortfolio)
        break
      case 'mlsolution':
        setData(featuredPortfolio) //need change
        break
      case 'robotics':
        setData(featuredPortfolio) //need change
        break
      default:
        setData(featuredPortfolio)
    }
  }, [catSelected])

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
      id: 'robotics',
      title: 'Robotics',
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
        {data.map((d) => (
          <div className='item'>
            <img src={d.img} alt=''></img>
            <h3>{d.title}</h3>
          </div>
        ))}

        {/* <div className='item'>
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
        </div> */}
      </div>
    </div>
  )
}
