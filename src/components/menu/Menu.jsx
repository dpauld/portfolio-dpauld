import React from 'react'
import './menu.scss'
function Menu({ openMenu, setOpenMenu }) {
  return (
    <div className={'menu ' + (openMenu && 'active-menu')}>
      <ul>
        <li
          onClick={() => {
            setOpenMenu(!openMenu)
          }}
        >
          <a href='#intro'>Home</a>
        </li>
        <li
          onClick={() => {
            setOpenMenu(!openMenu)
          }}
        >
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li
          onClick={() => {
            setOpenMenu(!openMenu)
          }}
        >
          <a href='#works'>Works</a>
        </li>
        <li
          onClick={() => {
            setOpenMenu(!openMenu)
          }}
        >
          <a href='#testimonials'>Testimonials</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
    </div>
  )
}

export default Menu
