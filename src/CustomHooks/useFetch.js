import { useEffect, useState } from "react";

export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then(response => response.json())
            .then(jsonData => {
                const filteredData = jsonData.filter(product => product.category !== "electronics");
                setData(filteredData);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [url]); 

    return { data, isLoading, error };
}
