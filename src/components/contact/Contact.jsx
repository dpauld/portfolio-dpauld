import { useState } from 'react'
import './contact.scss'
const handShakeImg = require('../../assets/images/shake.svg')

export default function Contact() {
  const [conMsgState, setConMsgState] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setConMsgState(true)
  }
  return (
    <div className='contact' id='contact'>
      <div className='conatact-box section-left'>
        <img src={handShakeImg.default} alt=''></img>
      </div>
      <div className='conatact-box section-right'>
        <h2>Got queries?</h2>
        <form className='form' onSubmit={handleSubmit}>
          <input type='email' placeholder='Email' required></input>
          <textarea placeholder='Message'></textarea>
          <button type='submit'>Send</button>
          {conMsgState && <span>Thank you for contacting us.</span>}
        </form>
      </div>
    </div>
  )
}
