import React from 'react';
import { ContextProvider } from '../Global/Context';

const Model = () => {
  const {model} = React.useContext(ContextProvider);
  return (
    <>

    {model ? <div className='model'>
      <div className='model__container'>
     <div className='model__container__forms'>
<h1>hello user</h1>
     </div>
      </div>
    </div> : ""}

    </>
  )
}

export default Model
