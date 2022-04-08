import React, {useState} from "react";
import {HighLoadComponent} from "./HighLoadComponent";

type InputChildPropsType = {
    title: string
    memo?: boolean
}

export const InputChild = ({
                               title,
                               memo,
                           }: InputChildPropsType) => {
    const [value, setValue] = useState('')
    console.log('InputChild')

    return (
        <>
            <h3>{title}</h3>
            <input value={value}
                   onChange={e => setValue(e.target.value)}
            />
            <HighLoadComponent memo={memo} />
        </>
    )
}
