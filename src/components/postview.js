import React, { useEffect, useState } from 'react';
import Header from './header';
import InstaCard from './instacard';
 
export default function Postview() {
  // let [data, setData]=useState([]);
  // useEffect(()=>{
  //   fetch(" http://localhost:3004/user").then((data)=>{
  //     return data.json()
  //   })
  //   .then((users)=>{setData(users)
  //   })
  // },[])
  // console.log(data);
  return (
    <>
    <Header/>
    {/* {data.map(card=>{
      let keys=new Date().getTime()*Math.random().toString();
      return(
      <InstaCard card={card} key={keys}/>
      )
    })} */}
    
    </>
  )
}