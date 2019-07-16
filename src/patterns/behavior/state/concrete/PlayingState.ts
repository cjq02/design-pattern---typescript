import AbstractState from "../base/AbstractState";
import Player from "../context/Player";
import LockedState from "./LockedState";
import ReadyState from "./ReadyState";
import PlayMessageEnum from "../enum/StateEnum";

class PlayingState extends AbstractState {

    constructor(player: Player) {
        super(player);
    }

    getName(): String {
        return "PlayingState";
    }

    clickLock(): void {
        this.player.changeState(new LockedState(this.player));
        console.log(PlayMessageEnum.STOP_PLAYING);
    } 
    
    clickPlay(): void {
        this.player.changeState(new ReadyState(this.player));
        console.log(PlayMessageEnum.PAUSED);
    }

    clickNext(): void {
        throw new Error("Method not implemented.");
    }

    clickPrev(): void {
        throw new Error("Method not implemented.");
    }
}

export default PlayingState;