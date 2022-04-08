import React from "react";

type HighLoadComponentPropsType = {
    memo?: boolean
}

const PayloadComponent = () => {
    let now = performance.now();
    while (performance.now() - now < 150) {
        //delay for doing nothing
    }
    console.log('PayloadComponent')

    return (
        <>
            I'm doing something really hard..
        </>
    )
};

const MemoPayloadComponent = React.memo(() => <PayloadComponent />);

export const HighLoadComponent = ({memo}: HighLoadComponentPropsType) => {
    console.log('HighLoadComponent')

    return (
        <>
            {memo
                ? <MemoPayloadComponent />
                : <PayloadComponent />
            }
        </>
    )
};
