import React, {useState} from 'react';

import AddCategory from './components/AddCategory';
import Gifgrid from './components/Gifgrid';

const GifExpert= () => {
// const categories = ['One Punch','Samurai X', 'Dragon Ball']; 

 const [categories,setCategories]= useState(['One Punch']);
 
// const handleAdd = () => {
//  setCategories([...categories,'Maid Dragon']);
//  setCategories ( cats => [...cats,'Maid Dragon']);
// }

return( 

 <>

  <h2> GifExpert </h2>
  < AddCategory 
    setCategories={setCategories}
   />
  <hr />
  <ol>
   {categories.map ( (category) => <Gifgrid key={category} category={category} /> )}
  </ol>
 </>

 );

}

export default GifExpert;