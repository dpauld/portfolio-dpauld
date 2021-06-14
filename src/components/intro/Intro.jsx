import './intro.scss'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'

let introImage = require('../../assets/images/man.png')
// import myImage from '../../assets/images/man.png'

export default function Intro() {
  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className='intro-img-container'>
          <img src={introImage.default} alt='dipto' className='intro-img' />
        </div>
      </div>
      <div className='right'>
        <div className='intro-text-container'>
          <h2>Hi, I'm</h2>
          <h1>Dipto Paul</h1>
          <h3>
            Freelance <span>Developer</span>
          </h3>
        </div>
        <a href='#portfolio'>
          <KeyboardArrowDownIcon className='arrow-down'></KeyboardArrowDownIcon>
        </a>
      </div>
    </div>
  )
}
