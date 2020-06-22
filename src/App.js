import React,{useState ,  useEffect }from "react"

function App(){
    const[value,setValue]=useState("USD")
    const[value1,setValue1]=useState("USD")
    const[rates,setRates]=useState({})
    const[total,setTotal]=useState(1)
    const[amount,setAmount]=useState(1)
    const[usa,setUsa]=useState("")
    const[eur,setEur]=useState()
    const[gbp,setGbp]=useState()

        useEffect(()=>{
            fetch("http://data.fixer.io/api/latest?access_key=e27bc45c7ebc180205a70f576ea89f95")
                .then(res => res.json())
                .then(res => {
                    setRates(res.rates)
                  
                  
                })
        }, [])

    function handleSubmit(event) {
        event.preventDefault();
        const first=(rates[value])
        const second =(rates[value1])
        setUsa(amount*rates["USD"]/first)
        setGbp(amount*rates["GBP"]/first)
            setTotal(amount*second/first)
        setEur(amount*rates["EUR"]/first)

    }
//////slice
    const options = Object.keys(rates)

    const list= options.map(currency => (
        <option value={currency}>{currency}</option>
    ))

    // console.log(total)
    return(
        <>
        <div className="main-div">
            <form  onSubmit={handleSubmit}>
                <h3>amount</h3>
                <input value={amount} className="amount" type="text" onChange={(event) => setAmount(event.target.value)}/>
                <label>
                <h3>from</h3>
                    <select className="from" value={value} onChange={(event) => setValue(event.target.value)}>
                                   {list}
                    </select>
                    <h3>to</h3>
                    <select className="to"value={value1} onChange={(event) => setValue1(event.target.value)}>
                                   {list}
                    </select>
                </label>
            <button type="submit" value="Submit" className="button">submit</button>
            </form>
            <h1 className="total">{total}</h1>
        </div>
        <h1 className="h1">your currency with :</h1>
        <div className="second-part">
         <div className="div1"><h1>EUR <img width="50px" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/flag-for-european-union_1f1ea-1f1fa.png"/>: {eur}</h1></div>
         <div className="div2"><h1>USD<img width="50px"  src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/flag-for-united-states_1f1fa-1f1f8.png"/>: {usa}</h1></div>
         <div className="div3"><h1>GBP <img width="50px" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/flag-for-england_1f3f4-e0067-e0062-e0065-e006e-e0067-e007f.png"/>: {gbp}</h1></div>
         </div>
         </>
    )
    }

export default App