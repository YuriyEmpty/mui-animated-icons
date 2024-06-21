/**
 * Create by: Yuriy Empty
 * Email: yuriyempty@gmail.com
 * Date: 28.07.2023
 */

import { IPlayer } from "../../player/player.interfaces";
import { IAnimationControllerAPI, IAnimationControllerOptions, IDeferredCommand } from "./animation.interfaces";

export class AnimationController implements IAnimationControllerAPI {

    private player: IPlayer;

    private commands: IDeferredCommand[] = [];

    /**
     * Relative direction
     */
    private direction: string = "forward";

    /**
     * Default animation position
     */
    private defaultPosition: string = "start";

    public initPlayer(player: IPlayer, options: IAnimationControllerOptions = {}) {
        this.player = player;

        this.parseOptions(options);
        this.setDefaultPosition();
        this.executeCommands();
    }

    public play(): void {
        if(!this.player) {
            return this.setCommand("play");
        }

        this.player.play();
    }

    public stop(): void {
        if(!this.player) {
            return this.setCommand("stop");
        }

        this.player.stop();
    }

    public pause(): void {
        if(!this.player) {
            return this.setCommand("pause");
        }

        this.player.pause();
    }

    public switch(): void {
        this.updateActualDirection();
        this.player.play();
        this.updateRelativeDirection();
    }

    private updateActualDirection(): void {
        if(this.direction == "forward") {
            this.player.set("direction", 1);
            return;
        }

        if(this.direction == "backward") {
            this.player.set("direction", -1);
        }
    }

    private updateRelativeDirection(): void {
        if(this.direction == "forward") {
            this.direction = "backward";
            return;
        }

        if(this.direction == "backward") {
            this.direction = "forward";
        }
    }

    /**
     * Execute all commands and clear storage
     */
    private executeCommands(): void {
        for(let i = 0; i < this.commands.length; i++) {
            const { method, args } = this.commands[i];
            // @ts-ignore
            this[method](...args);
        }

        this.commands = [];
    }

    private setCommand(method: IDeferredCommand["method"], args?: IDeferredCommand["args"]): void {
        this.commands.push({
            method: method,
            args: args || []
        })
    }

    /**
     * Set default direction of animation
     *
     * @note If the module develops, this logic needs to be improved
     */
    private setDefaultPosition(): void {
        if(this.defaultPosition == "start") {
            this.player.set("direction", 1);
            this.direction = "forward";
        }

        if(this.defaultPosition == "end") {
            this.player.set("direction", -1);
            this.direction = "backward";
        }
    }

    private parseOptions(options: IAnimationControllerOptions): void {
        if(!this.player) {
            return;
        }

        if(options.duration !== undefined) {
            // set animation speed and cast from milliseconds to relative value, where 1 this is 100% speed
            this.player.set("speed", 1000 / options.duration);
        }

        if(options.defaultPosition) {
            this.defaultPosition = options.defaultPosition;
        }

        console.log(this)
    }

}