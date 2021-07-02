import './testimonials.scss'

// let rightArrow = require('../../assets/images/right-arrow.png') // you have to use rightArrow.default in the tag.

import rightArrow from '../../assets/images/right-arrow.png'
import youtube from '../../assets/images/youtube.png'

export default function Testimonials() {
  return (
    <div className='testimonials' id='testimonials'>
      <h1>Testimonials</h1>
      <div className='container'>
        <div className='card'>
          <div className='top'>
            <img src={rightArrow} className='left' alt='arrow'></img>
            <img
              className='userImage'
              src='https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
            ></img>
            <img className='right' src={youtube} alt='text'></img>
          </div>
          <div className='center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque harum
            enim culpa quisquam mollitia praesentium totam dolore!
          </div>
          <div className='bottom'>
            <h3>John Doe</h3>
            <h4>CEO of ABCD</h4>
          </div>
        </div>
        <div className='card'>
          <div className='top'>
            <img src={rightArrow} className='left' alt='arrow'></img>
            <img
              className='userImage'
              src='https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
            ></img>
            <img className='right' src={youtube} alt='text'></img>
          </div>
          <div className='center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque harum
            enim culpa quisquam mollitia praesentium totam dolore!
          </div>
          <div className='bottom'>
            <h3>John Doe</h3>
            <h4>CEO of ABCD</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
