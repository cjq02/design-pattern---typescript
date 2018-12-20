import AbstractSupportHandler from "./AbstractSupportHandler";

class GeneralSupportHandler extends AbstractSupportHandler {
    
    handleRequest(message: string): void {
        console.log("GeneralSupportHandler: Processing request. " + message);
    }

}

export default GeneralSupportHandler;