import { Stack } from 'typescript-collections';
import ParserUtil from "./ParserUtil";
import Expression from "./Expression";
import NumberExpression from "./NumberExpression";

export default class ExpressionParser {

    private stack: Stack<Expression> = new Stack();

    public parse(str: string): number {
        let tokenList: string[] = str.split(" ");

        for (let symbol of tokenList) {
            if (!ParserUtil.isOperator(symbol)) {
                let numberExpression: Expression = new NumberExpression(symbol);
                this.stack.push(numberExpression);
                console.log(`Pushed to stack: ${numberExpression.interpret()}`);

                continue;
            }

            let firstExpression: Expression = this.stack.pop();
            let secondExpression: Expression = this.stack.pop();
            console.log(`Popped operands ${firstExpression.interpret()}, ${secondExpression.interpret()}`);

            let operator: Expression = ParserUtil.getExpressionObject(firstExpression, secondExpression, symbol);
            let result: number = operator.interpret();
            let resultExpression: NumberExpression = new NumberExpression(result.toString());
            this.stack.push(resultExpression);
            console.log(`Pushed result to stack: ${resultExpression.interpret()}`)
        }

        let result: number = this.stack.pop().interpret();

        return result;
    }
}