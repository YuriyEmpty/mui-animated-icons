/**
 * Create by: Yuriy Empty
 * Email: yuriyempty@gmail.com
 * Date: 25.07.2023
 */

import React, { FunctionComponent, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { useAnimation } from "../src/hooks/animation.hook";
import { SunMoon, Menu, Hail, Pin, Shield } from "../src/index.exports";
import { IconButton } from "@mui/material";

const IconOne: FunctionComponent = () => {
    const [ Node, animationAPI ] = useAnimation({
        component: Hail,
        IconProps: {
            fontSize: "small",
            sx:  {

            }
        },
        options: {
            duration: 400,
            defaultPosition: "end"
        }
    })

    return (
        <IconButton onClick={ () => animationAPI.switch() }>
            { Node }
        </IconButton>
    )
}

const App: FunctionComponent = () => {
    const [ Node, animationAPI ] = useAnimation({
        component: Shield,
        IconProps: {
            sx: {
                fontSize: "24rem",
            },
        },
        options: {
            duration: 400
        }
    })



    return (
        <div>
            <IconOne/>
            {/*<IconButton onClick={ () => animationAPI.switch() }>*/}
            {/*    { Node }*/}
            {/*</IconButton>*/}
        </div>
    )
}

createRoot(document.getElementById("app")!).render(<App/>);