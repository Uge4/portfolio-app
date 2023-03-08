import React from 'react'

function Stock({ point, openPrice }) {

    
    return (
      <div className="stock">
        <h4>{point.title}</h4>
        {point.stock} | {point.ticker} | {point.exchange} | ${openPrice}
        <p>
            {point.body.positives}
            {point.body.negatives}
            {point.body.technicals}
            {point.body.tips}
        </p>
        <img src="{point.long-chart}" className="chart"/>
        <img src="{point.short-chart}" className="chart"/>`
      </div>
    );
  }


export default Stock;