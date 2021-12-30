import React, { useState,useEffect} from 'react';

import GiftItem from './GiftItem';

const Gifgrid = ({category}) =>{
  
  const [images,setImages] = useState([]);
  
  useEffect(()=>{
    getGifs();
  }, [])
  
  const getGifs= async()=>{
  const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=XU798TfFd37GixdH6qev8zhMoP0dKGGp';
  
  const resp = await fetch(url);
  const {data} = await resp.json();

  const gifs =data.map( img =>{
      return{
          id:img.id,
          title:img.title,
          url:img.images?.downsized_medium.url,

      }
  } )

  setImages(gifs);

 }
 
 return(
  <>
    <h3>{category}</h3>
      {images.map( 
       (image) => <GiftItem
       key={image.id} 
       title={image.title} 
       url={image.url} />
      )}
  </>
 );
}

export default Gifgrid;