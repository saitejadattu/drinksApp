import {createContext} from 'react'

const AppContext = createContext({
  list: [],
  changeList: () => {},
  listItem: [],
  changeListItem: () => {},
})
export default AppContext
