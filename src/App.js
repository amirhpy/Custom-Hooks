import React from 'react'

import useFetch from './Hooks/useFetch'
import useInput from './Hooks/useInput'
import useLocalStorage from './Hooks/useLocalStorage'

function App() {
    // useInput
    const [userNameValue, userNameBinding] = useInput('')
    const [passwordValue, passwordBinding] = useInput('')
    const { post, isPending, error } = useFetch('https://jsonplaceholder.typicode.com/posts')
    const [value, setValue] = useLocalStorage('amir-hpy', '')

    return (
        <div>
            {/* localStorage */}
            <input
                type='text'
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />

            {/* useInput */}
            <input
                type='text'
                {...userNameBinding}
            />
            <input
                type='text'
                {...passwordBinding}
            />
        </div>
    )
}

export default App