import _ = require("lodash");

export default class PrintUtils {

    static printChooseMsg(enumType: any, enumRef: any) {
        let map = _.map(enumType, (v) => {
            let enumerate = enumRef.getBykey(v);
            return `[${enumerate.key}] ${enumerate.name}`;
        });

        let chooseMsg = `You can select follow options: ${map.join(', ')} \n`;
        console.log(chooseMsg);
    }

}