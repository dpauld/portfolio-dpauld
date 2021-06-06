// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './topbar.scss'
import PersonIcon from '@material-ui/icons/Person'
import EmailIcon from '@material-ui/icons/Email'

export default function topbar() {
  return (
    <div className='topbar'>
      <div className='wrapper'>
        <div className='left'>
          <div className='logo'>
            <a href='#intro'>dipto</a>
          </div>
          <div className='itemContainer'>
            <PersonIcon className='icon'></PersonIcon>
            <span>+880 178 418 9410</span>
          </div>
          <div className='itemContainer'>
            <EmailIcon className='icon'></EmailIcon>
            <span>email@gmail.com</span>
          </div>
        </div>
        <div className='right'>
          <div className='hamburger'>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  )
}
