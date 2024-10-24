import { useState, useEffect } from 'react'

export const useFetch = (url, method, body) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const getData = fetch(url, {
            method: method,
            body: body,
            headers: {
                "Content-Type": "application/json",
            },
        });
        getData
            .then(res => res.json())
            .then(res => { setData(res) })
            .catch(error => {
                console.error(error)
                setError(error)
            })
            .finally(() => {
                setLoading(false);
            });
    }, [url]);
    return { data, loading, error };

}

// este hook sirve para ahorrarnos tiempo y que cuando lo llamen
// muestre el contenido de la API
