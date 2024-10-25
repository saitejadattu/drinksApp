import './App.css'
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import {useState} from 'react'
import DetailedView from './components/DetailedView'
import Home from './components/Home'
import AppContext from './context/AppContext'

const App = () => {
  const [list, setList] = useState([])
  const [listItem, setListItem] = useState([])
  const changeList = data => {
    setList(data)
  }
  const changeListItem = drink => {
    setListItem(drink)
  }
  return (
    <AppContext.Provider value={{list, changeList, listItem, changeListItem}}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/drink/:id" component={DetailedView} />
        </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App
