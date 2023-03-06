import { useEffect, useState } from "react";

import axios from "axios";

export function useFetch<T = unknown>(url: string) {

    const [ data, setData ] = useState<T | null>(null);
    const [ isFetching, setIsFetching ] = useState<boolean>(true);
    
    useEffect(() => {
        axios.get(url)
        .then(respost => {
            setData(respost.data);
        })
        .finally(() => {
            setIsFetching(false);
        })
    }, [])

    return { data, isFetching }
}