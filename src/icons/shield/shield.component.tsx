/**
 * Create by: Yuriy Empty
 * Email: yuriyempty@gmail.com
 * Date: 10.10.2023
 */

import React, { forwardRef, FunctionComponent, useEffect } from "react";
import "./shield.animation";
import { SvgIcon, SvgIconProps } from "@mui/material";
import { IAnimatedElement } from "../../interfaces/svgator.interfaces";
import { EngineModule } from "../../player/player.engine";

export const Shield: FunctionComponent<SvgIconProps> = forwardRef((props, ref) => {

    useEffect(() => {
        const element = document.getElementById("eWjCTztuSOX1") as IAnimatedElement;
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
            id={ "eWjCTztuSOX1" }
            xmlns={ "http://www.w3.org/2000/svg" }
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 24 24"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            ref={ ref }
        >
            <path id="eWjCTztuSOX2"
                  d="M5.533242,4.454805c.153013-.223053.700004-.5625.700004-.5625l.585571-.218465l5.914425-2.206535c0,0,.364668-.1.525-.1s.525.1.525.1l6.5,2.425c0,0,.545645.339845.7.5625s.284364.8625.284364.8625.075536,3.426149,0,4.89999c-.034891.680787-.20549,1.786737-.408466,2.780753-.03407.166849-.069314.330623-.104823.488809-.211236.941002-.469693,1.684247-.508877,1.700754c0,0-14.987198-9.870306-14.987198-9.870306s.121986-.639446.275-.8625Z"
                  transform="translate(-1.227402 0.666044)"
                  strokeWidth="0.5"/>
            <path id="eWjCTztuSOX3"
                  d="M20.283237,15.157246c0,0-.341888.824921-.69298,1.429954-.090378.155749-.181367.298938-.26729.412782-.596596.790455-1.321975,1.466793-1.866974,1.956256-.928409.833805-3.672751,2.136057-3.672751,2.136057s-.330356.177388-.488055.177947-.561946-.177948-.561946-.177948-2.683962-1.152296-3.689909-2.017444-2.234623-2.492905-2.810092-3.692223-.854678-2.684737-1.022344-4.102829c-.086177-.728874-.071261-2.283649-.036406-3.622777.00619-.237818.013009-.468835.020002-.687217.030242-.944399.101547-1.682864.101547-1.682864c5.185817,3.371232,15.182566,9.364347,14.987198,9.870306Z"
                  transform="translate(-1.265199 0.696409)"
                  strokeWidth="0.5"/>
            <path id="eWjCTztuSOX4"
                  d="M22.187166,17.030348v0"
                  transform="translate(-1.227402 0.238236)"
                  opacity="0"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                  strokeLinecap="round"/>
        </SvgIcon>
    )
})