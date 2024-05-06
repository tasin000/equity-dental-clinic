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
    }, [url]);

    if(error) console.log(error);

    return [array, loading, error];
}

export default useFetch;