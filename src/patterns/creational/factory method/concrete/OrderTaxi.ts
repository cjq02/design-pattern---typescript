import AbstractOrder from "../base/AbstractOrder";

export default class OrderTaxi extends AbstractOrder {

    add(): void {
        console.log("Add an taxi ticket.");
    } 
    
    
    delete(): void {
        console.log("Delete an taxi ticket.");
    }
}