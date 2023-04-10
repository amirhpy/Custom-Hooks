import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [post, setPost] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setPost(data)
                setIsPending(false)
                setError(null)
            })
            .catch(err => console.log(err))
    }, [])

    return { post, isPending, error }
}

export default useFetch;