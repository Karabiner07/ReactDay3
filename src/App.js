import { useState } from 'react';
import './App.css';
import Header from './Header';
import ProductsList from './ProductsList';

function App() {



  let countries = [
    {name:"India", capital:"New Delhi"},
    {name:"South Africa", capital:"Cape Town"},
    {name:"New Zealand", capital:"Wellington"},
    {name:"USA", capital:"Washington DC"}
  ]


  return (
    <div className="App">


    {
      countries.map((country, index) => {
        return (
          <div className='data' key={index}>
            <h3>{country.name}</h3>
            <p>{country.capital}</p>
          </div>
        )
      })
    }

    <Header/>

    <ProductsList/>



    
    {
      //ACCESSING JS ARRAY INDIVIDUAL ITEMS
    
    /* <div className='data'>
      <h2>{countries[0].name}</h2>
      <p>{countries[0].capital}</p>
      </div> */}





      {
        //MODIFYING REACT STATE VARIABLE THROUGH INPUT TAGS AND EVENT 

          // React State Variables
          // let[name, setName] = useState();
          // let[age, setAge] = useState();


          /* <input type='text' placeholder='Enter Name' onChange={(event) => {
              setName(event.target.value);
          }}/>

          <input type='number' placeholder='Enter Age' onChange={(event) => {
              setAge(event.target.value);
          }}/>

          <button onClick={() => {
              console.log(name, age)
          }}>Submit</button> */}





        


      {/*
      <button className='btn' onClick={ ()=>{

          btnEvent("Joy")
        
        }

      }>Click</button> */}

      {/* function btnEvent(data) {

      console.log("Hello this is a message to console " +data)

      } */} 















    </div>
  );
}

export default App;
