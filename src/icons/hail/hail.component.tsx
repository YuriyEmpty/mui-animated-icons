/**
 * Create by: Yuriy Empty
 * Email: yuriyempty@gmail.com
 * Date: 09.10.2023
 */

import React, { forwardRef, FunctionComponent, useEffect } from "react";
import "./hail.animation";
import { SvgIcon, SvgIconProps } from "@mui/material";
import { IAnimatedElement } from "../../interfaces/svgator.interfaces";
import { EngineModule } from "../../player/player.engine";

export const Hail: FunctionComponent<SvgIconProps> = forwardRef((props, ref) => {

    useEffect(() => {
        const element = document.getElementById("eTIosZNVheR1") as IAnimatedElement;
        if(!element) {
            return;
        }
        EngineModule();

        return () => {
            element.svgatorPlayer.destruct();
        }
    }, [])

    return (
        <SvgIcon
            { ...props }
            id={ "eTIosZNVheR1" }
            xmlns={ "http://www.w3.org/2000/svg" }
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 24 24"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            ref={ ref }
        >
            <g transform="translate(-.499993 0.05625)">
                <path d="M14.7011,4c0,1.10457-.8954,2-2,2s-2-.89543-2-2s.8954-2,2-2s2,.89543,2,2Z"/>
                <path d="M10,8.21069h5.4492v7.42471h-1.3994-1.3487-2.7011v-7.42471Z"/>
                <path d="M11.4967,15.5v-.75h-1.50003v.75h1.50003ZM9.99668,21.1375c0,.4142.33582.75.75002.75s.75-.3358.75-.75h-1.50002ZM9.99667,15.5l.00001,5.6375h1.50002v-5.6375h-1.50003Z"/>
                <path d="M15.4511,15.5v-.75h-1.5v.75h1.5Zm-1.5,5.6257c0,.4142.3358.75.75.75s.75-.3358.75-.75h-1.5Zm0-5.6257v5.6257h1.5v-5.6257h-1.5Z"/>
                <path id="eTIosZNVheR7"
                      d="M7.5,17h-1c-.27614,0-.5.2239-.5.5v3.5c0,.2761.22386.5.5.5h1c.27614,0,.5-.2239.5-.5v-3.5c0-.2761-.22386-.5-.5-.5Z"
                      transform="translate(-.250087-3.18715)"
                      stroke="#000"/>
            </g>
            <path id="eTIosZNVheR8"
                  d="M6.24992,11.999999c0,0,.506144-2.144587,1.696467-3.238441.485894-.446515,1.287982-.685306,2.067155-.811557c1.129613-.183033,2.211065-.129531,2.211065-.129531"
                  transform="matrix(-1 0 0 1 24.449214-.020704)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="1.5"
                  strokeLinecap="round"/>
            <path id="eTIosZNVheR9"
                  d="M6.24992,11.999999c0,0,.200897-2.076471,1.360384-3.259146.484921-.494619,1.520898-.743419,1.889703-.811557C10.201107,7.799765,12,7.799765,12,7.799765"
                  transform="translate(0 0.000001)"
                  fill="none"
                  stroke="#000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"/>
        </SvgIcon>
    )
})