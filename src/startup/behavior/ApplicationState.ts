require('module-alias/register');
import Player from '@patterns/behavior/state/context/Player';
import { StateEnumRef, StateEnum } from '@patterns/behavior/state/enum/StateEnum';
import * as _ from 'lodash';
import { Autowired } from '@annotation/Autowired';
import { Application } from '@annotation/Application';
import PrintUtils from '@utils/PrintUtils';
import MultiChoiceProcess from '@process/MultiChoiceProcess';

@Application.Startup
class ApplicationState {

    @Autowired(Player)
    private static player: Player;

    @Autowired(MultiChoiceProcess)
    private static process: MultiChoiceProcess;

    @Application.Autostart
    public static main(): void {
        this.choose();
    }

    static choose(): void {
        PrintUtils.printChooseMsg(StateEnum, StateEnumRef);
        this.process.question((answer: any) => {
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
                    this.process.terminate();
                    break;
                }
                default:
                    console.log('Invalid Instruction!')
            }
        })
    }
}