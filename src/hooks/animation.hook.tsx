/**
 * Create by: Yuriy Empty
 * Email: yuriyempty@gmail.com
 * Date: 26.07.2023
 */

import React, {
    createElement,
    useRef,
    useEffect,
    useState,
    ReactNode
} from "react";
import { AnimationController } from "./controller/animation.controller";
import { IAnimationControllerAPI } from "./controller/animation.interfaces";
import { IUseAnimation } from "./animation.interfaces";

export const useAnimation = (params: IUseAnimation): [ ReactNode, IAnimationControllerAPI ] => {
    const ref = useRef<SVGElement>();
    const [ controller ] = useState(() => new AnimationController())

    useEffect(() => {
        if(!ref.current) {
            return;
        }

        // @ts-ignore
        controller.initPlayer(ref.current.svgatorPlayer, params.options);
    }, [])

    return [
        createElement(params.component as any, {
            ref: ref,
            ...params.IconProps
        }),
        controller
    ]
}