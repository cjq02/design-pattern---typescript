import Expression from "./Expression";

class NumberExpression implements Expression {

    private number: number;

    constructor(number: string) {
        this.number = parseInt(number);
    }

    interpret(): number {
        return this.number;
    }
}

export default NumberExpression;