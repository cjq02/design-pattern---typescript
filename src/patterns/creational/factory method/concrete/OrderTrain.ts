import AbstractOrder from "../base/AbstractOrder";

export default class OrderTrain extends AbstractOrder {

    add(): void {
        console.log("Add an train ticket.");
    } 
    
    
    delete(): void {
        console.log("Delete an train ticket.");
    }
}