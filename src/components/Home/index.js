import './index.css'
import {useState, useEffect, useContext} from 'react'
import NavBar from '../NavBar'
import EachDrink from '../EachDrink'
import AppContext from '../../context/AppContext'

const Home = () => {
  const [drinksList, setDrinksList] = useState([])
  const {changeList} = useContext(AppContext)
  const fetchData = async () => {
    const response = await fetch(
      'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita',
    )
    const data = await response.json()
    setDrinksList(data.drinks)
    changeList(data.drinks)
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className="home-container">
      <NavBar />
      <ul className="unorderd-list-container">
        {drinksList &&
          drinksList.map(eachDrink => (
            <EachDrink key={eachDrink.idDrink} eachDrink={eachDrink} />
          ))}
      </ul>
    </div>
  )
}
export default Home
