require('module-alias/register');
import Player from '@patterns/behavior/state/context/Player';
import { StateEnumRef, StateEnum } from '@patterns/behavior/state/enum/StateEnum';
import * as _ from 'lodash';
import ReadlineUtils from '@utils/ReadlineUtils';

class ApplicationState {

    private static player: Player;

    public static main(): void {
        this.player = new Player();
        this.printChooseMsg();
        this.choose();
    }

    static printChooseMsg() {
        let map = _.map(StateEnum, (v) => {
            let enumerate = StateEnumRef.getBykey(v)
            return `[${enumerate.key}] ${enumerate.name}`
        });

        let chooseMsg = `You can select follow options: ${map.join(', ')} \n`;
        console.log(chooseMsg);
    }

    static choose(): void {
        ReadlineUtils.question((answer: any) => {
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
                    return false;
                }
                default:
                    console.log('Invalid Instruction!')
                    return true;
            }

            return true;
        })
    }
}

ApplicationState.main();