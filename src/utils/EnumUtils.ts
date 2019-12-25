import _ = require("lodash");

export default class EnumUtils {

    static getBykey(enumerate: any, enumRef: any, key: string) {
        const enumItem = _.findKey(enumerate, (v) => v === key)
        return enumRef[enumItem];
    }

}