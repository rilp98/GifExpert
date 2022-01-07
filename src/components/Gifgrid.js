import React from 'react';
import GiftItem from './GiftItem';
//import getGifs from '../helpers/Getgifs';
import {useFetchGifs} from '../hooks/useFetchGifs';

const Gifgrid = ({category}) =>{
  
  //const [images,setImages] = useState([]);
  
 const {data,loading} = useFetchGifs(category);

 return(
  <>
    <h3>{category}</h3>

    {loading ? 'Cargando...' :'Data cargada'}

    <div className='cardGrid'>

      {data.map( 

       (image) => <GiftItem

       key={image.id} 
       title={image.title} 
       url={image.url} />

      )}
    </div>
  </> 
 );
    }

export default Gifgrid;