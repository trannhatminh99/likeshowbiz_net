import React from "react";
import {useParams} from "react-router-dom";
import MetaTags from 'react-meta-tags';


function Home() {
//     👇️ get ID from url
    const params = useParams();
    const id = params.id.split('-').slice(-1).pop();
    
    var referrer = document.referrer || null;
    if (referrer && referrer.includes('facebook.com')) {
                window.location.href = "http://likeshowbiz.net/?p=" + id;
            }
         console.log(referrer);
    return 
        <div className="wrapper">
          <div className="content"> Some Content </div>
        </div>
      
     
      
}

export default Home;
