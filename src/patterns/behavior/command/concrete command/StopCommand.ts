import ICommand from "../base command/ICommand";
import BaseToy from "../receiver/BaseToy";

class StopCommand implements ICommand {

    private toy!: BaseToy;

    constructor(toy: BaseToy) {
        this.toy = toy;
    }

    execute(): void {
        console.log(`StopCommand.execute(): Invoking stop() on ${this.toy.getName()}`);
        this.toy.stop();
    }

    undo(): void {
        console.log(`StartCommand.undo():  Undoing previous action->Invoking start() on ${this.toy.getName()}`);
        this.toy.start();
    }
}

export default StopCommand;