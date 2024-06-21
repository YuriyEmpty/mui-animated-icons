/**
 * Create by: Yuriy Empty
 * Email: yuriyempty@gmail.com
 * Date: 26.07.2023
 */

/**
 * Implementation of the PlayerAPI of Svgator
 *
 * @link https://www.svgator.com/help/getting-started/svgator-player-js-api
 */
export interface IPlayer {
    /**
     * Plays the current animation from current offset or restarts if it has ended
     */
    play: () => void;

    /**
     * Pauses the current animation
     */
    pause: () => void;

    /**
     * Restarts the animation from its beginning
     */
    restart: () => void;

    /**
     * Reverses the playing direction and plays the animation
     */
    reverse: () => void;

    /**
     * Toggles between play and pause
     */
    toggle: () => void;

    /**
     * Alias for toggle
     */
    togglePlay: () => void;

    /**
     * Stops the current animation and resets it to the first keyframe
     */
    stop: () => void;

    /**
     * Calls callback when the player is ready, passing the player as 1st parameter
     *
     * @link https://www.svgator.com/help/getting-started/animate-programmatically
     */
    ready: (callback: Function) => void;

    /**
     * Advances the animation to offset in %, where offset must be a float between 0 and 100
     * player.seek(50) will advance the animation to 50%
     */
    seek: (offsetPercent: number) => void;

    /**
     * Advances the animation with offsetMs milliseconds
     * Negative values are also allowed
     */
    seekBy: (offsetMs: number) => void;

    /**
     * Advances the animation to offsetMs milliseconds
     */
    seekTo: (offsetMs: number) => void;

    /**
     * Sets writable properties
     *
     * @link https://www.svgator.com/help/getting-started/svgator-player-js-api#writable-properties
     */
    set: (property: string, value: any) => void;

    /**
     * Detaches the player object from the SVG, removes event handlers, stops the animation & resets to the first keyframe
     * Further API calls will not have any effect
     */
    destruct: () => void;

    isBackwards: boolean;

    /**
     * Forward - 1
     * Backward - -1
     *
     * @link https://www.svgator.com/help/getting-started/svgator-player-js-api#:~:text=IV.%20Writable%20Properties
     */
    direction: number;

}