import AbstractState from "../base/AbstractState";
import Player from "../context/Player";
import LockedState from "./LockedState";
import PlayingState from "./PlayingState";
import PlayMessageEnum from "../enum/PlayMessageEnum";

class ReadyState extends AbstractState {

    constructor(player: Player) {
        super(player);
    }
    getName(): String {
        return "ReadyState";
    }

    clickLock(): void {
        this.player.changeState(new LockedState(this.player));
        console.log(PlayMessageEnum.LOCKED);
    } 
    
    clickPlay(): void {
        this.player.changeState(new PlayingState(this.player));
        console.log(PlayMessageEnum.PLAYING);
    }

    clickNext(): void {
        throw new Error("Method not implemented.");
    }

    clickPrev(): void {
        throw new Error("Method not implemented.");
    }


}

export default ReadyState;