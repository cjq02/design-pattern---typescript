require('module-alias/register');
import ExpressionParser from "@patterns/behavior/interpreter/ExpressionParser";

class ApplicationInterpreter {

    public static main(): void {
        let input: string = "2 1 5 + *";
        let expressionParser: ExpressionParser = new ExpressionParser();
        let result: number = expressionParser.parse(input);
        console.log(`Final result: ${result}`);
    }
  
  }
  
  ApplicationInterpreter.main();