import { OrderEnum, OrderEnumRef } from "@patterns/creational/factory method/enum/OrderEnum";
import readline = require('readline');
import OrderFactory from "../../patterns/creational/factory method/OrderFactory";

class ApplicationFactoryMethod {

    public static main(): void {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question(`Please choose an option:`, (answer) => {
            let orderFactory = new OrderFactory();
            let order = orderFactory.getOrder(+answer);
            order.add();
        });
    }

    // static choose(rl: readline.Interface): void {
    //     rl.question(`Please choose an option:`, (answer) => {
    //         switch (answer) {
    //             case StateEnum.LOCKED:
    //                 this.player.getState().clickLock();
    //                 break;
    //             case StateEnum.PLAY: {
    //                 this.player.getState().clickPlay();
    //                 break;
    //             }
    //             case StateEnum.CURRENT_STATE:
    //                 console.log(this.player.getState().getName());
    //                 break;
    //             case StateEnum.EXIT: {
    //                 rl.close();
    //                 return;
    //             }
    //             default:
    //                 this.choose(rl);
    //         }

    //         this.choose(rl);
    //     });
    // }

}

ApplicationFactoryMethod.main();