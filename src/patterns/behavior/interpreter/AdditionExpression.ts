import Expression from "./Expression";

class AdditionExpression implements Expression {

    private firstExpression: Expression;
    private secondExpression: Expression;

    constructor(firstExpression: Expression, secondExpression: Expression) {
        this.firstExpression = firstExpression;
        this.secondExpression = secondExpression;
    }

    public interpret(): number {
        return this.firstExpression.interpret() + this.secondExpression.interpret();
    }

    public toString(): String {
        return "+";
    }
}

export default AdditionExpression;