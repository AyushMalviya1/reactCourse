import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(()=>{
        const url = `https://api.fastforex.io/fetch-all?api_key=997ad8b596-28fa2f1c2e-t2sbsp&from=${currency}`;
        fetch(url)
    .then((res) => res.json())
    .then((res) => setData(res.results))
    console.log(data)
    }, [currency])
    return data
}
export default useCurrencyInfo;