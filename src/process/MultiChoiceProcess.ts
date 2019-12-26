import readline = require('readline');
import { Injectable } from '../annotation/Autowired';

@Injectable()
export default class MultiChoiceProcess {

    private rl: readline.Interface;

    constructor() {
        this.initReadline();
    }

    private initReadline() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    public question(func: Function) {
        this.doQuestion(func);
    }

    public terminate() {
        this.rl.close();
    }

    private isClosed() {
        return this.rl['closed'];
    }

    private doQuestion(func: Function) {
        this.rl.question(`Please choose an option:`, (answer) => {
            func(answer);

            if (this.isClosed()) {
                return;
            }

            this.doQuestion(func);
        });
    }

}