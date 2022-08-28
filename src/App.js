import React from 'react';
import './App.css';

function App () {
  const url = 'https://lit-garden-79715.herokuapp.com/authURL';

  function handelClick() {
    fetch(url, {
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Request-Method': 'GET',
        'Content-Type': 'application/json'
      }
    })
     .then(res => res.json())
     .then(data => console.log(data));
  }

  return (
    <section id='Home'>
    <div className='card-main'>
    <div className='card-content'>
    <img className='card-icon' alt='card-icon' src='images/google-drive.png' />
    <h1 className='card-title'>Google Drive</h1>
    <p className='card-description'>Access to your google drive files.</p>
    <button className='btn btn-outline-dark' onClick={handelClick}>Give Access</button>
    </div>
    </div>
    </section>
  )
}

export default App;