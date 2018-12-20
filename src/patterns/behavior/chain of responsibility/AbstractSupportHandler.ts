abstract class AbstractSupportHandler {
    
    public static TECHNICAL: number = 10;
    public static BILLING: number = 20;
    public static GENERAL: number = 30;
    
    protected level!: number;

    protected nextHandler!: AbstractSupportHandler;

    constructor(level: number) {
        this.level = level;
    }

    public setNextHandler(nextHandler: AbstractSupportHandler): void {
        this.nextHandler = nextHandler;
    }

    public receiveRequest(level: number, message: string) {
        if (this.level <= level) {
            this.handleRequest(message);
        }

        if(this.nextHandler !=null){
            this.nextHandler.receiveRequest(level, message);
        }
    }

    abstract handleRequest(message: string): void;
}

export default AbstractSupportHandler;