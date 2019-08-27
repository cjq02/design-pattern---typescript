require('module-alias/register');
import readline = require('readline');
import Player from '@patterns/behavior/state/context/Player';
import { StateEnumRef, StateEnum } from '@patterns/behavior/state/enum/StateEnum';
import * as _ from 'lodash';

class ApplicationState {

    private static player: Player;

    public static main(): void {
        const rl = this.initReadline();
        this.player = new Player();

        let map = _.map(StateEnum, (v) => {
            let enumerate = StateEnumRef.getBykey(v)
            return `[${enumerate.key}] ${enumerate.name}`
        });

        let chooseMsg = `You can select follow options: ${map.join(', ')} \n`;
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