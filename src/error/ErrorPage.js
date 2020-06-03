import React from 'react';
import './errorPage.css';



function errorPage() {
   return(
       <div className="error">
          <h1>Error 404</h1>
          <h1>Requested place was not found or invalid</h1> 
          <h2>Please Enter a Valid City</h2>
       </div>
   );
}


export default errorPage;