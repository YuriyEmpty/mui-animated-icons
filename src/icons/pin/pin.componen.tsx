/**
 * Create by: Yuriy Empty
 * Email: yuriyempty@gmail.com
 * Date: 25.07.2023
 */

import React, { FunctionComponent, useEffect, forwardRef } from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";
import { EngineModule } from "../../player/player.engine";
import "./pin.animation";
import { IAnimatedElement } from "../../interfaces/svgator.interfaces";

export const Pin: FunctionComponent<SvgIconProps> = forwardRef((props, ref) => {

    useEffect(() => {
        const element = document.getElementById("eFaqLbmvre91") as IAnimatedElement;
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
            id={ "eFaqLbmvre91" }
            xmlns={ "http://www.w3.org/2000/svg" }
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 24 24"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            ref={ ref }
        >
            <path id="eFaqLbmvre92"
                  d="M8,3.4875h-1.25v-1.5h10.35v1.5h-1.25v7.1875v1.1375L18,13.7375v.744215L8,6.183633"
                  transform="translate(0-.0339)"
                  strokeWidth="0.5"/>
            <path id="eFaqLbmvre93"
                  d="M8,6.099532v1.682427L8,12L6,13.7375v1.5h5.25v6.025l.75.75.75-.75v-6.025h5.25v-1.5L8,6.099532Z"
                  transform="translate(0 0.050201)"
                  strokeWidth="0.5"/>
            <path id="eFaqLbmvre94"
                  d="M20.980872,16.904254v.000001"
                  transform="translate(.657754 0.24989)"
                  opacity="0"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                  strokeLinecap="round"/>
        </SvgIcon>
)
})