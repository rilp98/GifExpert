import React from 'react';

//import GiftItem from './GiftItem';
//import getGifs from '../helpers/Getgifs';
import {useFetchGifs} from '../hooks/useFetchGifs';

const Gifgrid = ({category}) =>{
  
  //const [images,setImages] = useState([]);
  
 // useEffect(()=>{
 // getGifs(category)
 //   .then( imgs=> setImages(imgs) );
 // }, [category])
 
 const {loading} = useFetchGifs();

 return(
  <>
    <h3>{category}</h3>

    {loading ? 'Cargando...' :'Data cargada'}
 {/* <div className='cardGrid'>
      {images.map( 
       (image) => <GiftItem
       key={image.id} 
       title={image.title} 
       url={image.url} />
      )}
      </div> */}
  </> 
 );
    }

export default Gifgrid;