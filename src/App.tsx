import React from 'react';
import {FirstSolution} from "./InputChild/FirstSolution/FirstSolution";
import {InputsChildExample} from "./InputChild/CommonExamples/InputsChildExample";
import {SecondSolution} from "./InputChild/SecondSolution";
import {HighLoadComponent} from "./InputChild/CommonExamples/HighLoadComponent";
import {List} from "./Lists/List";
import {ExampleAppendToDom} from "./AttachToDom/AttachToDom";

function App() {
    return (
        <>
            <InputsChildExample/>
            <FirstSolution/>
            <SecondSolution>
                <HighLoadComponent />
            </SecondSolution>
            <List />
            <ExampleAppendToDom />
        </>
    );
}

export default App;
