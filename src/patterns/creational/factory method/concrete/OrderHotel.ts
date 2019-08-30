import AbstractOrder from "../base/AbstractOrder";

export default class OrderHotel extends AbstractOrder {

    add(): void {
        console.log("Add an hotel ticket.");
    } 
    
    
    delete(): void {
        console.log("Delete an hotel ticket.");
    }
}