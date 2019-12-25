require('module-alias/register');
import OrderFactory from "@patterns/creational/factory method/OrderFactory";
import { Application } from "@annotation/Application";
import { Autowired } from "@annotation/Autowired";
import _ = require("lodash");
import ReadlineUtils from "@utils/ReadlineUtils";
import PrintUtils from "@utils/PrintUtils";
import { OrderEnum, OrderEnumRef } from "@patterns/creational/factory method/enum/OrderEnum";

@Application.Startup
class ApplicationFactoryMethod {

    @Autowired(OrderFactory)
    private static orderFactory: OrderFactory;

    @Application.Autostart
    public static main(): void {
        this.choose();
    }

    static choose(): void {
        PrintUtils.printChooseMsg(OrderEnum, OrderEnumRef);

        ReadlineUtils.question((answer: any) => {
            this.orderFactory.getOrder(answer).add();
            return true;
        })
    }

}