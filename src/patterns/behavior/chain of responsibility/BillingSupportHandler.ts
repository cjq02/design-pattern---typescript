import AbstractSupportHandler from "./AbstractSupportHandler";

class BillingSupportHandler extends AbstractSupportHandler {

    handleRequest(message: string): void {
        console.log("BillingSupportHandler: Processing request. " + message);
    }

}

export default BillingSupportHandler;
