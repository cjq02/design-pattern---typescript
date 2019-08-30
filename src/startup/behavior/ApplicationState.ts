require('module-alias/register');
import Player from '@patterns/behavior/state/context/Player';
import { StateEnumRef, StateEnum } from '@patterns/behavior/state/enum/StateEnum';
import * as _ from 'lodash';
import ReadlineUtils from '@utils/ReadlineUtils';
import { Autowired } from '@annotation/Autowired';
import { Application } from '@annotation/Application';

@Application.Startup
class ApplicationState {

    @Autowired(Player)
    private static player: any;

    @Application.Autostart
    public static main(): void {
        this.choose();
    }

    static printChooseMsg(enumType: any, enumRef: any) {
        let map = _.map(enumType, (v) => {
            let enumerate = enumRef.getBykey(v);
            return `[${enumerate.key}] ${enumerate.name}`;
        });

        let chooseMsg = `You can select follow options: ${map.join(', ')} \n`;
        console.log(chooseMsg);
    }

    static choose(): void {
        this.printChooseMsg(StateEnum, StateEnumRef);

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