import React, { useState, useEffect } from "react";
import axios from 'axios';

// http://localhost:4000/getOneReport/62fa3f959eb42db6842b9524

function useFetch(url) {
    // make api call when ccalled

    // 3 states: data state, loading state, error state
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)


    // use Effect triggers function based on the fact that the component was rendered;
    useEffect((url) => {
        setLoading(true);
        axios
            .get(url)
            .then((response) => {
                setData(response.data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });

    }, [url]); // needs dependency array so that if url changes we request new data

    return { data, loading, error }

}

export default useFetch