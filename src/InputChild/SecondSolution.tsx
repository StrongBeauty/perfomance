import React, {useState} from 'react';

type SecondSolutionPropsType = {
    children: React.ReactNode
}

export const SecondSolution = ({children}: SecondSolutionPropsType) => {
    const [value, setValue] = useState('')
    console.log('SecondSolution')

    return (
        <>
            <h3>Children</h3>
            <input value={value}
                   onChange={e => setValue(e.target.value)}
            />
            {children}
        </>
    )
}
