/**
 * Create by: Yuriy Empty
 * Email: yuriyempty@gmail.com
 * Date: 25.07.2023
 */

import React, { FunctionComponent, useEffect, forwardRef } from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";
import { EngineModule } from "../../player/player.engine";
import "./menu.animation";
import { IAnimatedElement } from "../../interfaces/svgator.interfaces";

export const Menu: FunctionComponent<SvgIconProps> = forwardRef((props, ref) => {

    useEffect(() => {
        const element = document.getElementById("eDxQEYUeolH1") as IAnimatedElement;
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
            id={ "eDxQEYUeolH1" }
            xmlns={ "http://www.w3.org/2000/svg" }
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 28 24"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            ref={ ref }
        >
            <rect id="eDxQEYUeolH2"
                  width="22.084399"
                  height="1.618791"
                  rx="0.81"
                  ry="0.81"
                  transform="matrix(1.08674 0 0-1.23549 2.000011 5.962977)"
                  strokeWidth="0"/>
            <rect id="eDxQEYUeolH3"
                  width="23.917175"
                  height="1.618791"
                  rx="0.81"
                  ry="0.81"
                  transform="matrix(1.003463 0 0-1.23549 2.040517 12.854762)"
                  strokeWidth="0"/>
            <rect id="eDxQEYUeolH4"
                  width="23.917175"
                  height="1.618791"
                  rx="0.81"
                  ry="0.81"
                  transform="matrix(1.003463 0 0-1.23549 1.956703 19.958621)"
                  strokeWidth="0"/>
        </SvgIcon>
    )
})