import './portfoliolist.scss'

function Portfoliolist({ catId, catActive, setCatSelected, children }) {
  return (
    <li
      className={catActive ? 'active' : ''}
      onClick={() => setCatSelected(catId)}
    >
      {children}
    </li>
  )
}

export default Portfoliolist
