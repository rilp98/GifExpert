
import React, { useState } from 'react';

const AddCategory = ({setCategories}) => {

 const [inputValue,setinputValue] = useState('');

 const handleInputChange = (e) =>{
  setinputValue(e.target.value);
 }

 const handleSubmit = (e) =>{
  e.preventDefault();
  setCategories(cats => [inputValue,...cats]);
  setinputValue("");
 }

 return(
 <form onSubmit={handleSubmit}>
   <input
   type= "text"
   value={inputValue}
   onChange={handleInputChange} />
 </form>
 );

}

export default AddCategory;
