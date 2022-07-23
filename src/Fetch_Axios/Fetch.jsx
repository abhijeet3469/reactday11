import React, { useEffect, useState } from "react";
import CardsFetch from "../Components/CardsFetch";
import "../cards.css";
import axios from 'axios'

export default function Fetch() {
  const [user_data, setUser_data] = useState([]);

  useEffect(()=>{
    // Fetch method - 
  //   fetch(`https://api.github.com/users`)
  //   .then(res => res.json())
  //   .then(data => setUser_data(data));
  // console.log("Fetched");

  // Axios method -
  axios.get("https://api.github.com/users")
  .then(res=>setUser_data(res.data))
  console.log("Fetched");

  


  },[])
  axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  return (
    <>
      <ul type="none" className="cards_incoming">
        {user_data.map((val, index) => {
          return (
            <CardsFetch key={index} photo={val.avatar_url} name={val.login} url={val.html_url}/>
          );
        })
        }
      </ul>
    </>
  );
}



// Fetch ❌ vs Axios ✅ - Fetch gives response in terms of promise whereas Axios gives response in terms of object.
// POST - Sending some data from here to server.
