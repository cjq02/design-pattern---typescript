import Player from "../context/Player";

abstract class AbstractState {

    protected player: Player;

    constructor(player: Player) {
        this.player = player;
    }

    abstract getName(): String;

    abstract clickLock(): void;

    abstract clickPlay(): void;

    abstract clickNext(): void;

    abstract clickPrev(): void;

}

export default AbstractState;