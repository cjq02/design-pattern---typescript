import Expression from "./Expression";
import AdditionExpression from "./AdditionExpression";
import SubstractionExpression from "./SubstractionExpression";
import MultiplicationExpression from "./MultiplicationExpression";

class ParserUtil {
    
    public static isOperator(symbol: string): boolean {
        return symbol === "+" || symbol === "-" || symbol === "*";
    }

    public static getExpressionObject(firstExpression: Expression, secondExpression: Expression, symbol: string): Expression {
        switch(symbol) {
            case "+":
                return new AdditionExpression(firstExpression, secondExpression);
            case "-":
                return new SubstractionExpression(firstExpression, secondExpression);
            case "*":
                return new MultiplicationExpression(firstExpression, secondExpression);
            default:
                throw Error(`No such symbol: ${symbol} !`);
        }
    }

}

export default ParserUtil;