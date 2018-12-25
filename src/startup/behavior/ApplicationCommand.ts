require('module-alias/register')

import RemoteControl from "@patterns/behavior/command/invoker/RemoteControl";
import Car from "@patterns/behavior/command/receiver/car";
import ICommand from "@patterns/behavior/command/base/ICommand";
import StartCommand from "@patterns/behavior/command/concrete command/StartCommand";
import RotatingTop from "@patterns/behavior/command/receiver/RotatingTop";
import StopCommand from "@patterns/behavior/command/concrete command/StopCommand";

class ApplicationCommand {

    public static main(): void {
        let remoteControl: RemoteControl  = new RemoteControl();
        console.log("-----Testing onButtonPressed on RemoteControl for Car-----");
        let car: Car  = new Car();
        let carMoveCommand: ICommand  = new StartCommand(car);
        remoteControl.onButtonPressed(carMoveCommand);
        console.log("-----Testing offButtonPressed on RemoteControl for Car-----");
        let carStopCommand: ICommand = new StopCommand(car);
        remoteControl.offButtonPressed(carStopCommand);
        console.log("-----Testing undoButtonPressed() on RemoteControl for Car-----");
        remoteControl.undoButtonPressed();

        console.log("-----Testing onButtonPressed on RemoteControl for RotatingTop-----");
        let top: RotatingTop  = new RotatingTop();
        let topRotateCommand: ICommand  = new StartCommand(top);
        remoteControl.onButtonPressed(topRotateCommand);

        console.log("-----Testing offButtonPressed on RemoteControl for RotatingTop-----");
        let topStopRotateCommand: ICommand  = new StopCommand(top);
        remoteControl.offButtonPressed(topStopRotateCommand);

        console.log("-----Testing undoButtonPressed on RemoteControl for RotatingTop-----");

        remoteControl.undoButtonPressed();
    }

}

ApplicationCommand.main(); 2