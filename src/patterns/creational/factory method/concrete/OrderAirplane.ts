import AbstractOrder from "../base/AbstractOrder";

export default class OrderAirplane extends AbstractOrder {

    add() {
        console.log("Add an airplane ticket.");
    } 
    
    
    delete() {
        console.log("Delete an airplane ticket.");
    }

}