import React, {createContext} from 'react'

export const ContextProvider = createContext()
const Context = (props) => {
    const {model, setmodel} = React.useState(false)
  return ( <ContextProvider.Provider value={{model}}> {props.children} </ContextProvider.Provider> )
}

export default Context
