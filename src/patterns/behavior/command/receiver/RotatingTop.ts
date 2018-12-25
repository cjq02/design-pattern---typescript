import BaseToy from "./BaseToy";

class RotatingTop extends BaseToy {
    
    getName(): String {
        return "RotatingTop";
    }
    
    start(): void {
        this.startRotating();
    }
    stop(): void {
        this.stopRotating();
    }

    private startRotating(): void {
        console.log("Top has started rotating");
    }

    private stopRotating(): void {
        console.log("Top has stopped rotating");
    }

}

export default RotatingTop;