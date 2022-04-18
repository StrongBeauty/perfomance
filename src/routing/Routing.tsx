import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import {InputPage} from "../InputChild/InputPage";
import {List} from "../Lists/List";
import {ExampleAppendToDom} from "../AttachToDom/AttachToDom";
import {Layout} from "./Layout";

export const Routing = () => {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<InputPage/>}/>
                    <Route path="/lists" element={<List/>}/>
                    <Route path="/dom" element={<ExampleAppendToDom/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
