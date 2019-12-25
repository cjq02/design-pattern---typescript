import AbstractOrder from "../base/AbstractOrder";

export default class OrderTrain extends AbstractOrder {

    add(): void {
        console.log("Add a train ticket.");
    } 
    
    
    delete(): void {
        console.log("Delete a train ticket.");
    }
}