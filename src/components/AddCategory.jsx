import { useState } from "react"


export const AddCategory = () => {
   
    const [inputValue, setInputValue] = useState('One punch');

    const onInputChange = ({ target }) => {
        console.log(target.value)
        setInputValue(target.value);
    }
    
  return (
    <>
      <input 
        type="text"
        placeholder="Buscar gifs"
        value={ inputValue }
        onChange={ onInputChange }    
       />
    </>
  )
}
