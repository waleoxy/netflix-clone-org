import React, { useEffect, useState } from 'react';
import db from '../firebase';
import { collection, query, where, getDocs, QuerySnapshot } from "firebase/firestore";
import "../PlansScreen.css";

function PlansScreen() {

const [myproducts, setmyProducts] = useState([]);

useEffect( () => {
    async function fetchData() {
       const q = query(collection(db, "products"), where("active", "==", true));
   const querySnapshot =await getDocs(q);
   console.log('Q', querySnapshot);
   const products = {}
   querySnapshot.forEach(async doc => { 
       products[doc.id] = doc.data();
       
   });     
   console.log('p',products);
  setmyProducts(products);

  }
return fetchData()

}, [])

 

console.log('myprod', myproducts);
    
return (
        <div className="plansScreen">
            Plans
        </div>
    )
}

export default PlansScreen
