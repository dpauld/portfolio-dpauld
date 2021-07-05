import './portfoliocatlist.scss'

function PortfolioCatList({ catId, catActive, setCatSelected, children }) {
  return (
    <li
      className={catActive ? 'active' : ''}
      onClick={() => setCatSelected(catId)}
    >
      {children}
    </li>
  )
}

export default PortfolioCatList
