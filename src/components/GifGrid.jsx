import React from 'react'

export const GifGrid = ({category}) => {

    const getGifs = async() => {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=Odlm70jt3CcrWhTplchwKFSPNS80Vo7b&q=${category}&limit=20`;
        const resp = await fetch( url );
        const {data} = await resp.json();

        const gifs = data.map( (img) => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }))
        console.log(gifs);
    }

    getGifs();

  return (
    <>
      <h3>{ category }</h3>
    </>
  )
}

