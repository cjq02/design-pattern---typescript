import AbstractState from "../base/AbstractState";
import ReadyState from "./ReadyState";
import Player from "../context/Player";
import PlayMessageEnum from "../enum/PlayMessageEnum";

class LockedState extends AbstractState {

    constructor(player: Player) {
        super(player);
        player.setPlaying(false);
    }

    getName(): String {
        return "LockedState";
    }

    clickLock(): void {
        if (this.player.isPlaying()) {
            this.player.changeState(new ReadyState(this.player));
            console.log(PlayMessageEnum.STOP_PLAYING);
            return;   
        }

        console.log(PlayMessageEnum.LOCKED);
    } 
    
    clickPlay(): void {
        this.player.changeState(new ReadyState(this.player));
        console.log(PlayMessageEnum.READY);
    }

    clickNext(): void {
        throw new Error("Method not implemented.");
    }

    clickPrev(): void {
        throw new Error("Method not implemented.");
    }


}

export default LockedState;