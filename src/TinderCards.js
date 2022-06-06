// import Person from tinder-cards
import TinderCard from "react-tinder-card";
// import React, { useState} from "react";
import React, { useEffect, useState } from 'react';
import "./TinderCards.css"
// import database from "./firebase";

// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

function TinderCards() {
    const [People,SetPeople]= useState([]);
       
    // useEffect(() => {database.collection('People').onSnapshot((snapshot) =>(SetPeople(snapshot.docs.map((doc) => doc.data()))) );}, []);
    
    return (
        <div>
         <h1>Tinder Cards</h1> 
         <div className="TinderCards__CardContainer">
         {People.map(Person=> (
             <TinderCard
             className="Swipe"
             key={Person.name}
             preventSwipe={['up','down']}
             >
             <div style={{ backgroundImage:`url(${Person.url}`}} className="card">
             <h3>{Person.name}</h3>
             </div>
             </TinderCard>
         ))}  

         </div>
         
        </div>
    );
}

export default TinderCards;