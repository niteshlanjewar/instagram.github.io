import React, {createContext} from 'react';
import { auth } from '../config';

export const ContextProvider = createContext();
const Context = (props) => {
    const [model, setmodel] = React.useState(false);
    const openModel = () => {
      setmodel(true);
    };
    const closeModel = () => {
      setmodel(false);
    };
    const register = async (user) => {
       const {username, email, password} = user;
       try {
        const res = await auth.createUserWithEmailAndPassword({email, password})
       res.user.updateProfile({displayName: username})
       setmodel(false)
       } catch (error) {
        console.log(error)
       }
       

    }
  return ( 
  <ContextProvider.Provider value={{model, openModel, closeModel, register}}> 
  {props.children} 
  </ContextProvider.Provider> 
  );
};

export default Context;
