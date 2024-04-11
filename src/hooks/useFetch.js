import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [array, setArray] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    useEffect(() => {
        fetch(url)
    .then(res => res.json())
    .then(data => setArray(data))
    .catch(err => setError(err))
    .finally(() => setLoading(false));
    }, [url])
    
    console.log(array)

    return [array, loading, error];
}

export default useFetch;