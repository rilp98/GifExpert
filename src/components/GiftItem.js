import React from 'react';


const GiftItem = ({title,url}) =>{
 return(
    <>
    <img src={url} alt={title} />
    <p>{title}</p>
    </>
 );
}

export default GiftItem;