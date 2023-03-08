import React, {createContext} from 'react'

export const ContextProvider = createContext();
const Context = (props) => {
    const [model, setmodel] = React.useState(false);
    const openModel = () => {
      setmodel(true);
    }
  return ( <ContextProvider.Provider value={{model, openModel}}> {props.children} </ContextProvider.Provider> );
};

export default Context;
