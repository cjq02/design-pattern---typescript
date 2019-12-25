import AbstractOrder from "../base/AbstractOrder";

export default class OrderTaxi extends AbstractOrder {

    add(): void {
        console.log("Add a taxi ticket.");
    } 
    
    
    delete(): void {
        console.log("Delete a taxi ticket.");
    }
}