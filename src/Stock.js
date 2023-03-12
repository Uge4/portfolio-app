import React from 'react'

function Stock({ point, openPrice, priceChangePercentage, marketCap }) {

  function roundStockPrice(num){
    return parseFloat(Math.round(num * Math.pow(10, 2)) /Math.pow(10,2)).toFixed(2);
  }

    // let colorChange = parseInt(priceChange) <= 0 ? "color:red" : "color:Green"
    // <span style={colorChange}>${openPrice} ({priceChange}%)</span>
    return (
      <div className="stockCard">
        <h3>{point.title}</h3>
        <h4>{point.stock} | {point.ticker} | {marketCap} | {point.exchange} | ${roundStockPrice(openPrice)} {priceChangePercentage}</h4>
        <div className="comments">
            <strong>Positives: </strong>{point.body.positives}<br />
            <strong>Negatives: </strong>{point.body.negatives}<br />
            <strong>Technical: </strong>{point.body.technicals}<br />
            <strong>Watchouts: </strong>{point.body.tips}<br />
            <img src="{point.long-chart}" className="chart"/>
            <img src="{point.short-chart}" className="chart"/>`
        </div>
      </div>
    );
  }


export default Stock;