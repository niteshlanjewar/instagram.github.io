import React, {createContext} from 'react'

export const ContextProvider = createContext();
const Context = (props) => {
    const [model, setmodel] = React.useState(false);
    const openModel = () => {
      setmodel(true);
    };
    const closeModel = () => {
      setmodel(false);
    };
  return ( <ContextProvider.Provider value={{model, openModel, closeModel}}> {props.children} </ContextProvider.Provider> );
};

export default Context;
