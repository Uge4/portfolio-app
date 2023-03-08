import React, { useEffect, useState } from 'react';
import Stock from "./Stock";
import axios from 'axios';

function StockAnalysis() {
    const [opportunities, setOpportunities] = useState([])
    const [openPrice, setRegOpenPrice] = useState("")

    
    // fetch stock analysis content from json server 
    useEffect(() => {
        fetch("http://localhost:4000/opportunity")
            .then(res => res.json())
            .then(opps => setOpportunities(opps))
            .catch(error => console.log(error));
    },[])

    // create config options file fetch to yahoo finance 
    useEffect(() =>{
        
        const options = {
          method: 'GET',
          url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-financials',
          params: {symbol: 'ATP.AX', region: 'AU'},
          headers: {
            'X-RapidAPI-Key': 'e8aa0c2457msh61542de51094770p1ad086jsn9527f35941b8',
            'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
          }
        };
        
        axios.request(options).then(function (response) {
                console.log(response.data.price.regularMarketOpen.fmt)
            setRegOpenPrice(response.data.price.regularMarketOpen.fmt)
        }).catch(function (error) {
            console.error("Opps, something went wrong!" + error);
        });

    },[])    

    console.log("this is the: " + {openPrice});

    return (
    <div className="blogContainer">
        
        <div className="stockAnalysis">
            {opportunities.map(point => <Stock key={point.body.id} point={point} openPrice={openPrice}/>)}
        </div>
        <div className="blogContainer">
            <h2>Stock Data</h2>
            <p></p>
        </div>
    </div>
    );
  }

export default StockAnalysis;