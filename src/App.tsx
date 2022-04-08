import React from 'react';
import {FirstSolution} from "./InputChild/FirstSolution/FirstSolution";
import {InputsChildExample} from "./InputChild/CommonExamples/InputsChildExample";
import {SecondSolution} from "./InputChild/SecondSolution";
import {HighLoadComponent} from "./InputChild/CommonExamples/HighLoadComponent";

function App() {
    return (
        <>
            <InputsChildExample/>
            <FirstSolution/>
            <SecondSolution>
                <HighLoadComponent />
            </SecondSolution>
        </>
    );
}

export default App;
