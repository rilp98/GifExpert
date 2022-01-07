import { useState,useEffect } from "react/cjs/react.development";
import {getGifs} from "../helpers/Getgifs";


export const useFetchGifs = (category) => {
  const [state,setState]= useState({
   data: [],
   loading: true
  })
  
  useEffect(()=>{
    getGifs(category)

     .then((imgs)=>{

      setTimeout(()=>{

        setState({
         data:imgs,
         loading:false
       })
      },3000)
     })
  },[category])

  return state;
}

