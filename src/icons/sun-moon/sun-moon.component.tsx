/**
 * Create by: Yuriy Empty
 * Email: yuriyempty@gmail.com
 * Date: 27.07.2023
 */

import React, { forwardRef, FunctionComponent, useEffect, useState } from "react";
import { SvgIcon, SvgIconProps, useTheme } from "@mui/material";
import "./sun-moon.animation";
import { IAnimatedElement } from "../../interfaces/svgator.interfaces";
import { EngineModule } from "../../player/player.engine";

export const SunMoon: FunctionComponent<SvgIconProps> = forwardRef((props, ref) => {
    const theme = useTheme();

    useEffect(() => {
        const element = document.getElementById("eIABVhGNlu71") as IAnimatedElement;
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
            sx={
                {
                    "& path": {
                        stroke: theme.palette.action.active,
                    },
                    ...props.sx
                }
            }
            id="eIABVhGNlu71"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 24 24"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            ref={ ref }
        >
            <g>
                <path id="eIABVhGNlu73"
                      d="M0.171539,-2.4l.506625,1.718539L2.421539,-1.1025L1.184789,0.195l1.23675,1.2975-1.743375-.421039L0.171539,2.79l-.506625-1.718539-1.743375.421039l1.23675-1.2975-1.23675-1.2975l1.743375.421039L0.171539,-2.4Z"
                      transform="translate(5.362629 16.160001)"
                      opacity="0"
                      strokeWidth="0"/>
                <path id="eIABVhGNlu74"
                      d="M-0.878461,-2.4l.2702.917216.9298-.224716-.6596.6925.6596.6925-.9298-.224716-.2702.917216-.2702-.917216-.9298.224716.6596-.6925-.6596-.6925.9298.224716.2702-.917216Z"
                      transform="translate(6.058466 15.17)"
                      opacity="0"
                      strokeWidth="0"/>
                <path id="eIABVhGNlu75"
                      d="M-0.328461,-2.4l.394042,1.337745L1.421539,-1.39l-.961917,1.01.961917,1.01-1.355958-.327745L-0.328461,1.64l-.394042-1.337745L-2.078461,0.63l.961917-1.01-.961917-1.01l1.355958.327745L-0.328461,-2.4Z"
                      transform="translate(11.005961 20.223947)"
                      opacity="0"
                      strokeWidth="0"/>
                <path id="eIABVhGNlu76"
                      d="M-0.878461,-2.4l.2702.917216.9298-.224716-.6596.6925.6596.6925-.9298-.224716-.2702.917216-.2702-.917216-.9298.224716.6596-.6925-.6596-.6925.9298.224716.2702-.917216Z"
                      transform="translate(4.858466 10.228565)"
                      opacity="0"
                      strokeWidth="0"/>
            </g>
            <path id="eIABVhGNlu77"
                  d="M6.2588,16.341202c.117157.117136.117157.307091,0,.424295L3.858797,19.165496c-.117157.117137-.307105.117137-.424261,0s-.117158-.307159,0-.424295l2.400002-2.399999c.117157-.117137.307105-.117137.424262,0Z"
                  transform="translate(-.05 1.570598)"
                  strokeWidth="2"/>
            <path id="eIABVhGNlu78"
                  d="M12.16,18.9c0-.165682-.134318-.3-.3-.3s-.3.134318-.3.3v2.4c0,.165682.134318.3.3.3s.3-.134318.3-.3v-2.4Z"
                  transform="translate(.1 0.799999)"
                  strokeWidth="2"/>
            <path id="eIABVhGNlu79"
                  d="M16.341202,16.341202c.117136-.117137.307091-.117137.424295,0l2.399999,2.399999c.117137.117136.117137.307091,0,.424295s-.307159.117137-.424295,0l-2.399999-2.399999c-.117137-.117204-.117137-.307159,0-.424295Z"
                  transform="translate(1.633351 1.196652)"
                  strokeWidth="2"/>
            <path id="eIABVhGNlu710"
                  d="M18.9,11.56c-.165682,0-.3.134318-.3.3s.134318.3.3.3h2.4c.165682,0,.3-.134318.3-.3s-.134318-.3-.3-.3h-2.4Z"
                  transform="translate(.911166 0)"
                  strokeWidth="2"/>
            <path id="eIABVhGNlu711"
                  d="M19.165496,3.434536c.117137.117157.117137.307105,0,.424261L16.765497,6.2588c-.117204.117158-.307159.117158-.424295,0s-.117137-.307104,0-.424261l2.399999-2.400003c.117136-.117158.307091-.117158.424295,0Z"
                  transform="translate(1.646651 0.353333)"
                  strokeWidth="2"/>
            <path id="eIABVhGNlu712"
                  d="M3.858797,3.434536c-.117156-.117158-.307104-.117158-.424261,0s-.117158.307105,0,.424261L5.834539,6.2588c.117157.117158.307105.117158.424261,0s.117158-.307104,0-.424261L3.858797,3.434536Z"
                  transform="translate(-.05 0.353333)"
                  strokeWidth="2"/>
            <path id="eIABVhGNlu713"
                  d="M1.3,11.56c-.165688,0-.3.134318-.3.3s.134312.3.3.3h2.4c.165689,0,.3-.134318.3-.3s-.134311-.3-.3-.3h-2.4Z"
                  transform="translate(.492508 0)"
                  strokeWidth="2"/>
            <path id="eIABVhGNlu714"
                  d="M12.16,18.9c0-.165682-.134318-.3-.3-.3s-.3.134318-.3.3v2.4c0,.165682.134318.3.3.3s.3-.134318.3-.3v-2.4Z"
                  transform="translate(.4-17.342906)"
                  strokeWidth="2"/>
            <path id="eIABVhGNlu715"
                  d="M-5.866685,0c0-3.27695,2.626604-5.866685,5.866685-5.866685c1.715937,0,3.259809.736691,4.332594,1.911048C5.285472,-2.912539,5.866685,-1.524144,5.866685,0c0,1.693459-.717517,3.219333-1.865124,4.290194C2.953461,5.268203,1.546622,5.866685,0,5.866685c-3.240081,0-5.866685-2.626604-5.866685-5.866685Z"
                  transform="matrix(.824473 0 0 0.824473 12.020015 11.957262)"
                  strokeWidth="0"/>
        </SvgIcon>
    )
})