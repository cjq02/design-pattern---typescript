import AbstractOrder from "../base/AbstractOrder";

export default class OrderHotel extends AbstractOrder {

    add(): void {
        console.log("Add a hotel ticket.");
    } 
    
    
    delete(): void {
        console.log("Delete a hotel ticket.");
    }
}