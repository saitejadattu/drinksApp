import './index.css'
import {useContext} from 'react'
import AppContext from '../../context/AppContext'
import NavBar from '../NavBar'

const DetailedView = () => {
  const {listItem} = useContext(AppContext)
  const ingredients = []
  for (let i = 1; i <= 15; i++) {
    const ingredient = listItem[`strIngredient${i}`]
    const measure = listItem[`strMeasure${i}`]
    if (ingredient) {
      ingredients.push({name: ingredient, measure})
    }
  }
  return (
    <div>
      <NavBar />
      <div className="top">
        <img src={listItem.strDrinkThumb} />
        <p>category: {listItem.strCategory}</p>
        <p>galss type: {listItem.strGlass}</p>
        <p>Instructions: {listItem.strInstructions}</p>
        <p>Ingridients</p>
        <ul>
          {ingredients.map((item, index) => (
            <li key={item + index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default DetailedView
