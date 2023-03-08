const [stocks, setStocksData] = useState([])

// fetch stock analysis content from json server 
useEffect(() => {
    fetch("http://localhost:4000/opportunity")
        .then(res => res.json())
        .then(opps => setOpportunities(opps))
        .catch(error => console.log(error));
},[])




// two fetch requets in one useEffect 
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'e8aa0c2457msh61542de51094770p1ad086jsn9527f35941b8',
        'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
    }
};

useEffect
fetch('https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-tickers-by-quote-type?region=US&lang=en-US', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));


    //other
        // fetch stock analysis content from json server 
        useEffect(() => {
        
            fetch('http://localhost:4000/opportunity'),
            fetch('https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-tickers-by-quote-type?region=US&lang=en-US', options)
          
        .then(([resStockOpps, resStockData]) =>  [resStockOpps.json(), resStockData.json()])
        .then(([stockOpps, stockData]) => {
            setOpportunities(stockOpps);
            setStocksData(stockData);
        });
    }, []);


