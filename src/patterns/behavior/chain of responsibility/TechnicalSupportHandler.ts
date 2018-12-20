import AbstractSupportHandler from "./AbstractSupportHandler";

class TechnicalSupportHandler extends AbstractSupportHandler {

    handleRequest(message: string): void {
        console.log("TechnicalSupportHandler: Processing request " + message);
    }

}

export default TechnicalSupportHandler;