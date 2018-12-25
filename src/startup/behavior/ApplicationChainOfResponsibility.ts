require('module-alias/register')

import AbstractSupportHandler from "@patterns/behavior/chain of responsibility/AbstractSupportHandler";
import RequestorClient from "@patterns/behavior/chain of responsibility/RequestorClient";

class ApplicationChainOfResponsibility {

  public static main(): void {
    let handler: AbstractSupportHandler = RequestorClient.getHandlerChain();

    handler.receiveRequest(AbstractSupportHandler.TECHNICAL, " I'm having problem with my internet connectivity.");
    console.log("............................................");
    handler.receiveRequest(AbstractSupportHandler.BILLING, "Please resend my bill of this month.");
    console.log("............................................");
    handler.receiveRequest(AbstractSupportHandler.GENERAL, "Please send any other plans for home users.");
  }

}

ApplicationChainOfResponsibility.main();