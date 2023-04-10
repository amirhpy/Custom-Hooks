import { useState } from 'react';

const useInput = (initValue) => {
    const [value, setValue] = useState(initValue)

    const binding = {
        value: value,
        onChange: e => {
            setValue(e.target.value)
        }
    }

    return [value, binding]
};

export default useInput;