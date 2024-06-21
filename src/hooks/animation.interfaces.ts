/**
 * Create by: Yuriy Empty
 * Email: yuriyempty@gmail.com
 * Date: 10.10.2023
 */

import { FunctionComponent } from "react";
import { SvgIconProps } from "@mui/material";

export interface IUseAnimation {
    component: FunctionComponent;
    IconProps?: SvgIconProps;
    options?: {
        duration?: number;
        defaultPosition?: "start" | "end";
    }
}