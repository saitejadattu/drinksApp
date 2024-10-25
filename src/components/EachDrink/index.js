import './index.css'
import {Link} from 'react-router-dom'
import {useContext} from 'react'
import AppContext from '../../context/AppContext'

const EachDrink = props => {
  const {eachDrink} = props
  const {strDrinkThumb, idDrink, strDrink, strInstructions} = eachDrink
  const {changeListItem} = useContext(AppContext)
  const onClickDrink = () => {
    changeListItem(eachDrink)
  }
  return (
    <Link to={`/drink/${idDrink}`} onClick={onClickDrink}>
      <li className="each-item-container">
        <img src={strDrinkThumb} className="each-image" />
        <div className="each-content">
          <p>{strDrink}</p>
          <p>{strInstructions}</p>
        </div>
      </li>
    </Link>
  )
}

export default EachDrink
