import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([]);

  const onAddCategory = ( newCategory ) => {
    if ( categories.includes(newCategory) ) {
      return;
    }
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
    </>
  )
}

