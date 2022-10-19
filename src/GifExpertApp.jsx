import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['one puch', 'dragon ball']);

  const onAddCategory = ( newCategory ) => {
    console.log(newCategory)
    // setCategories([newCategory, ...categories]);
    setCategories( (cat) =>  [newCategory, ...cat]);
  };

  return (
    <>
        {/* titulo */}
        <h1>Gif expert app</h1>

        {/* input  */}
        <AddCategory 
          // setCategories={ setCategories }
          onNewCategory={ (event) => onAddCategory(event) }
        />

        {/* listado de gifs */}
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

