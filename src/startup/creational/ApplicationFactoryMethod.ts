require('module-alias/register');
import OrderFactory from "@patterns/creational/factory method/OrderFactory";
import { Application } from "@annotation/Application";
import { Autowired } from "@annotation/Autowired";
import _ = require("lodash");
import PrintUtils from "@utils/PrintUtils";
import { OrderEnum, OrderEnumRef } from "@patterns/creational/factory method/enum/OrderEnum";
import MultiChoiceProcess from "@process/MultiChoiceProcess";
import Constants from "@common/Constants";

@Application.Startup
class ApplicationFactoryMethod {

    @Autowired(OrderFactory)
    private static orderFactory: OrderFactory;

    @Autowired(MultiChoiceProcess)
    private static process: MultiChoiceProcess;

    @Application.Autostart
    public static main(): void {
        this.choose();
    }

    static choose(): void {
        PrintUtils.printChooseMsg(OrderEnum, OrderEnumRef);

        this.process.question((answer: any) => {
            if (answer === Constants.EXIT) {
                return this.process.terminate();
            }

            this.orderFactory.getOrder(answer).add();
        })
    }

}