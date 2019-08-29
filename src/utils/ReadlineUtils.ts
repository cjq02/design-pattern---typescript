import readline = require('readline');
import * as _ from 'lodash';

export default class ReadlineUtils {

    private static rl: readline.Interface;

    private static initReadline() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    static question(func: Function) {
        this.initReadline();
        this.doQuestion(func);
    }

    private static doQuestion(func: Function) {
        this.rl.question(`Please choose an option:`, (answer) => {
            if (func(answer)) {
                this.doQuestion(func);
                return;
            }

            this.rl.close();
        });
    }

}