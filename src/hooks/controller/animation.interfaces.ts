/**
 * Create by: Yuriy Empty
 * Email: yuriyempty@gmail.com
 * Date: 28.07.2023
 */

import { IPlayer } from "../../player/player.interfaces";

export interface IDeferredCommand {
    method: keyof IPlayer;
    args: any[];
}

export interface IAnimationControllerOptions {
    duration?: number;
    defaultPosition?: any;
}

export interface IAnimationControllerAPI {
    /**
     * Play animation
     */
    play: () => void;

    /**
     * Stop the animation playing
     */
    stop: () => void;

    /**
     * Pause
     */
    pause: () => void;

    /**
     * Toggle animation from current direction to opposite
     */
    switch: () => void;
}