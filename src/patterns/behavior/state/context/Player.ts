import AbstractState from "../base/AbstractState";
import ReadyState from "../concrete/ReadyState";

class Player {

    private state: AbstractState;
    private playing: boolean;

    constructor() {
        this.state = new ReadyState(this);
    }

    changeState(state: AbstractState): void {
        this.state = state;
    }

    getState(): AbstractState {
        return this.state;
    }

    setPlaying(playing: boolean) {
        this.playing = playing;
    }

    isPlaying(): boolean {
        return this.playing;
    }

}

export default Player;