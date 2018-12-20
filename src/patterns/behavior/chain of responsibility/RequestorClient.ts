import AbstractSupportHandler from "./AbstractSupportHandler";
import TechnicalSupportHandler from "./TechnicalSupportHandler";
import BillingSupportHandler from "./BillingSupportHandler";
import GeneralSupportHandler from "./GeneralSupportHandler";

class RequestorClient {
 
    public static getHandlerChain(): AbstractSupportHandler {
        let technicalSupportHandler: AbstractSupportHandler = new TechnicalSupportHandler(AbstractSupportHandler.TECHNICAL);
        let billingSupportHandler: AbstractSupportHandler = new BillingSupportHandler(AbstractSupportHandler.BILLING);
        let generalSupportHandler: AbstractSupportHandler = new GeneralSupportHandler(AbstractSupportHandler.GENERAL);

        technicalSupportHandler.setNextHandler(billingSupportHandler);
        billingSupportHandler.setNextHandler(generalSupportHandler);

        return technicalSupportHandler;
    }

}

export default RequestorClient;