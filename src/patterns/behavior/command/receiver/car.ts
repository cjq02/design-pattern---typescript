import BaseToy from "./BaseToy";

class Car extends BaseToy {

    getName(): String {
        return "Car";
    }
    
    start(): void {
        this.move();
    }

    stop(): void {
        console.log("Car has stopped");
    }

    private move(): void {
        console.log("Car is moving");
    }

}

export default Car;