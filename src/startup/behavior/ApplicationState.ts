require('module-alias/register');
import readline = require('readline');
import Player from '@patterns/behavior/state/context/Player';

enum StateEnum {
    LOCKED = "1",
    PLAY = "2",
    CURRENT_STATE = "3",
    EXIT = "0"
}

class ApplicationState {

    private static player: Player;

    public static main(): void {
        const rl = this.initReadline();
        this.player = new Player();

        let chooseMsg = `You can select follow options: \r
        ${StateEnum.LOCKED} - locked \r
        ${StateEnum.PLAY} - play \r
        ${StateEnum.CURRENT_STATE} - current state \r
        ${StateEnum.EXIT} - exit \n`;

        console.log(chooseMsg);

        this.choose(rl);
    }

    static initReadline() {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        return rl;
    }

    static choose(rl: readline.Interface): void {
        rl.question(`Please choose an option:`, (answer) => {
            switch (answer) {
                case StateEnum.LOCKED:
                    this.player.getState().clickLock();
                    break;
                case StateEnum.PLAY: {
                    this.player.getState().clickPlay();
                    break;
                }
                case StateEnum.CURRENT_STATE:
                    console.log(this.player.getState().getName());
                    break;
                case StateEnum.EXIT: {
                    rl.close();
                    return;
                }
                default:
                    this.choose(rl);
            }

            this.choose(rl);
        });
    }
}

ApplicationState.main();