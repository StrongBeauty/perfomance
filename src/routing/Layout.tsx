import React from "react";
import { Outlet } from "react-router-dom";
import {Navigation} from "./Navigation";

export const Layout: React.FC = () => {
    return (
        <>
        <Navigation />
            <Outlet />
        </>
    )
}
