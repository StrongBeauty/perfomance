import {InputsChildExample} from "./CommonExamples/InputsChildExample";
import {FirstSolution} from "./FirstSolution/FirstSolution";
import {SecondSolution} from "./SecondSolution/SecondSolution";
import {HighLoadComponent} from "./CommonExamples/HighLoadComponent";
import React from "react";

export const InputPage = () => {
    return (
        <>
            <InputsChildExample/>
            <FirstSolution/>
            <SecondSolution>
                <HighLoadComponent/>
            </SecondSolution>
        </>
    )
}
