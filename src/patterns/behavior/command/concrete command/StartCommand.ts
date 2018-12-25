import ICommand from "../base/ICommand";
import BaseToy from "../receiver/BaseToy";

class StartCommand implements ICommand {
    
    private toy!: BaseToy;

    constructor(toy: BaseToy) {
        this.toy = toy;
    }

    execute(): void {
        console.log(`StartCommand.execute(): Invoking start() on ${this.toy.getName()}`);
        this.toy.start();
    }    
    
    undo(): void {
        console.log(`StartCommand.undo():  Undoing previous action->Invoking stop() on ${this.toy.getName()}`);
        this.toy.stop();
    }
}

export default StartCommand;