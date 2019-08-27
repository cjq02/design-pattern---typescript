import * as _ from 'lodash';

enum StateEnum {
    LOCKED = "1",
    PLAY = "2",
    CURRENT_STATE = "3",
    EXIT = "0"
}

class StateEnumRef {
    static readonly LOCKED = new StateEnumRef(StateEnum.LOCKED, 'locked');
    static readonly PLAY = new StateEnumRef(StateEnum.PLAY, 'play');
    static readonly CURRENT_STATE = new StateEnumRef(StateEnum.CURRENT_STATE, 'current state');
    static readonly EXIT = new StateEnumRef(StateEnum.EXIT, 'exit');

    private constructor(private readonly key: StateEnum, private readonly name: string) { }

    static getBykey(key: string) {
        const enumerate = _.findKey(StateEnum, (v) => v === key)
        return this[enumerate];
    }

    toString() {
        return this.key;
    }
}

export { StateEnum, StateEnumRef }