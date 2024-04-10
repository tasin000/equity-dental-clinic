import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [array, setArray] = useState([]);
    useEffect(() => {
        fetch(url)
    .then(res => res.json())
    .then(data => setArray(data));
    }, [url]);

    return array;
}

export default useFetch;