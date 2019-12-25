require('module-alias/register');
import Player from '@patterns/behavior/state/context/Player';
import { StateEnumRef, StateEnum } from '@patterns/behavior/state/enum/StateEnum';
import * as _ from 'lodash';
import ReadlineUtils from '@utils/ReadlineUtils';
import { Autowired } from '@annotation/Autowired';
import { Application } from '@annotation/Application';
import PrintUtils from '@utils/PrintUtils';

@Application.Startup
class ApplicationState {

    @Autowired(Player)
    private static player: Player;

    @Application.Autostart
    public static main(): void {
        this.choose();
    }

    static choose(): void {
        PrintUtils.printChooseMsg(StateEnum, StateEnumRef);

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