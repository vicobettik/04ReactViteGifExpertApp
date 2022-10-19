import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['one puch']);

  const onAddCategory = ( newCategory ) => {
    console.log(newCategory)
    if ( categories.includes(newCategory) ) {
      return;
    }
    // setCategories([newCategory, ...categories]);
    setCategories( (cat) =>  [newCategory, ...cat]);
  };

  return (
    <>
        <h1>Gif expert app</h1>

        <AddCategory 
          // setCategories={ setCategories }
          onNewCategory={ (event) => onAddCategory(event) }
        />

        {
          categories.map((category) => (
              <GifGrid 
                key={ category }
                category={ category }
              />
            )
          )
        }
          {/* gif item */}
    </>
  )
}

