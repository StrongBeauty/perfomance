import React, {useState} from "react";

export const SeparateInput = () => {
    const [value, setValue] = useState('')
    console.log('SeparateInput')

    return <>
        <input value={value}
               onChange={e => setValue(e.target.value)}
        />
    </>
}
