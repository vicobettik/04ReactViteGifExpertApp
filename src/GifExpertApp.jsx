import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['one puch', 'dragon ball']);

  const onAddCategory = () => {
    setCategories(['nezuko', ...categories]);
    // setCategories( (cat) =>  [...cat, 'nezuko']);
  };

  return (
    <>
        {/* titulo */}
        <h1>Gif expert app</h1>

        {/* input  */}
        <AddCategory/>

        {/* listado de gifs */}
        <button onClick={onAddCategory}>Agregar</button>
        <ol>
          {
            categories.map((cat) => {
              return <li key={cat}>{cat}</li>
            })
          }
        </ol>
          {/* gif item */}
    </>
  )
}

