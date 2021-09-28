import React, { useEffect, useState } from 'react';
import db from '../firebase';
import { collection, query, where, getDocs, addDoc, doc, onSnapshot} from "firebase/firestore";
import "../PlansScreen.css";
import {selectUser} from "../features/userSlice"
import { useSelector } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';

function PlansScreen() {

const [products, setProducts] = useState([]);
const user = useSelector(selectUser);

useEffect( () => {
    async function fetchData() {
       const q = query(collection(db, "products"), where("active", "==", true));
   const querySnapshot =await getDocs(q);
   const products = {}
   querySnapshot.forEach(async doc => { 
       products[doc.id] = doc.data();
       const p = collection(doc.ref, "prices")
       const priceSnap= await getDocs(p);
       priceSnap.forEach( price => {
           products[doc.id].prices = {
               priceId: price.id,
               priceData: price.data()
           }
       })
   });     
  
   setProducts(products);
  }
return fetchData()
}, []) 

const loadCheckout = async (priceId) =>{

const userRef = doc(db, "customers", `${user.userId}`);
const docRef = await addDoc(collection(userRef, "checkout_sessions"), {
  price: priceId,
  success_url: window.location.origin,
  cancel_url: window.location.origin,
});
const unsubscribe = onSnapshot(docRef, async (snapshot) => {
    const {error, sessionId} = snapshot.data();

  if(error) {
    alert(error.message)
  }
  if(sessionId){
      const stripe = loadStripe('pk_test_51JHSHFDR7pXVfLP8IvwAAixBeNnBeVIH2781MSws9vDbaZkJjALZZkJ5jTy5tG0cUja6slL24UdxOP9vFleHMRCE00Wv9khTAH')
      ;(await stripe).redirectToCheckout({sessionId})
  }

 });


}

return (
        <div className="plansScreen">
            {Object.entries(products).map(([prodId, prodData]) =>{
                return(
                    <div className="plansScreen__plan">
                        <div className="plansScreen__info">
                            <h5>{prodData.name}</h5>
                            <h6>{prodData.description}</h6>
                        </div>
                        <button 
                            onClick={() => loadCheckout(prodData.prices.priceId)}
                            >
                            Subscribe
                        </button>
                    </div>
                )
            })
            }
        </div>
    )
}

export default PlansScreen
