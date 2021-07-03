import './testimonials.scss'

// let rightArrow = require('../../assets/images/right-arrow.png') // you have to use rightArrow.default in the tag.

import rightArrow from '../../assets/images/right-arrow.png'
import youtube from '../../assets/images/youtube.png'

import { testimonialData } from '../../data'

// const data = [
//   {
//     id: 1,
//     name: 'Tom Durden',
//     title: 'Senior Developer',
//     img: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//     icon: 'assets/twitter.png',
//     desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.',
//   },
//   {
//     id: 2,
//     name: 'Alex Kalinski',
//     title: 'Co-Founder of DELKA',
//     img: 'https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//     icon: 'assets/youtube.png',
//     desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ',
//     featured: true,
//   },
//   {
//     id: 3,
//     name: 'Martin Harold',
//     title: 'CEO of ALBI',
//     img: 'https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//     icon: 'assets/linkedin.png',
//     desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem',
//   },
// ]

export default function Testimonials() {
  return (
    <div className='testimonials' id='testimonials'>
      <h1>Testimonials</h1>
      <div className='container'>
        {testimonialData.map((td) => (
          <div className='card'>
            <div className='top'>
              <img src={rightArrow} className='left' alt='arrow'></img>
              <img className='userImage' src={td.profileImg}></img>
              <img className='right' src={youtube} alt='text'></img>
            </div>
            <div className='center'>{td.commentDesc}</div>
            <div className='bottom'>
              <h3>{td.name}</h3>
              <h4>{td.designation}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
