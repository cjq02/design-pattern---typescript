import ICommand from "../base command/ICommand";

class RemoteControl {
    private onCommand!: ICommand;
    private offCommand!: ICommand;
    private undoCommand!: ICommand;

    onButtonPressed(onCommand: ICommand) {
        this.onCommand = onCommand;
        this.onCommand.execute();
        this.undoCommand = onCommand;
    }

    offButtonPressed(offCommand: ICommand) {
        this.offCommand = offCommand;
        this.offCommand.execute();
        this.undoCommand = offCommand;
    }

    undoButtonPressed(): void {
        this.undoCommand.undo();
    }

}

export default RemoteControl;