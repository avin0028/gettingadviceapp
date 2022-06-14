import React from 'react';
import { useState }  from 'react';
// import axios from 'axios';
import './App.css';



const App = () => {

    
const [advice , setadvice] = useState('click Get Advice Button for Getting Advice');



    return(
        <>
        <div className='card'>
        <p className='advicetext'>{advice}</p>
        <button className='btn' onClick={async () =>  {
             const api = "https://api.adviceslip.com/advice";
 
             const x = await fetch(api);
             const y = await x.json();
             const dataa = y.slip.advice;
            
            setadvice(dataa);
            
        }}>Get Advice</button>

        </div>
       
       
        </>
    )
};

export default App;