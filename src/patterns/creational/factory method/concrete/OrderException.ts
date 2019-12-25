import AbstractOrder from "../base/AbstractOrder";

export default class OrderException extends AbstractOrder {

    add(): void {
        console.log("No such order!");
    } 
    
    
    delete(): void {
        console.log("No such order!");
    }
}